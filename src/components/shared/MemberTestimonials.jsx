import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { sampleTestimonials } from '@/data/sampleTestimonials';

const levelColors = {
  'Exclusive Category Partner': { bg: '#FDF5E6', color: '#B8862B' },
  'Category Member': { bg: '#E6F4F5', color: '#00606B' },
  'Visibility Member': { bg: '#F3EFE7', color: '#2C3238' },
  'Community Member': { bg: '#F7F5F0', color: '#888' },
};

/**
 * MemberTestimonials — reusable testimonial grid section.
 * Props:
 *   limit: number (default 6)
 *   bgColor: string (default '#FAF8F3')
 *   title: string
 *   subtext: string
 */
export default function MemberTestimonials({
  limit = 6,
  bgColor = '#FAF8F3',
  title = 'What Members Say',
  subtext = 'Outcomes vary by business, market, and level of participation. All testimonials below are sample/demo content.',
}) {
  const shown = sampleTestimonials.slice(0, limit);

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#00606B' }}>Member Experiences</p>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>{title}</h2>
            </div>
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 flex-shrink-0 self-start lg:self-auto"
              style={{ backgroundColor: '#FDF5E6', color: '#B8862B' }}>
              ★ Sample Content
            </span>
          </div>
          {subtext && (
            <p className="text-sm leading-relaxed max-w-2xl mt-3" style={{ color: '#2C3238', opacity: 0.6 }}>{subtext}</p>
          )}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((t, i) => {
            const lc = levelColors[t.membershipLevel] || levelColors['Community Member'];
            return (
              <motion.div key={t.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border flex flex-col p-7" style={{ borderColor: '#E4E0D8', borderTop: `2px solid ${lc.color}` }}>
                <Quote className="w-5 h-5 mb-4 flex-shrink-0" style={{ color: '#E4E0D8' }} />
                <p className="text-sm leading-relaxed italic flex-1 mb-6" style={{ color: '#2C3238', opacity: 0.8 }}>
                  "{t.quote}"
                </p>
                <div className="border-t pt-4" style={{ borderColor: '#F3EFE7' }}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#111418' }}>{t.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#2C3238', opacity: 0.5 }}>{t.business}</p>
                      <p className="text-[10px] mt-0.5" style={{ color: '#2C3238', opacity: 0.4 }}>{t.chapter}</p>
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 flex-shrink-0"
                      style={{ backgroundColor: lc.bg, color: lc.color }}>
                      {t.membershipLevel === 'Exclusive Category Partner' ? 'Excl. Partner' : t.membershipLevel}
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold mt-3" style={{ color: '#00606B' }}>{t.result}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] mt-8 text-center leading-relaxed" style={{ color: '#2C3238', opacity: 0.35 }}>
          All testimonials above are sample/demo content. Membership does not guarantee referrals, leads, revenue, or specific business outcomes.
        </p>
      </div>
    </section>
  );
}