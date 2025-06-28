
// ============================================
// COMPONENTS/BLOCKS/FAQ.JSX
// ============================================

'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { storyblokEditable } from '@storyblok/react/rsc'
import { TrackingButton } from '../TrackingButton'

export default function FAQSection({ blok }) {
    const [openFAQ, setOpenFAQ] = useState(0);
    const trackingLocation = 'FAQ Section';
    
    // Default FAQs if not provided by Storyblok
    const defaultFAQs = [
      {
        question: "I'm not technical – will I understand the reports?",
        answer: "Absolutely. We translate complex data into simple, actionable insights. You'll get easy-to-understand reports showing exactly how your website is performing and what we're doing to improve it. Think clear charts, plain English explanations, and specific recommendations you can actually use."
      },
      {
        question: "How long before I see results?",
        answer: "Most clients see measurable improvements within 4-6 weeks. However, CRO is an ongoing process – the longer we optimize, the better your results become. We'll fix obvious problems immediately, then continuously test and improve over time."
      },
      {
        question: "Do I need lots of website traffic for this to work?",
        answer: "Not necessarily. We can identify and fix obvious conversion problems immediately, regardless of traffic levels. For A/B testing, we typically need at least 1,000 monthly visitors, but we can start optimizing right away and see improvements from day one."
      },
      {
        question: "What if my industry is different or niche?",
        answer: "The principles of human psychology and user experience apply across all industries. We've optimized websites for everything from local plumbers to tech startups – the data always reveals opportunities. Every business has visitors who could become customers with the right approach."
      },
      {
        question: "How is this different from just redesigning my website?",
        answer: "Redesigns are based on opinions and assumptions. CRO is based on real data about how your actual customers behave. It's the difference between guessing what looks good and knowing what actually works to generate more business."
      },
      {
        question: "Can you prove this actually works?",
        answer: "Yes. Every test is tracked and measured. We provide detailed reports showing exactly how each change impacts your conversion rate, complete with before/after comparisons and statistical data. You'll see the proof in your increased enquiries and sales."
      }
    ];
  
    const faqs = blok?.faqs || defaultFAQs;
  
    // Handle case where blok might be undefined
    if (!blok) {
      console.warn('FAQSection component: No blok data received')
      return (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600">FAQ content is being loaded...</p>
          </div>
        </section>
      )
    }
  
    return (
      <section {...storyblokEditable(blok)}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {blok?.title || 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {blok?.subtitle || 'Common questions about CRO and Analytics – answered in plain English'}
            </p>
          </div>
  
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full px-6 py-6 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-all duration-200"
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-6 w-6 text-gray-500 transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 py-6 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
  
          {/* Bottom CTA */}
          <div className="text-center mt-12 p-8 bg-primary-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {blok?.cta_title || 'Still Have Questions?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {blok?.cta_subtitle || 'Book a free 15-minute call to discuss your website\'s conversion potential'}
            </p>
            <TrackingButton
              ctaLocation={trackingLocation}
              ctaText={blok?.cta_button_text || 'Book Free Strategy Call'}
              href={blok?.cta_button_link || '#contact'}
              className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold"
            >
              {blok?.cta_button_text || 'Book Free Strategy Call'}
            </TrackingButton>
          </div>
        </div>
      </section>
    )
  }