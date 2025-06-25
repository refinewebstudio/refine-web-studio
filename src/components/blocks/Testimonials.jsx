
// ============================================
// COMPONENTS/BLOCKS/TESTIMONIALS.JSX
// ============================================
import { storyblokEditable } from '@storyblok/react/rsc'
import { Star, Quote } from 'lucide-react'
import { TrackingButton } from '../TrackingButton'

export default function Testimonials({ blok }) {
  const trackingLocation = 'Testimonials';
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Practice Manager',
      company: 'Birmingham Dental Care',
      content: 'Refine Web Studio completely transformed our online presence. The new website has increased our patient bookings by 150% and the ongoing support is exceptional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b375?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'James Rodriguez',
      role: 'Restaurant Owner',
      company: 'Tapas Barcelona',
      content: 'The online ordering system they built has been a game-changer for our business. Orders have doubled and our customers love how easy it is to use.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emma Thompson',
      role: 'Marketing Director',
      company: 'Thompson & Associates',
      content: 'Professional, efficient, and results-driven. Our new website has significantly improved our lead generation and client engagement.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'TechStart Birmingham',
      content: 'Working with Refine Web Studio was seamless from start to finish. They delivered exactly what we needed, on time and within budget.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Lisa Brown',
      role: 'Boutique Owner',
      company: 'Style & Grace',
      content: 'The e-commerce site they built has transformed our business. We\'re now selling online across the UK and our revenue has tripled.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'David Wilson',
      role: 'Consultant',
      company: 'Wilson Advisory',
      content: 'Exceptional attention to detail and deep understanding of conversion optimization. My website now works as a powerful business tool.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    }
  ]

  return (
    <section {...storyblokEditable(blok)} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            {blok.title || 'What our clients say'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {blok.subtitle || 'Don\'t just take our word for it. Here\'s what Birmingham business owners have to say about working with us.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-200" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">100%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
