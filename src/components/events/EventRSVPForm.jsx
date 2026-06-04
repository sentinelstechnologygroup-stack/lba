import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function EventRSVPForm({ eventName = '', onClose }) {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', member: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('RSVP submitted. You\'ll receive a confirmation from the chapter organizer.');
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E6F4F5' }}>
          <Check className="w-5 h-5" style={{ color: '#00606B' }} />
        </div>
        <h3 className="font-semibold text-lg mb-2" style={{ color: '#111418' }}>RSVP Confirmed</h3>
        <p className="text-sm" style={{ color: '#2C3238', opacity: 0.65 }}>We'll be in touch with event details. See you there.</p>
        {onClose && <button onClick={onClose} className="mt-6 text-xs underline" style={{ color: '#00606B' }}>Close</button>}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {eventName && <p className="text-sm font-semibold pb-4 border-b" style={{ color: '#111418', borderColor: '#E4E0D8' }}>RSVP for: {eventName}</p>}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Full Name *</label>
          <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
        </div>
        <div>
          <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Business Name</label>
          <Input value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
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
      <div>
        <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Are you a current Link member?</label>
        <select value={form.member} onChange={e => setForm({ ...form, member: e.target.value })}
          className="flex h-9 w-full rounded-md border px-3 py-1 text-sm"
          style={{ borderColor: '#E4E0D8', color: '#111418' }}>
          <option value="">Select one</option>
          <option value="yes">Yes, I am a current member</option>
          <option value="no">No, I am interested in learning more</option>
          <option value="guest">I was invited by a member</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>Any questions or notes for the organizer?</label>
        <Textarea rows={2} value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
      </div>
      <Button type="submit" size="lg" className="w-full font-semibold text-sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
        Submit RSVP <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}