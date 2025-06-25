// ============================================
// COMPONENTS/BLOCKS/SERVICES.JSX - FIXED
// ============================================
import { TrackingButton } from '../TrackingButton'
import { Globe, ShoppingCart, Camera, BarChart, Wrench, Headphones, ArrowRight } from 'lucide-react'

import { storyblokEditable } from '@storyblok/react/rsc'

export default function Services({ blok }) {
  const trackingLocation = 'Services';
  const services = [
    {
      icon: Globe,
      title: 'Business Websites',
      description: 'Professional websites for service businesses, consultants, and local companies',
      features: ['Responsive design', 'Contact forms', 'SEO optimized', 'CMS integration'],
      price: 'From £2,000',
      popular: false
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing and inventory management',
      features: ['Shopify integration', 'Payment processing', 'Product management', 'Analytics'],
      price: 'From £3,500',
      popular: true
    },
    {
      icon: Camera,
      title: 'Photography Services',
      description: 'Professional photography to showcase your business and products',
      features: ['Product photography', 'Business headshots', 'Location shoots', 'Editing included'],
      price: 'From £300',
      popular: false
    },
    {
      icon: BarChart,
      title: 'CRO & Analytics',
      description: 'Conversion rate optimization to maximize your website performance',
      features: ['A/B testing', 'User behavior analysis', 'Performance reports', 'Ongoing optimization'],
      price: 'From £500',
      popular: false
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      description: 'Keep your website secure, updated, and performing at its best',
      features: ['Security updates', 'Performance monitoring', 'Content updates', 'Technical support'],
      price: 'From £100/month',
      popular: false
    },
    {
      icon: Headphones,
      title: 'Consultation & Strategy',
      description: 'Digital strategy consultation to plan your online growth',
      features: ['Business analysis', 'Technical recommendations', 'Growth planning', 'Implementation roadmap'],
      price: '£150/hour',
      popular: false
    }
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            {blok?.title || 'What we build for you'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {blok?.subtitle || 'From simple business websites to complex e-commerce solutions, we create digital experiences that drive results for your business.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className={`relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 border-2 ${
                  service.popular ? 'border-primary-500 scale-105' : 'border-gray-100 hover:border-primary-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-2xl font-bold text-gray-900 mb-4">{service.price}</div>
                
                <TrackingButton
                  ctaLocation={{trackingLocation}}
                  ctaText='Get Started'
                  href="#contact"
                  className={`block text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    service.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </TrackingButton>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need something custom? We'd love to discuss your specific requirements.
          </p>
          <TrackingButton
            ctaLocation={{trackingLocation}}
            ctaText='Contact us for a custom quote'
            href="#contact"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <span>Contact us for a custom quote</span>
            <ArrowRight className="w-5 h-5" />
          </TrackingButton>
        </div>
      </div>
    </section>
  )
}