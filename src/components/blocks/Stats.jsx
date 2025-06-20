
// ============================================
// COMPONENTS/BLOCKS/STATS.JSX (Bonus component)
// ============================================
import { storyblokEditable } from '@storyblok/react/rsc'
import { TrendingUp, Users, Clock, Award } from 'lucide-react'

export default function Stats({ blok }) {
  const stats = [
    {
      icon: TrendingUp,
      value: '150%',
      label: 'Average conversion increase',
      description: 'Our CRO-focused approach delivers measurable results'
    },
    {
      icon: Users,
      value: '50+',
      label: 'Happy clients',
      description: 'Birmingham businesses trust us with their digital presence'
    },
    {
      icon: Clock,
      value: '2-3',
      label: 'Week delivery',
      description: 'Fast turnaround without compromising on quality'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Client satisfaction',
      description: 'Exceptional service and results speak for themselves'
    }
  ]

  return (
    <section {...storyblokEditable(blok)} className="py-24 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {blok.title || 'Results that speak for themselves'}
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            {blok.subtitle || 'We measure our success by the success of our clients. Here are the numbers that matter.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-primary-100 text-sm">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}