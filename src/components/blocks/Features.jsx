// ============================================
// COMPONENTS/BLOCKS/FEATURES.JSX
// ============================================
import { storyblokEditable } from '@storyblok/react/rsc'
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Search, 
  BarChart3, 
  Users, 
  Clock, 
  Award,
  Code2,
  Palette
} from 'lucide-react'

export default function Features({ blok }) {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with 90+ PageSpeed scores and instant loading times',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with SSL certificates and 99.9% uptime guarantee',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Perfect responsive design that works flawlessly on all devices and screen sizes',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in search engine optimization to help your business rank higher on Google',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: BarChart3,
      title: 'Analytics Ready',
      description: 'Comprehensive tracking and conversion optimization built right in',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Users,
      title: 'User Focused',
      description: 'Designed with your customers in mind for maximum engagement and conversions',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Professional websites delivered in 2-3 weeks, not months',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Award-winning design and development that sets your business apart',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Code2,
      title: 'Modern Technology',
      description: 'Built with cutting-edge technologies like Next.js, React, and modern frameworks',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100'
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Unique designs tailored to your brand, not generic templates',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    }
  ]

  return (
    <section {...storyblokEditable(blok)} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            {blok.title || 'Why choose Refine Web Studio?'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {blok.subtitle || 'We deliver exceptional web development services that combine cutting-edge technology with proven business results.'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to experience the difference?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how these features can transform your business online.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <span>Start Your Project</span>
              <Zap className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}