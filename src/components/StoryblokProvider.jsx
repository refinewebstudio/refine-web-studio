// components/StoryblokProvider.jsx
import { storyblokInit, apiPlugin } from '@storyblok/react'

// Import all block components
import Hero from './blocks/Hero'
import CompanyDescription from './blocks/CompanyDescription'
import TechStack from './blocks/TechStack'
import Services from './blocks/Services'
import CaseStudies from './blocks/CaseStudies'
import Testimonials from './blocks/Testimonials'
import Contact from './blocks/Contact'
import Stats from './blocks/Stats'
import Process from './blocks/Process'
import Page from './blocks/Page'
import FallbackComponent from './blocks/FallbackComponent'

const components = {
  hero: Hero,
  company_description: CompanyDescription,
  tech_stack: TechStack,
  services: Services,
  case_studies: CaseStudies,
  testimonials: Testimonials,
  contact: Contact,
  stats: Stats,
  process: Process,
  page: Page,
}

console.log('=== STORYBLOK REGISTRATION DEBUG ===')
console.log('All components:', Object.keys(components))
console.log('Page component:', Page)
console.log('Page component type:', typeof Page)
console.log('=====================================')

const storyblokInstance = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: { 
    hero: Hero,
    company_description: CompanyDescription,
    tech_stack: TechStack,
    services: Services,
    case_studies: CaseStudies,
    testimonials: Testimonials,
    contact: Contact,
    stats: Stats,
    process: Process,
    page: Page
  },
  fallbackComponent: FallbackComponent,
})

console.log('Storyblok instance:', storyblokInstance)

export default function StoryblokProvider({ children }) {
  return children
}