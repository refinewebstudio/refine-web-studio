
// ============================================
// COMPONENTS/BLOCKS/CRO-ANALYTICS.JSX
// ============================================

'use client'
import { useState } from 'react'
import { BarChart3, Target, TrendingUp, Users, Eye, MousePointer, CheckCircle, ChevronDown } from 'lucide-react'
import { storyblokEditable } from '@storyblok/react/rsc'
import { TrackingButton } from '../TrackingButton'

export default function CROAnalyticsSection({ blok }) {
  const trackingLocation = 'CRO Analytics Section';
  
  // Handle case where blok might be undefined
  if (!blok) {
    console.warn('CROAnalyticsSection component: No blok data received')
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">CRO Analytics content is being loaded...</p>
        </div>
      </section>
    )
  }

  return (
    <section {...storyblokEditable(blok)}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {blok?.title || 'Turn More Visitors Into Customers'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {blok?.subtitle || 'Your website might look great, but is it actually working for your business? We use real data and proven optimization techniques to transform browsers into buyers.'}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* CRO Explanation */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {blok?.cro_title || 'Conversion Rate Optimization'}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {blok?.cro_description || 'Imagine 100 people visit your website, but only 2 actually contact you or make a purchase. CRO is the science of turning that 2 into 4, 6, or even 10 – without needing more traffic.'}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Split Testing (A/B Testing)</h4>
                  <p className="text-gray-600">We create two versions of a page and see which one gets more customers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">User Journey Analysis</h4>
                  <p className="text-gray-600">We track exactly where visitors drop off and fix those problem areas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call-to-Action Optimization</h4>
                  <p className="text-gray-600">We test different buttons, forms, and messaging to find what works best</p>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Explanation */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <BarChart3 className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {blok?.analytics_title || 'Web Analytics'}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {blok?.analytics_description || 'Analytics is like having a crystal ball for your website. Instead of guessing what your customers want, we use real data to make informed decisions that grow your business.'}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Eye className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Visitor Behavior Tracking</h4>
                  <p className="text-gray-600">Where do people click? How long do they stay? Where do they leave?</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Traffic Source Analysis</h4>
                  <p className="text-gray-600">Which marketing channels bring you the best customers?</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MousePointer className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Conversion Path Mapping</h4>
                  <p className="text-gray-600">What journey do successful customers take through your site?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {/* <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {blok?.results_title || 'Real Results for Birmingham Businesses'}
            </h3>
            <p className="text-gray-600">
              {blok?.results_subtitle || 'Our data-driven approach delivers measurable improvements'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-12 w-12 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25-40%</div>
              <p className="text-gray-600">Average increase in conversions within 3 months</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">More Leads</div>
              <p className="text-gray-600">Without spending more on advertising</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <Target className="h-12 w-12 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Better ROI</div>
              <p className="text-gray-600">Higher return on your marketing investment</p>
            </div>
          </div>
        </div> */}

        {/* CTA */}
        {/* <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {blok?.cta_title || 'Ready to Turn More Visitors Into Customers?'}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {blok?.cta_description || 'Get a free website conversion audit and discover exactly how many potential customers you\'re losing – and how to win them back.'}
          </p>
          <TrackingButton 
            ctaLocation={trackingLocation}
            ctaText={blok?.cta_button_text || 'Get My Free Conversion Audit'}
            href={blok?.cta_button_link || '#contact'} 
            className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-200 text-lg font-semibold"
          >
            {blok?.cta_button_text || 'Get My Free Conversion Audit'}
          </TrackingButton>
        </div> */}
      </div>
    </section>
  )
}