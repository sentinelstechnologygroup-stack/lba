import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';

const pc = pageContent.join;

const tiers = [
  { name: 'Community Member', price: '$10/month', desc: 'Meetings, resources, and community access.' },
  { name: 'Visibility Member', price: '$25/month', desc: 'Enhanced profile, category listing, contact details.' },
  { name: 'Category Member', price: '$50/month', desc: 'Approved category placement and opportunity eligibility.' },
  { name: 'Exclusive Category Partner', price: 'From $150/month', desc: 'Primary category positioning. Subject to approval.' },
  { name: 'Chapter / Founding Partner', price: 'Custom', desc: 'Chapter-level sponsorship and leadership.' },
];

export default function Join() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', city: '', level: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Membership inquiry submitted. We\'ll be in touch within a few business days.');
  };

  return (
    <div>
      <PageHero {...pc} />

      <section id="join-form" className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14">
          {/* Left: Tier summary */}
          <div>
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4" style={{ color: '#111418' }}>Membership Options</h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#2C3238', opacity: 0.65 }}>
              Choose the level that fits your stage of business. All memberships are subject to chapter availability and approval.
            </p>
            <div className="space-y-3">
              {tiers.map((t) => (
                <div key={t.name} className="flex items-start gap-3 p-4 border" style={{ borderColor: '#E4E0D8' }}>
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00606B' }} />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#111418' }}>{t.name} <span style={{ color: '#B8862B' }}>— {t.price}</span></p>
                    <p className="text-xs mt-0.5" style={{ color: '#2C3238', opacity: 0.6 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs mt-5 leading-relaxed" style={{ color: '#2C3238', opacity: 0.45 }}>
              Membership does not guarantee leads, referrals, revenue, or business outcomes. Final level subject to availability and chapter approval.
            </p>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="text-center py-16 border" style={{ borderColor: '#E4E0D8' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E6F4F5' }}>
                  <Check className="w-5 h-5" style={{ color: '#00606B' }} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2" style={{ color: '#111418' }}>Inquiry Received</h3>
                <p className="text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>We'll follow up within a few business days to discuss membership fit and chapter availability.</p>
                <Button asChild size="sm" className="mt-6" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                  <Link to="/find-chapter">Find a Chapter</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 border p-8" style={{ borderColor: '#E4E0D8' }}>
                <div className="h-0.5 w-10 mb-5" style={{ backgroundColor: '#B8862B' }} />
                <h2 className="font-heading font-bold text-xl mb-4" style={{ color: '#111418' }}>Start Your Membership Inquiry</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Full Name *</label>
                    <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Business Name *</label>
                    <Input value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Email *</label>
                    <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Phone</label>
                    <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>City / Market *</label>
                    <Input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Membership Level of Interest</label>
                    <select value={form.level} onChange={e => setForm({ ...form, level: e.target.value })}
                      className="flex h-9 w-full rounded-md border px-3 text-sm"
                      style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                      <option value="">Not sure yet</option>
                      {tiers.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Tell us about your business and what you're looking for</label>
                  <Textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
                </div>
                <Button type="submit" size="lg" className="w-full font-semibold" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                  Submit Membership Inquiry <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}