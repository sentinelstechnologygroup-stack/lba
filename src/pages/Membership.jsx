import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, X } from 'lucide-react';

import MembershipQuiz from '@/components/membership/MembershipQuiz';
import MemberTestimonials from '@/components/shared/MemberTestimonials';
import WhoShouldJoin from '@/components/membership/WhoShouldJoin';
import AfterYouJoin from '@/components/membership/AfterYouJoin';
import MemberReadinessChecklist from '@/components/membership/MemberReadinessChecklist';
import CategoryAvailability from '@/components/membership/CategoryAvailability';
import FoundingMemberCallout from '@/components/membership/FoundingMemberCallout';
import TrustStandards from '@/components/membership/TrustStandards';
import MembershipFAQ from '@/components/membership/MembershipFAQ';
import ReferralDisclaimer from '@/components/membership/ReferralDisclaimer';
import SampleMemberProfile from '@/components/members/SampleMemberProfile';
import NewOwnerHelp from '@/components/members/NewOwnerHelp';
import BusinessIntakeForm from '@/components/forms/BusinessIntakeForm';

const tiers = [
  {
    name: 'Community Member',
    price: '$10',
    period: '/month',
    tagline: 'Start here. Stop building alone.',
    desc: 'For new owners, early-stage entrepreneurs, solo operators, and side businesses who want affordable access to the business community.',
    features: [
      'Access to general meetings and selected networking events',
      'Basic member profile or listing',
      'Access to basic business resources',
      'Ability to meet other local owners',
      'Invitations to owner discussions, roundtables, and educational sessions',
      'Community participation',
    ],
    note: null,
    gold: false,
    featured: false,
    cta: 'Get Started',
  },
  {
    name: 'Visibility Member',
    price: '$25',
    period: '/month',
    tagline: 'Be seen. Be understood. Be findable.',
    desc: 'For businesses that want to be seen, understood, and easier to find inside the alliance.',
    features: [
      'Everything in Community Member',
      'Enhanced member profile with business description',
      'Website, social, and contact links',
      'Category listing in the member directory',
      'Occasional spotlight eligibility',
      'Event visibility when appropriate',
      'Improved directory presence',
    ],
    note: null,
    gold: false,
    featured: false,
    cta: 'Get Started',
  },
  {
    name: 'Category Member',
    price: '$50',
    period: '/month',
    tagline: 'Get positioned. Get recognized.',
    desc: 'For businesses that want approved category visibility and eligibility for relevant opportunity routing when available.',
    features: [
      'Everything in Visibility Member',
      'Approved business category placement',
      'Directory category visibility',
      'Eligibility for relevant inquiries when no exclusive partner controls the category',
      'Profile structured around services, geography, and ideal customer',
      'Ability to participate in category-based opportunities',
    ],
    note: 'Subject to category availability and chapter approval.',
    gold: false,
    featured: true,
    cta: 'Apply Now',
  },
  {
    name: 'Exclusive Category Partner',
    price: 'Starting at $150',
    period: '/month',
    tagline: 'Primary category positioning in your local market.',
    desc: 'For established businesses that want primary positioning in an approved category and geography.',
    features: [
      'Everything in Category Member',
      'Primary category position for an approved category/geography',
      'Enhanced directory placement',
      'Priority consideration for relevant inquiry routing',
      'Co-op visibility opportunities when available',
      'Featured category presence',
      'Eligibility for stronger chapter visibility',
    ],
    note: 'Subject to approval, category availability, geography, responsiveness, reputation, compliance, and continued participation.',
    gold: true,
    featured: false,
    cta: 'Apply or Inquire',
  },
  {
    name: 'Chapter / Founding Partner',
    price: 'Custom',
    period: ' pricing',
    tagline: 'Help build and support a local chapter.',
    desc: 'For businesses, sponsors, local leaders, or founding members who want to help build or support a local Link chapter.',
    features: [
      'Founding or chapter partner recognition',
      'Sponsor visibility across chapter',
      'Chapter leadership consideration',
      'Local chapter development opportunities',
      'Event and sponsor placement where appropriate',
      'Strategic partnership discussion',
      'Possible first-position category consideration where available',
      'Custom package based on market, chapter size, and role',
    ],
    note: 'Chapter partner opportunities are subject to approval, operating standards, and market availability.',
    gold: true,
    featured: false,
    cta: 'Apply to Become a Chapter Partner',
  },
];

const notList = [
  'A guaranteed lead-generation company',
  'A pay-to-win referral scheme',
  'A replacement for licensed professional advice',
  'A marketing agency',
  'A chamber clone',
  'A public free-for-all directory',
  'A mandatory training program',
  'A place where anyone can buy credibility without participation or approval',
];

export default function Membership() {
  const tiersRef = useRef(null);
  const tiersInView = useInView(tiersRef, { once: true, margin: '-80px' });

  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-36 px-6 lg:px-10" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="h-0.5 w-10 mb-8" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Membership</p>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-4xl" style={{ color: '#F7F5F0' }}>
              Membership Built for Every Stage of Business
            </h1>
            <p className="mt-7 text-base lg:text-lg leading-relaxed max-w-2xl" style={{ color: '#F7F5F0', opacity: 0.6 }}>
              Whether you are just starting out, trying to become more visible, looking for trusted resources, or ready to take a stronger position in your local market — The Link gives business owners a practical way to connect, learn, and grow with support.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 flex-wrap">
              <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <a href="#pricing">Compare Membership Options <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}>
                <a href="#quiz">Find My Level</a>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}>
                <Link to="/contact">Talk to a Chapter Organizer</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Should Join */}
      <WhoShouldJoin />

      {/* Pricing Tiers */}
      <section id="pricing" ref={tiersRef} className="py-24 lg:py-32 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={tiersInView ? { opacity: 1, y: 0 } : {}} className="mb-14">
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Membership Tiers</p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
              Choose Your Level of Involvement
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 25 }}
                animate={tiersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="bg-white flex flex-col p-8 relative"
                style={{
                  border: tier.featured ? '2px solid #00606B' : tier.gold ? '1px solid #B8862B55' : '1px solid #E4E0D8',
                  borderTop: tier.featured ? '3px solid #00606B' : tier.gold ? '3px solid #B8862B' : '1px solid #E4E0D8',
                }}
              >
                {tier.featured && (
                  <span className="absolute -top-3.5 left-7 text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1 text-white" style={{ backgroundColor: '#00606B' }}>
                    Recommended
                  </span>
                )}
                {tier.gold && !tier.featured && (
                  <span className="absolute -top-3.5 left-7 text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1 text-white" style={{ backgroundColor: '#B8862B' }}>
                    Partner
                  </span>
                )}
                <h3 className="font-heading font-bold text-lg mb-1" style={{ color: tier.gold ? '#B8862B' : '#111418' }}>{tier.name}</h3>
                <p className="text-xs mb-4" style={{ color: '#00606B', fontStyle: 'italic' }}>{tier.tagline}</p>
                <div className="mb-5">
                  <span className="font-heading font-bold text-3xl" style={{ color: tier.gold ? '#B8862B' : '#111418' }}>{tier.price}</span>
                  <span className="text-sm ml-1" style={{ color: '#2C3238', opacity: 0.5 }}>{tier.period}</span>
                </div>
                <p className="text-sm leading-relaxed mb-7" style={{ color: '#2C3238', opacity: 0.65 }}>{tier.desc}</p>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: tier.gold ? '#B8862B' : '#00606B' }} />
                      <span style={{ color: '#111418' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                {tier.note && (
                  <p className="text-[11px] leading-relaxed mb-6 p-3" style={{ color: '#2C3238', opacity: 0.55, backgroundColor: '#FAF8F3', borderLeft: '2px solid #E4E0D8' }}>
                    {tier.note}
                  </p>
                )}
                <Button asChild size="sm" className="w-full text-xs font-semibold tracking-wide"
                  style={tier.featured
                    ? { backgroundColor: '#00606B', color: '#fff' }
                    : tier.gold
                      ? { backgroundColor: 'transparent', color: '#B8862B', border: '1px solid #B8862B' }
                      : { backgroundColor: 'transparent', color: '#111418', border: '1px solid #E4E0D8' }
                  }>
                  <Link to="/contact">{tier.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-6 border" style={{ borderColor: '#E4E0D8', backgroundColor: '#fff' }}>
            <p className="text-sm leading-relaxed text-center" style={{ color: '#2C3238', opacity: 0.6 }}>
              <strong style={{ color: '#111418' }}>Important: </strong>
              Membership does not guarantee leads, revenue, referrals, sales, or business outcomes. Visibility, category placement, referral routing, sponsorship placement, and partner opportunities may be affected by membership level, category availability, geography, responsiveness, quality, compliance, chapter approval, and participation.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <div id="quiz"><MembershipQuiz /></div>

      {/* What The Link Is Not */}
      <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Clarity</p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15] mb-6" style={{ color: '#111418' }}>
              What The Link Is Not
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
              The Link is a structured business-owner alliance designed to help serious owners connect, learn, become visible, access resources, and grow with support.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <ul className="space-y-3">
              {notList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <X className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#B8862B' }} />
                  <span style={{ color: '#2C3238' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <AfterYouJoin />
      <NewOwnerHelp />
      <CategoryAvailability />
      <SampleMemberProfile />
      <MemberReadinessChecklist />
      <TrustStandards />
      <FoundingMemberCallout />
      <MemberTestimonials
        limit={3}
        bgColor="#ffffff"
        title="What Members Have Experienced"
        subtext="Outcomes depend on participation, business stage, and market. All content below is sample/demo data."
      />
      <MembershipFAQ />
      <ReferralDisclaimer />

      {/* Business Intake Form */}
      <section className="py-4 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-2 pt-20 pb-10">
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Start the Conversation</p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
              Tell Us About Your Business
            </h2>
          </motion.div>
        </div>
      </section>
      <BusinessIntakeForm />

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-10 text-center" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-5" style={{ color: '#F7F5F0' }}>Ready to Join The Link?</h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#F7F5F0', opacity: 0.55 }}>
              Reach out to learn which membership level is right for you and whether your local chapter is accepting new members.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                <Link to="/contact">Contact Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}>
                <Link to="/find-chapter">Find a Chapter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}