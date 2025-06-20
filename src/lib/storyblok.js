// ============================================
// LIB/STORYBLOK.JS - FIXED VERSION
// ============================================
// lib/storyblok.js
import {
  apiPlugin,
  storyblokInit,
  getStoryblokApi,
} from "@storyblok/react/rsc";

// Initialize Storyblok for server-side usage
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export const getStoryblokData = async (slug, version = "published") => {
  // Return null if no access token is configured
  if (!process.env.STORYBLOK_ACCESS_TOKEN) {
    console.warn(
      "Storyblok access token not configured, using fallback content"
    );
    return null;
  }

  try {
    const storyblokApi = getStoryblokApi();
    console.log("Fetching story:", slug);

    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version,
      resolve_links: "url",
    });

    console.log("Story data received:", data?.story);
    return data?.story;
  } catch (error) {
    if (error.status === 404) {
      console.warn(
        `Storyblok story '${slug}' not found, using fallback content`
      );
    } else {
      console.error("Error fetching Storyblok data:", error);
    }
    return null;
  }
};
