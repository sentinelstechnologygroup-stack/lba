import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Wrench, DollarSign, Landmark, Users, BookOpen, Briefcase, BarChart2 } from 'lucide-react';

const categories = [
  {
    icon: FileText,
    title: 'Templates & Guides',
    count: 18,
    desc: 'Business plan templates, SOPs, client contracts, onboarding checklists, and operational worksheets.',
  },
  {
    icon: Wrench,
    title: 'Tools & Vendor Recommendations',
    count: 14,
    desc: 'CRM platforms, accounting tools, scheduling software, HR platforms, and project management recommendations.',
  },
  {
    icon: DollarSign,
    title: 'Funding & Capital',
    count: 10,
    desc: 'SBA programs, grant databases, equipment financing, line of credit guidance, and SBDC resources.',
  },
  {
    icon: Landmark,
    title: 'Government & Compliance',
    count: 8,
    desc: 'Texas business resources, tax incentives, certification programs, and regulatory compliance basics.',
  },
  {
    icon: Users,
    title: 'Hiring & HR',
    count: 12,
    desc: 'Job description templates, onboarding guides, contractor agreements, and compensation benchmarks.',
  },
  {
    icon: BookOpen,
    title: 'Education & Training',
    count: 9,
    desc: 'Owner-recommended reading, course references, skill guides, and business education session recordings.',
  },
  {
    icon: Briefcase,
    title: 'Sales & Client Relationships',
    count: 11,
    desc: 'Proposal templates, pricing guides, client communication scripts, and scope of work frameworks.',
  },
  {
    icon: BarChart2,
    title: 'Financial Health',
    count: 7,
    desc: 'Cash flow worksheets, profit margin calculators, break-even analysis, and basic financial literacy guides.',
  },
];

export default function ResourceLibraryCategories() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Resource Library</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            Business Resource Library Categories
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
            Members have access to a curated library of practical business resources, templates, and tools. Full access requires an active membership.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white border p-6"
              style={{ borderColor: '#E4E0D8' }}
            >
              <div className="flex items-center justify-between mb-4">
                <cat.icon className="w-5 h-5" strokeWidth={1.5} style={{ color: '#00606B' }} />
                <span className="text-xs font-semibold" style={{ color: '#B8862B' }}>{cat.count} resources</span>
              </div>
              <h3 className="font-semibold text-sm mb-2" style={{ color: '#111418' }}>{cat.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#2C3238', opacity: 0.6 }}>{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 p-6 border text-center" style={{ borderColor: '#E4E0D8', backgroundColor: '#fff' }}>
          <p className="text-sm mb-5" style={{ color: '#2C3238', opacity: 0.65 }}>
            Full resource library access is available to all active Link members. Join to unlock the complete library.
          </p>
          <Button asChild size="lg" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            <Link to="/membership">Become a Member <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}