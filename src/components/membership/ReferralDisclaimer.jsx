import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function ReferralDisclaimer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12 px-6 lg:px-10"
      style={{ backgroundColor: '#111418' }}
    >
      <div className="max-w-5xl mx-auto border p-8 flex flex-col sm:flex-row gap-6 items-start" style={{ borderColor: '#ffffff15' }}>
        <ShieldCheck className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#B8862B' }} />
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#B8862B' }}>Referral & Opportunity Disclaimer</p>
          <p className="text-sm leading-relaxed" style={{ color: '#F7F5F0', opacity: 0.55 }}>
            Link Business Alliance does not guarantee leads, referrals, revenue, sales volume, or business outcomes. Opportunity routing, category placement, referral eligibility, sponsor positioning, and member introductions depend on membership level, category availability, geography, responsiveness, quality standards, compliance with Link policies, chapter approval, and active participation. Members who participate consistently, communicate clearly, maintain quality, and engage with the community tend to benefit most from the alliance. Membership in The Link is not a guarantee of any specific result.
          </p>
        </div>
      </div>
    </motion.section>
  );
}