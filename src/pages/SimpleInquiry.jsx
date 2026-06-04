/**
 * SimpleInquiry — reusable lightweight inquiry page.
 * Used for: /ask-about-membership, /request-introduction,
 *           /list-your-business, /list-your-services,
 *           /ask-about-category, /chapter-inquiry, /sponsor-inquiry
 *
 * Props passed via route state or config object below.
 */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';
import PageHero from '@/components/layout/PageHero';

const configs = {
  '/ask-about-membership': {
    eyebrow: 'Membership Inquiry',
    h1: 'Ask About Membership.',
    subtext: 'Tell us about your business and what you are looking for. A chapter organizer will follow up to discuss membership fit and availability.',
    heroImage: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Business owner asking about membership options',
    inquiryType: 'Membership Inquiry',
    seoTitle: 'Ask About Membership | Link Business Alliance',
  },
  '/request-introduction': {
    eyebrow: 'Request Introduction',
    h1: 'Request a Member Introduction.',
    subtext: 'Tell us who or what type of business you are looking to connect with. We will do our best to facilitate a relevant introduction through The Link.',
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Two business owners being introduced to each other',
    inquiryType: 'Introduction Request',
    seoTitle: 'Request Introduction | Link Business Alliance',
  },
  '/list-your-business': {
    eyebrow: 'List Your Business',
    h1: 'List Your Business in The Link Directory.',
    subtext: 'Tell us about your business and we will discuss how to get your listing set up in the member directory and marketplace.',
    heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Business owner setting up their professional listing',
    inquiryType: 'Business Listing Inquiry',
    seoTitle: 'List Your Business | Link Business Alliance',
  },
  '/list-your-services': {
    eyebrow: 'List Your Services',
    h1: 'List Your Services in The Link Marketplace.',
    subtext: 'Tell us about your services and we will discuss how to get your marketplace listing set up for other members to find.',
    heroImage: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Business owner reviewing their service listing options',
    inquiryType: 'Service Listing Inquiry',
    seoTitle: 'List Your Services | Link Business Alliance',
  },
  '/ask-about-category': {
    eyebrow: 'Category Inquiry',
    h1: 'Ask About Category Availability.',
    subtext: 'Tell us your service category and market. We will check availability and let you know what options are open in your chapter.',
    heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Business owner reviewing available categories in their local market',
    inquiryType: 'Category Availability Inquiry',
    seoTitle: 'Ask About Category Availability | Link Business Alliance',
  },
  '/chapter-inquiry': {
    eyebrow: 'Chapter Inquiry',
    h1: 'Request Information About Your Local Chapter.',
    subtext: 'Tell us your location and what you are looking for. We will connect you with the right chapter organizer or let you know about upcoming chapters.',
    heroImage: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Business owners at a local chapter meeting',
    inquiryType: 'Chapter Information Request',
    seoTitle: 'Chapter Inquiry | Link Business Alliance',
  },
  '/sponsor-inquiry': {
    eyebrow: 'Sponsor Inquiry',
    h1: 'Sponsor a Local Link Chapter.',
    subtext: 'Tell us about your sponsorship goals and preferred chapter or market. We will discuss available partnership and sponsorship opportunities.',
    heroImage: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=80',
    heroAlt: 'Business partners discussing local chapter sponsorship',
    inquiryType: 'Sponsorship / Partner Inquiry',
    seoTitle: 'Sponsor a Chapter | Link Business Alliance',
  },
};

export default function SimpleInquiry() {
  const location = useLocation();
  const cfg = configs[location.pathname] || configs['/ask-about-membership'];
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Inquiry submitted. We\'ll be in touch within a few business days.');
  };

  return (
    <div>
      <PageHero
        eyebrow={cfg.eyebrow}
        h1={cfg.h1}
        subtext={cfg.subtext}
        heroImage={cfg.heroImage}
        heroAlt={cfg.heroAlt}
      />

      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16 border" style={{ borderColor: '#E4E0D8' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E6F4F5' }}>
                <Check className="w-5 h-5" style={{ color: '#00606B' }} />
              </div>
              <h2 className="font-heading font-bold text-xl mb-2" style={{ color: '#111418' }}>Inquiry Received</h2>
              <p className="text-sm mb-6" style={{ color: '#2C3238', opacity: 0.65 }}>We'll follow up within a few business days.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="sm" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                  <Link to="/find-chapter">Find a Chapter</Link>
                </Button>
                <Button asChild size="sm" variant="outline" style={{ borderColor: '#E4E0D8', color: '#111418' }}>
                  <Link to="/membership">View Membership</Link>
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit} className="space-y-4 border p-8" style={{ borderColor: '#E4E0D8' }}>
              <div className="h-0.5 w-10 mb-5" style={{ backgroundColor: '#B8862B' }} />
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#00606B' }}>{cfg.inquiryType}</p>
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
                <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>City / Market *</label>
                <Input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required style={{ borderColor: '#E4E0D8' }} />
              </div>
              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: '#111418' }}>How can we help you?</label>
                <Textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ borderColor: '#E4E0D8' }} />
              </div>
              <Button type="submit" size="lg" className="w-full font-semibold" style={{ backgroundColor: '#00606B', color: '#fff' }}>
                Submit Inquiry <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-xs text-center" style={{ color: '#2C3238', opacity: 0.4 }}>
                Submitting this form does not create a membership or obligation. It starts a conversation.
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}