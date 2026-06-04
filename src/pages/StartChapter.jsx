import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const benefits = [
  'Build a local business-owner community',
  'Help owners connect with trusted resources',
  'Create structured local networking',
  'Support business education and mentorship',
  'Develop sponsor and partner opportunities',
  'Create a stronger local business ecosystem',
  'Represent The Link in your local market',
  'Access Link resources, support, and leadership network',
];

const steps = [
  { num: '01', title: 'Express Interest', desc: 'Complete the inquiry form below. Tell us about your market, your background, and why you want to start a chapter.' },
  { num: '02', title: 'Introductory Call', desc: 'We\'ll connect with you to discuss the chapter opportunity, your market, expectations, and whether it\'s a good fit.' },
  { num: '03', title: 'Chapter Setup', desc: 'If approved, we\'ll work with you on chapter setup, initial membership recruitment, and your first meeting structure.' },
  { num: '04', title: 'Launch Your Chapter', desc: 'Host your first meeting, begin recruiting local members, and start building your local Link community.' },
];

export default function StartChapter() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', business: '', why: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Inquiry submitted. We\'ll be in touch within a few business days.');
    setForm({ name: '', email: '', phone: '', city: '', business: '', why: '' });
  };

  return (
    <div>
      <section className="py-24 lg:py-36 px-6 lg:px-10" style={{ backgroundColor: '#111418' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="h-0.5 w-10 mb-8" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Chapter Opportunity</p>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl leading-[1.1] max-w-4xl" style={{ color: '#F7F5F0' }}>
              Start a Link Chapter in Your Market
            </h1>
            <p className="mt-6 text-base leading-relaxed max-w-2xl" style={{ color: '#F7F5F0', opacity: 0.55 }}>
              Chapter leaders help organize meetings, recruit members, coordinate local partnerships, and represent The Link in their local market. This is a chapter leader opportunity — not a franchise. Contact us to learn about availability in your area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-3" style={{ color: '#111418' }}>Why Start a Link Chapter?</h2>
            <p className="text-sm leading-relaxed mb-7" style={{ color: '#2C3238', opacity: 0.65 }}>
              This is for businesses, sponsors, local leaders, or founding members who want to help build — not just attend — a local business-owner community.
            </p>
            <ul className="space-y-4">
              {benefits.map(b => (
                <li key={b} className="flex items-start gap-3 text-sm" style={{ color: '#111418' }}>
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00606B' }} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 border" style={{ borderColor: '#E4E0D8', backgroundColor: '#FAF8F3' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.7 }}>
                <strong style={{ color: '#111418' }}>Important: </strong>
                Chapter opportunities are subject to approval, operating standards, market availability, and leadership fit. Starting a chapter does not guarantee income, territory rights, member volume, or business results. Chapter leaders are expected to organize and host regular meetings, actively recruit aligned member businesses, and maintain the quality and integrity of the chapter.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t last:border-b py-7"
                style={{ borderColor: '#E4E0D8' }}
              >
                <div className="flex items-start gap-5">
                  <span className="font-heading font-bold text-lg flex-shrink-0" style={{ color: '#B8862B' }}>{s.num}</span>
                  <div>
                    <h3 className="font-semibold text-base mb-2" style={{ color: '#111418' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-3xl mx-auto">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-3" style={{ color: '#111418' }}>Express Your Interest</h2>
          <p className="text-sm mb-10 leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
            Completing this form starts the conversation. It is not a commitment or application approval. We'll be in touch to discuss your market and the chapter opportunity.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 border" style={{ borderColor: '#E4E0D8' }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
              <Input placeholder="Email Address" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
              <Input placeholder="City / Market You Want to Serve" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
            </div>
            <Input placeholder="Your Business Name" value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
            <Textarea
              placeholder="Why are you interested in starting a Link chapter in your area?"
              value={form.why}
              onChange={e => setForm({ ...form, why: e.target.value })}
              rows={4}
              style={{ borderColor: '#E4E0D8' }}
            />
            <Button type="submit" size="lg" className="w-full font-semibold text-sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
              Submit Inquiry <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}