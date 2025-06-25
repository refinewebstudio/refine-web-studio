// components/GrowthBookProvider.js
import { GrowthBookProvider } from "@growthbook/growthbook-react";
import {
  growthbook,
  initializeGrowthBook,
  setGrowthBookAttributes,
} from "../lib/growthbook";
import { useEffect } from "react";

export default function GrowthBookWrapper({ children, user = null }) {
  useEffect(() => {
    // Initialize GrowthBook (replaces loadFeatures)
    initializeGrowthBook();

    // Set user attributes if available
    if (user) {
      setGrowthBookAttributes({
        userId: user.id,
        email: user.email,
        plan: user.plan,
        // Add any other user attributes
      });
    } else {
      // Set anonymous attributes
      setGrowthBookAttributes({
        isAnonymous: true,
      });
    }

    // Cleanup on unmount
    return () => {
      growthbook.destroy();
    };
  }, [user]);

  return (
    <GrowthBookProvider growthbook={growthbook}>{children}</GrowthBookProvider>
  );
}

// Usage in _app.js:
// import GrowthBookWrapper from '../components/GrowthBookProvider'
//
// function MyApp({ Component, pageProps }) {
//   return (
//     <GrowthBookWrapper user={pageProps.user}>
//       <Component {...pageProps} />
//     </GrowthBookWrapper>
//   )
// }
