import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SponsorInquiryForm from '@/components/forms/SponsorInquiryForm';

const partnerCategories = [
  { name: 'Banking & Credit', partners: ['First National Business Bank', 'Capitol Credit Union', 'Lone Star Business Lending'] },
  { name: 'Insurance', partners: ['Shield Business Insurance', 'Protec Group', 'Gulf Coast Commercial Coverage'] },
  { name: 'Legal Services', partners: ['Sterling Legal Partners', 'Cornerstone Business Law'] },
  { name: 'Accounting & Tax', partners: ['Morales & Co. CPA', 'Summit Accounting Group'] },
  { name: 'Marketing & Branding', partners: ['Skyline Media Group', 'Magnolia Marketing Co.'] },
  { name: 'Technology & IT', partners: ['CloudBridge IT Solutions', 'Apex Digital Services'] },
  { name: 'HR & Payroll', partners: ['PayStream Solutions', 'Workforce Plus'] },
  { name: 'Logistics & Fleet', partners: ['Harper Logistics Group', 'FleetCard National'] },
  { name: 'Real Estate', partners: ['Summit Realty Group', 'Gulf Coast Commercial Brokers'] },
];

export default function Partners() {
  return (
    <div>
      <section className="py-24 lg:py-36 px-6 lg:px-10" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="h-0.5 w-10 mb-8" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Partners</p>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl leading-[1.1] max-w-3xl" style={{ color: '#F7F5F0' }}>
              Strategic Partners
            </h1>
            <p className="mt-6 text-base leading-relaxed max-w-2xl" style={{ color: '#F7F5F0', opacity: 0.55 }}>
              Vetted organizations across essential business categories. Strategic partners can sponsor chapters and provide member benefits. All partners are reviewed for quality and alignment with Link standards.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border p-7"
                style={{ borderColor: '#E4E0D8' }}
              >
                <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#B8862B' }}>{cat.name}</span>
                <ul className="space-y-3">
                  {cat.partners.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm" style={{ color: '#111418' }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#00606B' }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Partner Inquiry</p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
              Become a Strategic Partner or Sponsor
            </h2>
            <p className="mt-5 text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
              Reach growth-minded business owners across the Link network. Sponsor chapters, offer member benefits, and build trusted B2B relationships through a structured alliance.
            </p>
          </motion.div>
          <SponsorInquiryForm />
        </div>
      </section>
    </div>
  );
}