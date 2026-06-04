import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

const categories = [
  'Accounting & Bookkeeping', 'Business Coaching', 'Commercial Cleaning', 'Construction & Contracting',
  'Financial Planning', 'Graphic Design & Branding', 'Health & Wellness', 'HR & Staffing',
  'Insurance', 'IT & Technology', 'Legal Services', 'Marketing', 'Mortgage & Lending',
  'Photography & Video', 'Plumbing & HVAC', 'Real Estate', 'Retail', 'Roofing & Exterior',
  'Security Services', 'Web Design', 'Other',
];

export default function BusinessIntakeForm() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', city: '', category: '', area: '', description: '', customers: '', goals: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Your information has been received. We\'ll be in touch within a few business days.');
  };

  if (submitted) {
    return (
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-3xl mx-auto text-center py-16 border" style={{ borderColor: '#E4E0D8' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#E6F4F5' }}>
            <Check className="w-5 h-5" style={{ color: '#00606B' }} />
          </div>
          <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: '#111418' }}>We've Received Your Information</h3>
          <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: '#2C3238', opacity: 0.65 }}>
            A chapter organizer will review your submission and be in touch within a few business days to discuss membership fit and availability.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Get Started</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            Business Need Intake Form
          </h2>
          <p className="mt-5 text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
            Tell us about your business and what you are looking for. This helps us match you with the right chapter, membership level, and resources. Submitting this form is not a membership application — it starts a conversation.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-5 border p-8" style={{ borderColor: '#E4E0D8' }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Full Name *</label>
              <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
            </div>
            <div>
              <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Business Name *</label>
              <Input value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Email Address *</label>
              <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
            </div>
            <div>
              <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Phone Number</label>
              <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>City / Market *</label>
              <Input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
            </div>
            <div>
              <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Service Category *</label>
              <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} required
                className="flex h-9 w-full rounded-md border px-3 py-1 text-sm"
                style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                <option value="">Select a category</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Service Area (cities, counties, or regions you serve)</label>
            <Input placeholder="e.g., Montgomery County, The Woodlands, Greater Houston" value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
          </div>
          <div>
            <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>One-sentence business description</label>
            <Textarea placeholder="What does your business do and who do you serve?" rows={2} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
          </div>
          <div>
            <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Describe your ideal customer</label>
            <Textarea placeholder="Who is your best client? What do they need? Where are they located?" rows={2} value={form.customers} onChange={e => setForm({ ...form, customers: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
          </div>
          <div>
            <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>What are you hoping to get from The Link?</label>
            <Textarea placeholder="Connections, visibility, resources, category positioning, etc." rows={3} value={form.goals} onChange={e => setForm({ ...form, goals: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
          </div>
          <Button type="submit" size="lg" className="w-full font-semibold text-sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
            Submit Intake Form <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-xs text-center" style={{ color: '#2C3238', opacity: 0.4 }}>
            Submitting this form does not create a membership or obligation. It starts a conversation with a chapter organizer.
          </p>
        </form>
      </div>
    </section>
  );
}