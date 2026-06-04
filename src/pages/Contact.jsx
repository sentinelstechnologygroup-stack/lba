import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';

const topics = [
  'Membership Inquiry',
  'Find a Chapter',
  'Start a Chapter',
  'Sponsorship Opportunity',
  'Strategic Partnership',
  'Media & Press',
  'General Inquiry',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    city: '',
    topic: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message received. We'll respond within 2 business days.");
    setForm({ name: '', business: '', email: '', phone: '', city: '', topic: '', message: '' });
  };

  return (
    <div>
      <PageHero {...pageContent.contact} />

      <section id="contact-form" className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Info */}
          <div className="lg:col-span-2">
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-5" style={{ color: '#111418' }}>
              How Can We Help?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#2C3238', opacity: 0.65 }}>
              Use the form to reach us directly. We typically respond within 2 business days.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00606B' }} />
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1 font-semibold" style={{ color: '#2C3238', opacity: 0.5 }}>Email</p>
                  <p className="text-sm font-medium" style={{ color: '#111418' }}>info@linkbusinessalliance.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00606B' }} />
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1 font-semibold" style={{ color: '#2C3238', opacity: 0.5 }}>Based In</p>
                  <p className="text-sm font-medium" style={{ color: '#111418' }}>Houston, Texas</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 border" style={{ borderColor: '#E4E0D8', backgroundColor: '#FAF8F3' }}>
              <p className="text-[11px] leading-relaxed" style={{ color: '#2C3238', opacity: 0.65 }}>
                <strong style={{ color: '#111418' }}>Note: </strong>
                Membership in Link Business Alliance does not guarantee leads, referrals, or business outcomes. Chapter availability varies by location.
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  style={{ borderColor: '#E4E0D8' }}
                />
                <Input
                  placeholder="Business Name"
                  value={form.business}
                  onChange={e => setForm({ ...form, business: e.target.value })}
                  style={{ borderColor: '#E4E0D8' }}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Email Address *"
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  style={{ borderColor: '#E4E0D8' }}
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  style={{ borderColor: '#E4E0D8' }}
                />
              </div>
              <Input
                placeholder="City / Market"
                value={form.city}
                onChange={e => setForm({ ...form, city: e.target.value })}
                style={{ borderColor: '#E4E0D8' }}
              />
              <Select value={form.topic} onValueChange={v => setForm({ ...form, topic: v })}>
                <SelectTrigger style={{ borderColor: '#E4E0D8' }}>
                  <SelectValue placeholder="What is this regarding? *" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Your message..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={6}
                required
                style={{ borderColor: '#E4E0D8' }}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full font-semibold text-sm"
                style={{ backgroundColor: '#00606B', color: '#fff' }}
              >
                Send Message
              </Button>
              <p className="text-xs text-center" style={{ color: '#2C3238', opacity: 0.4 }}>
                This form is for inquiries only and does not create a membership agreement.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}