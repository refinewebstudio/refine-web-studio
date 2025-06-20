
// ============================================
// COMPONENTS/BLOCKS/CASESTUDIES.JSX
// ============================================
import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react'

export default function CaseStudies({ blok }) {
  const caseStudies = [
    {
      title: 'Birmingham Dental Practice',
      category: 'Healthcare Website',
      description: 'Complete website redesign for a local dental practice, including online booking system and patient portal.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
      results: [
        { label: 'Increase in bookings', value: '150%', icon: TrendingUp },
        { label: 'New patients/month', value: '45+', icon: Users },
        { label: 'Project timeline', value: '3 weeks', icon: Clock }
      ],
      technologies: ['Next.js', 'Storyblok', 'Booking System'],
      url: '#'
    },
    {
      title: 'Local Restaurant Chain',
      category: 'E-commerce & Ordering',
      description: 'Online ordering platform with location management and real-time menu updates across multiple locations.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      results: [
        { label: 'Online orders increase', value: '200%', icon: TrendingUp },
        { label: 'Customer retention', value: '85%', icon: Users },
        { label: 'Development time', value: '4 weeks', icon: Clock }
      ],
      technologies: ['Next.js', 'Stripe', 'Real-time API'],
      url: '#'
    },
    {
      title: 'Professional Services Firm',
      category: 'Corporate Website',
      description: 'Modern corporate website with client portal, case study showcase, and lead generation optimization.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      results: [
        { label: 'Lead generation', value: '120%', icon: TrendingUp },
        { label: 'Page engagement', value: '+65%', icon: Users },
        { label: 'Launch timeline', value: '2 weeks', icon: Clock }
      ],
      technologies: ['Next.js', 'Storyblok', 'Analytics'],
      url: '#'
    }
  ]

  return (
    <section {...storyblokEditable(blok)} id="case-studies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            {blok.title || 'Recent success stories'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {blok.subtitle || 'See how we\'ve helped Birmingham businesses transform their online presence and achieve measurable results.'}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
              {/* Image */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
                <p className="text-gray-600">{study.description}</p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                  {study.results.map((result, resultIndex) => {
                    const Icon = result.icon
                    return (
                      <div key={resultIndex} className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Icon className="h-4 w-4 text-primary-600" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={study.url}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <span>View case study</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <span>Start your success story</span>
            <TrendingUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
