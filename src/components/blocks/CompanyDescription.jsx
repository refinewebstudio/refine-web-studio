
// ============================================
// COMPONENTS/BLOCKS/COMPANYDESCRIPTION.JSX
// ============================================
import { storyblokEditable } from '@storyblok/react/rsc'
import { Target, Users, Award, TrendingUp } from 'lucide-react'

export default function CompanyDescription({ blok }) {
  const features = [
    {
      icon: Target,
      title: 'Conversion Focused',
      description: 'Every website is built with conversion optimization in mind, turning visitors into customers.'
    },
    {
      icon: Users,
      title: 'Client Centered',
      description: 'We work closely with each client to understand their unique business needs and goals.'
    },
    {
      icon: Award,
      title: 'Quality Driven',
      description: 'Premium development standards ensure your website performs flawlessly across all devices.'
    },
    {
      icon: TrendingUp,
      title: 'Results Oriented',
      description: 'Data-driven approach to web development that delivers measurable business growth.'
    }
  ]

  return (
    <section {...storyblokEditable(blok)} id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                {blok.title || 'Refining digital experiences for Birmingham businesses'}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {blok.description || 'We\'re a Birmingham-based web development studio specializing in creating high-performance websites that drive real business results. With expertise in conversion rate optimization and modern web technologies, we help businesses transform their online presence.'}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Why choose Refine Web Studio?</h3>
              <div className="grid gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-lg opacity-90">
                  To help small and medium businesses in Birmingham and beyond establish a powerful online presence that drives growth, builds trust, and converts visitors into loyal customers.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm opacity-80">Client Retention</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-primary-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}