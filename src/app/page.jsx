
// app/page.jsx
import { getStoryblokData } from '../lib/storyblok'
import { StoryblokComponent } from '@storyblok/react'

export default async function Home() {
  console.log('Home page: Starting to fetch Storyblok data')
  
  // Try to fetch from Storyblok
  const story = await getStoryblokData('home')
  
  console.log('Home page: Story received:', story)
  
  // Enhanced fallback content with proper component structure
  const fallbackContent = {
    component: 'page',
    _uid: 'fallback-page',
    body: [
      {
        component: 'hero',
        _uid: 'hero-1',
        title: 'Refine your digital presence',
        subtitle: 'Professional web development that converts visitors into customers through data-driven optimization and stunning design. Built with modern technology for maximum performance.',
        primary_button_text: 'Start Your Project',
        primary_button_link: '#contact',
        secondary_button_text: 'View Our Work',
        secondary_button_link: '#case-studies'
      },
      {
        component: 'company_description',
        _uid: 'company-2',
        title: 'Refining digital experiences for Birmingham businesses',
        description: 'We\'re a Birmingham-based web development studio specializing in creating high-performance websites that drive real business results. With expertise in conversion rate optimization and modern web technologies, we help businesses transform their online presence.'
      },
      {
        component: 'tech_stack',
        _uid: 'tech-3',
        title: 'Built with modern technology',
        subtitle: 'We use cutting-edge technologies and best practices to deliver websites that are fast, secure, and scalable. Our tech stack ensures your website stays ahead of the competition.'
      },
      {
        component: 'services',
        _uid: 'services-4',
        title: 'What we build for you',
        subtitle: 'From simple business websites to complex e-commerce solutions, we create digital experiences that drive results for your business.'
      },
      {
        component: 'case_studies',
        _uid: 'cases-5',
        title: 'Recent success stories',
        subtitle: 'See how we\'ve helped Birmingham businesses transform their online presence and achieve measurable results.'
      },
      {
        component: 'testimonials',
        _uid: 'testimonials-6',
        title: 'What our clients say',
        subtitle: 'Don\'t just take our word for it. Here\'s what Birmingham business owners have to say about working with us.'
      },
      {
        component: 'process',
        _uid: 'process-7',
        title: 'Our proven process',
        subtitle: 'From initial consultation to launch and beyond, we follow a structured approach that ensures your project\'s success.'
      },
      {
        component: 'stats',
        _uid: 'stats-8',
        title: 'Results that speak for themselves',
        subtitle: 'We measure our success by the success of our clients. Here are the numbers that matter.'
      },
      {
        component: 'contact',
        _uid: 'contact-9',
        title: 'Ready to start your project?',
        subtitle: 'Let\'s discuss your vision and create something amazing together. Get in touch for a free consultation.'
      }
    ]
  }

  // Use Storyblok content if available, otherwise use fallback
  const content = story?.content || fallbackContent
  
  console.log('Home page: Using content:', content.component, 'with', content.body?.length, 'blocks')

  return <StoryblokComponent blok={content} />
}