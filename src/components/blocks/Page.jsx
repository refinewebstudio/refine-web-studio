// components/blocks/Page.jsx

import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { TrackingButton } from '../TrackingButton'

export default function Page({ blok }) {
  console.log('Page component received blok:', blok)
  
  // Handle case where blok might be undefined
  if (!blok) {
    console.warn('Page component: No blok data received')
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Loading...
          </h1>
          <p className="text-gray-600">
            Content is being loaded
          </p>
        </div>
      </main>
    )
  }

  return (
    <main {...storyblokEditable(blok)} className="min-h-screen">
      {blok.body && blok.body.length > 0 ? (
        blok.body.map((nestedBlok) => {
          console.log('Rendering nested block:', nestedBlok.component, nestedBlok)
          return (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          )
        })
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Refine Web Studio
            </h1>
            <p className="text-gray-600">
              Content body is empty. Add blocks in Storyblok.
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
