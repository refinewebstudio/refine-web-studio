
// ============================================
// COMPONENTS/BLOCKS/PROCESS.JSX (Bonus component)
// ============================================
import { storyblokEditable } from '@storyblok/react/rsc'
import { MessageSquare, Palette, Code, Rocket, BarChart3 } from 'lucide-react'
import { TrackingButton } from '../TrackingButton'

export default function Process({ blok }) {
  const trackingLocation = 'Process';
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery & Planning',
      description: 'We start with a detailed consultation to understand your business goals, target audience, and project requirements. We also analyze your current conversion funnel if you have an existing site.',
      duration: '1-2 days'
    },
    {
      icon: Palette,
      title: 'Design & Strategy',
      description: 'Our team creates wireframes and designs that align with your brand while optimizing for conversions. Every element is positioned to guide visitors toward taking action.',
      duration: '3-5 days'
    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'We build your website using modern technologies with analytics tracking built-in from day one. Fast, secure, mobile-responsive, and ready to measure performance.',
      duration: '1-2 weeks'
    },
    {
      icon: BarChart3,
      title: 'Launch & Optimize',
      description: 'After launch, we track visitor behavior, run A/B tests, and continuously optimize your site\'s performance to maximize conversions. Ongoing support included.',
      duration: 'Ongoing'
    }
  ]

  return (
    <section {...storyblokEditable(blok)} id="process" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {blok.title || 'Our process'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {blok.subtitle || 'From initial consultation to launch and beyond, we follow a structured approach that ensures your project\'s success.'}
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 z-0"></div>
                  )}
                  
                  <div className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 z-10">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                        Step {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="text-sm font-medium text-primary-600">{step.duration}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <TrackingButton
            ctaLocation={{trackingLocation}}
            ctaText='Start your project today'
            href="#contact"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <span>Start your project today</span>
            <Rocket className="h-5 w-5" />
          </TrackingButton>
        </div>
      </div>
    </section>
  )
}