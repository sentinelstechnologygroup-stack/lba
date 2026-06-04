import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Check, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import PageHero from '@/components/layout/PageHero';
import { RSVP_EVENT_TYPES, RSVP_CHAPTERS, EVENT_MEMBER_STATUS_OPTIONS } from '@/data/sampleEvents';

const guestCounts = ['1 (just me)', '2', '3', '4', '5+'];

export default function EventRSVP() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    city: '',
    chapter: '',
    eventType: '',
    memberStatus: '',
    guestCount: '1 (just me)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('RSVP submitted. We will be in touch with event details.');
  };

  return (
    <div>
      <PageHero
        eyebrow="Event RSVP"
        h1="RSVP for a Link Event."
        subtext="Let us know which event you are interested in and we will follow up with details, confirmation, and any event-specific information."
        heroImage="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1920&q=80"
        heroAlt="Business owners at a professional networking event"
        primaryCta={{ label: 'Complete RSVP', route: '#rsvp-form' }}
        secondaryCta={{ label: 'View Upcoming Events', route: '/events' }}
      />

      <section id="rsvp-form" className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 border" style={{ borderColor: '#E4E0D8' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E6F4F5' }}>
                <Check className="w-5 h-5" style={{ color: '#00606B' }} />
              </div>
              <h2 className="font-heading font-bold text-xl mb-2" style={{ color: '#111418' }}>RSVP Received</h2>
              <p className="text-sm mb-2" style={{ color: '#2C3238', opacity: 0.65 }}>We will follow up within a few business days with event details.</p>
              <p className="text-xs mb-8" style={{ color: '#2C3238', opacity: 0.45 }}>Submitting an RSVP does not guarantee event admission or membership approval.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                  <Link to="/events">View All Events <ArrowRight className="w-3.5 h-3.5 ml-1.5" /></Link>
                </Button>
                <Button asChild size="sm" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                  <Link to="/find-chapter">Find a Chapter</Link>
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit} className="space-y-5 border p-8" style={{ borderColor: '#E4E0D8' }}>
              <div className="h-0.5 w-10 mb-5" style={{ backgroundColor: '#B8862B' }} />
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4" style={{ color: '#00606B' }} />
                <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#00606B' }}>Event RSVP</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Full Name *</label>
                  <Input value={form.name} onChange={e => set('name', e.target.value)} required style={{ borderColor: '#E4E0D8' }} placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Business Name</label>
                  <Input value={form.business} onChange={e => set('business', e.target.value)} style={{ borderColor: '#E4E0D8' }} placeholder="Your business name" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Email *</label>
                  <Input type="email" value={form.email} onChange={e => set('email', e.target.value)} required style={{ borderColor: '#E4E0D8' }} placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Phone</label>
                  <Input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} style={{ borderColor: '#E4E0D8' }} placeholder="(optional)" />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>City / Market *</label>
                <Input value={form.city} onChange={e => set('city', e.target.value)} required style={{ borderColor: '#E4E0D8' }} placeholder="City where you are located" />
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Chapter / Area of Interest</label>
                <select value={form.chapter} onChange={e => set('chapter', e.target.value)}
                  className="w-full h-9 rounded-md border px-3 text-sm bg-white"
                  style={{ borderColor: '#E4E0D8', color: form.chapter ? '#111418' : '#9CA3AF' }}>
                  <option value="">Select chapter or area</option>
                  {RSVP_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Event Type *</label>
                <select value={form.eventType} onChange={e => set('eventType', e.target.value)} required
                  className="w-full h-9 rounded-md border px-3 text-sm bg-white"
                  style={{ borderColor: '#E4E0D8', color: form.eventType ? '#111418' : '#9CA3AF' }}>
                  <option value="">Select event type</option>
                  {RSVP_EVENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Are You a Member? *</label>
                <select value={form.memberStatus} onChange={e => set('memberStatus', e.target.value)} required
                  className="w-full h-9 rounded-md border px-3 text-sm bg-white"
                  style={{ borderColor: '#E4E0D8', color: form.memberStatus ? '#111418' : '#9CA3AF' }}>
                  <option value="">Select your status</option>
                  {EVENT_MEMBER_STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Number of Guests</label>
                <select value={form.guestCount} onChange={e => set('guestCount', e.target.value)}
                  className="w-full h-9 rounded-md border px-3 text-sm bg-white"
                  style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                  {guestCounts.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Message / Questions</label>
                <Textarea value={form.message} onChange={e => set('message', e.target.value)}
                  rows={4} style={{ borderColor: '#E4E0D8' }}
                  placeholder="Any questions about the event, specific topics you want covered, or other details..." />
              </div>

              <Button type="submit" size="lg" className="w-full font-semibold" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                Submit RSVP <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="p-4 border" style={{ borderColor: '#E4E0D8', backgroundColor: '#FAF8F3' }}>
                <p className="text-xs leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
                  <strong style={{ color: '#111418' }}>Disclaimer: </strong>
                  Submitting an RSVP or inquiry does not guarantee event admission, membership approval, sponsorship approval, referrals, leads, sales, or business outcomes. Event availability, dates, and details are subject to change.
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-20 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-4xl mx-auto">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8" style={{ color: '#111418' }}>
            What to Expect at a Link Event
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Real Business Conversations', desc: 'Link events are not pitch fests. The format is designed around introductions, practical discussions, and owner-to-owner conversations.' },
              { title: 'Structured Introductions', desc: 'Most events include a structured introduction format so everyone knows who is in the room and what each business does.' },
              { title: 'Practical Content', desc: 'Education sessions and roundtables focus on what owners actually face — hiring, cash flow, client issues, operations, and local market realities.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border p-7" style={{ borderColor: '#E4E0D8' }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: '#111418' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}