
// ============================================
// COMPONENTS/BLOCKS/HERO.JSX - SIMPLIFIED
// ============================================

import { ArrowRight, Play, Star } from 'lucide-react'
import { storyblokEditable } from '@storyblok/react/rsc'
import { TrackingButton } from '../TrackingButton'

export default function Hero({ blok }) {
    const trackingLocation = 'Hero';
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
    <section {...storyblokEditable(blok)}
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4 fill-current" />
              <span>Performance optimized web development</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {blok?.title ? (
                  <>
                    {blok.title.split(' ').slice(0, -2).join(' ')}
                    <span className="text-primary-600 block">{blok.title.split(' ').slice(-2).join(' ')}</span>
                  </>
                ) : (
                  <>
                    Refine your digital
                    <span className="text-primary-600 block">presence</span>
                  </>
                )}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {blok?.subtitle || 'Professional web development that converts visitors into customers through data-driven optimization and stunning design. Built with modern technology for maximum performance.'}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <TrackingButton 
                  ctaLocation={{trackingLocation}}
                  ctaText={blok?.secondary_button_text || 'View Our Work'}
                  href={blok?.primary_button_link || '#contact'} className="inline-flex items-center justify-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-200 group text-lg font-semibold">
                <span>{blok?.primary_button_text || 'Start Your Project'}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </TrackingButton>
              <TrackingButton
                ctaLocation={{trackingLocation}}
                ctaText={blok?.primary_button_text || 'Start Your Project'}
                href={blok?.secondary_button_link || '#case-studies'}
                className="inline-flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all duration-200 group text-lg font-semibold"
              >
                <Play className="h-5 w-5" />
                <span>{blok?.secondary_button_text || 'View Our Work'}</span>
              </TrackingButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">8+</div>
                <div className="text-gray-600">Web development experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">Fast</div>
                <div className="text-gray-600">Sub-3-second page load times consistently</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Mobile first, responsive design</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                {/* Mock Website Preview */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="flex-1 bg-gray-100 rounded ml-4 h-6"></div>
                  </div>
                  <div className="bg-primary-500 rounded-lg h-32 flex items-center justify-center">
                    <div className="text-white text-4xl">🚀</div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-200 rounded h-4"></div>
                    <div className="bg-gray-200 rounded h-4 w-3/4"></div>
                    <div className="bg-gray-200 rounded h-4 w-1/2"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-100 rounded h-16"></div>
                    <div className="bg-gray-100 rounded h-16"></div>
                    <div className="bg-gray-100 rounded h-16"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500 rounded-2xl rotate-12 opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}