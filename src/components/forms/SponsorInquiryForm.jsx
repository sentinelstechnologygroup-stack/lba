import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

const sponsorTypes = [
  'Event Sponsor', 'Chapter Sponsor / Founding Partner', 'Directory Sponsor',
  'Education Session Sponsor', 'Roundtable Sponsor', 'General Partner Inquiry',
];

export default function SponsorInquiryForm() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', type: '', chapter: '', goals: '', budget: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Sponsor inquiry received. We\'ll be in touch within a few business days.');
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto text-center py-16 border" style={{ borderColor: '#E4E0D8' }}>
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#FDF5E6' }}>
          <Check className="w-5 h-5" style={{ color: '#B8862B' }} />
        </div>
        <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#111418' }}>Inquiry Received</h3>
        <p className="text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>We will follow up within a few business days to discuss partnership opportunities.</p>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <form onSubmit={handleSubmit} className="space-y-5 border p-8 bg-white" style={{ borderColor: '#E4E0D8' }}>
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
            <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Email *</label>
            <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
          </div>
          <div>
            <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Phone</label>
            <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Sponsorship Type *</label>
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} required
              className="flex h-9 w-full rounded-md border px-3 py-1 text-sm"
              style={{ borderColor: '#E4E0D8', color: '#111418' }}>
              <option value="">Select type</option>
              {sponsorTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Chapter / Market of Interest</label>
            <Input placeholder="e.g., The Link Houston" value={form.chapter} onChange={e => setForm({ ...form, chapter: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>Monthly budget range (optional)</label>
          <Input placeholder="e.g., $150–$500/month" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
        </div>
        <div>
          <label className="text-xs font-semibold block mb-2" style={{ color: '#111418' }}>What are you hoping to accomplish through sponsorship?</label>
          <Textarea rows={3} placeholder="Visibility, category positioning, chapter building, community support, etc." value={form.goals} onChange={e => setForm({ ...form, goals: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
        </div>
        <Button type="submit" size="lg" className="w-full font-semibold text-sm" style={{ backgroundColor: '#B8862B', color: '#fff' }}>
          Submit Sponsor Inquiry <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <p className="text-xs text-center" style={{ color: '#2C3238', opacity: 0.4 }}>
          Submitting this form does not create an agreement or commitment. It starts a conversation about available partnership opportunities.
        </p>
      </form>
    </motion.div>
  );
}