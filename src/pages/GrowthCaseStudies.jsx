import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { sampleCaseStudies } from '@/data/sampleCaseStudies';

const levelColors = {
  'Exclusive Category Partner': { bg: '#FDF5E6', color: '#B8862B' },
  'Category Member': { bg: '#E6F4F5', color: '#00606B' },
  'Visibility Member': { bg: '#F3EFE7', color: '#2C3238' },
  'Community Member': { bg: '#F7F5F0', color: '#888' },
};

export default function GrowthCaseStudies() {
  return (
    <div>
      <PageHero
        eyebrow="Growth Case Studies"
        h1="How Business Owners Use The Link to Build."
        subtext="Structured examples of how Link members have used relationships, resources, visibility, and chapter support to address real business challenges."
        heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
        heroAlt="Business owners reviewing growth strategies and case studies"
        primaryCta={{ label: 'Read Case Studies', route: '#case-studies' }}
        secondaryCta={{ label: 'Join The Link', route: '/join' }}
      />

      {/* Disclaimer banner */}
      <section className="py-4 px-6 lg:px-10 border-b" style={{ backgroundColor: '#FDF5E6', borderColor: '#E4E0D8' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs leading-relaxed text-center" style={{ color: '#2C3238' }}>
            <strong style={{ color: '#B8862B' }}>★ Sample/Demo Content:</strong> All case studies below are fictional and for illustrative purposes only. They do not represent real members, real outcomes, or guarantees of results. Membership does not guarantee referrals, revenue, leads, or business outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#00606B' }}>Member Growth Examples</p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
              Real Challenges. Structured Support.
            </h2>
            <p className="text-sm leading-relaxed max-w-2xl mt-3" style={{ color: '#2C3238', opacity: 0.65 }}>
              These structured examples illustrate how different types of businesses have used The Link to address specific challenges. All content is sample/demo data.
            </p>
          </motion.div>

          <div className="space-y-10">
            {sampleCaseStudies.map((cs, i) => {
              const lc = levelColors[cs.membershipLevel] || levelColors['Community Member'];
              return (
                <motion.div key={cs.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-white border" style={{ borderColor: '#E4E0D8', borderLeft: `3px solid ${lc.color}` }}>

                  {/* Card header */}
                  <div className="p-7 border-b" style={{ borderColor: '#F3EFE7' }}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="font-heading font-bold text-xl leading-snug" style={{ color: '#111418' }}>{cs.business}</h3>
                        <p className="text-xs mt-1" style={{ color: '#2C3238', opacity: 0.5 }}>{cs.owner} · {cs.chapter} · {cs.category}</p>
                      </div>
                      <span className="text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1"
                        style={{ backgroundColor: lc.bg, color: lc.color }}>
                        {cs.membershipLevel === 'Exclusive Category Partner' ? 'Excl. Partner' : cs.membershipLevel}
                      </span>
                    </div>
                  </div>

                  {/* Card body — 3 columns on desktop */}
                  <div className="grid md:grid-cols-3" style={{ borderTop: '1px solid #F3EFE7' }}>
                    <div className="p-7 border-b md:border-b-0 md:border-r" style={{ borderColor: '#F3EFE7' }}>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#B8862B' }}>The Challenge</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.75 }}>{cs.challenge}</p>
                    </div>
                    <div className="p-7 border-b md:border-b-0 md:border-r" style={{ borderColor: '#F3EFE7' }}>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#00606B' }}>How The Link Helped</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.75 }}>{cs.howLinkHelped}</p>
                    </div>
                    <div className="p-7" style={{ borderColor: '#F3EFE7' }}>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#00606B' }}>Result</p>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: '#2C3238', opacity: 0.75 }}>{cs.result}</p>
                      <div className="space-y-2">
                        {cs.keyTakeaways.map((kt, j) => (
                          <div key={j} className="flex items-start gap-2 text-xs" style={{ color: '#111418' }}>
                            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#00606B' }} />
                            <span style={{ opacity: 0.7 }}>{kt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 px-6 lg:px-10 bg-white border-t" style={{ borderColor: '#E4E0D8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs leading-relaxed text-center" style={{ color: '#2C3238', opacity: 0.4 }}>
            All case studies are sample/demo content created for illustrative purposes. They are not representations of real members or actual outcomes. Membership in The Link Business Alliance does not guarantee referrals, clients, revenue, partnerships, or any specific business result. Outcomes depend on individual participation, market conditions, business readiness, and other factors.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 px-6 lg:px-10 text-center" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="h-0.5 w-10 mx-auto mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#F7F5F0' }}>
              Build Your Own Story With Support.
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#F7F5F0', opacity: 0.55 }}>
              Membership outcomes depend on your participation, your market, and how you show up. The Link provides structure, relationships, resources, and visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <Link to="/join">Join The Link <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}>
                <Link to="/membership">Compare Membership</Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}>
                <Link to="/start-chapter">Start a Chapter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}