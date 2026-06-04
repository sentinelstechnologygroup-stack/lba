import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const standards = [
  { title: 'Responsiveness', desc: 'Members are expected to respond to inquiries, introductions, and communications within a reasonable timeframe. Unresponsive members reflect poorly on the chapter.' },
  { title: 'Quality of Work', desc: 'Members are expected to deliver work at a professional standard. Poor quality from any member affects the alliance\'s reputation and the trust other members extend.' },
  { title: 'Honest Representation', desc: 'Members must accurately represent their services, qualifications, experience, and capabilities. Misrepresentation is grounds for removal.' },
  { title: 'Professional Conduct', desc: 'Members are expected to conduct themselves professionally inside and outside of chapter activities. Behavior that harms other members or the public is not tolerated.' },
  { title: 'Participation', desc: 'Passive membership delivers passive results. Members who engage, attend, contribute, and build relationships benefit the most — and contribute the most to the community.' },
  { title: 'Compliance with Link Policies', desc: 'Members must follow The Link\'s community guidelines, membership terms, and any chapter-specific standards established by their local organizer.' },
];

export default function TrustStandards() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Community Standards</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            Trust, Rules & Standards
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-2xl" style={{ color: '#2C3238', opacity: 0.65 }}>
            The Link is only as valuable as the trust members place in each other. These are the standards every member is expected to uphold.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {standards.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 border"
              style={{ borderColor: '#E4E0D8' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" style={{ color: '#00606B' }} />
                <h3 className="font-semibold text-sm" style={{ color: '#111418' }}>{s.title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}