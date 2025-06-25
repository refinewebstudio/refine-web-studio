// ============================================
// COMPONENTS/BLOCKS/TECHSTACK.JSX - FIXED
// ============================================
import { Code2, Smartphone, Zap, Shield, Search, BarChart3 } from 'lucide-react'
import { TrackingButton } from '../TrackingButton'
import { storyblokEditable } from '@storyblok/react/rsc'

export default function TechStack({ blok }) {
  const trackingLocation = 'Tech Stack';
  const technologies = [
    {
      icon: Code2,
      name: 'Next.js & React',
      description: 'Modern JavaScript frameworks for lightning-fast, interactive websites'
    },
    {
      icon: Smartphone,
      name: 'Responsive Design',
      description: 'Perfect experience across desktop, tablet, and mobile devices'
    },
    {
      icon: Zap,
      name: 'Performance Optimized',
      description: 'Fast loading times and smooth user experiences'
    },
    {
      icon: Shield,
      name: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: Search,
      name: 'SEO Optimized',
      description: 'Built-in search engine optimization for better visibility'
    },
    {
      icon: BarChart3,
      name: 'Analytics Ready',
      description: 'Comprehensive tracking and conversion optimization'
    }
  ]

  const techLogos = [
    { name: 'Next.js', logo: '▲' },
    { name: 'React', logo: '⚛' },
    { name: 'GrowthBook', logo: '📊' },
    { name: 'Tailwind', logo: '🎨' },
    { name: 'Storyblok', logo: '📝' },
    { name: 'Vercel', logo: '▽' }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            {blok?.title || 'Built with modern technology'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {blok?.subtitle || 'We use cutting-edge technologies and best practices to deliver websites that are fast, secure, and scalable. Our tech stack ensures your website stays ahead of the competition.'}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            )
          })}
        </div>

        {/* Tech Stack Logos */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Technologies we love
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {techLogos.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-100 transition-colors">
                  <span className="text-2xl">{tech.logo}</span>
                </div>
                <div className="text-sm font-medium text-gray-700">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <TrackingButton
            ctaLocation={{trackingLocation}}
            ctaText='Discuss your project'
            href="#contact"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <span>Discuss your project</span>
            <Code2 className="h-5 w-5" />
          </TrackingButton>
        </div>
      </div>
    </section>
  )
}