import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const chapters = ['The Link Houston', 'The Link Texas', 'The Link Gulf Coast', 'The Link Montgomery County'];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-charcoal" style={{ backgroundColor: '#111418' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80"
            alt="Business professionals in collaborative meeting"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #111418cc 30%, #11141877 65%, #11141844 100%)' }} />
      </div>

      {/* Subtle connection-dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, #00606B 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-24 lg:py-0">
        <div className="max-w-3xl">

          {/* Gold accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 mb-8"
            style={{ backgroundColor: '#B8862B' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-6"
            style={{ color: '#00606B' }}
          >
            Link Business Alliance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight"
            style={{ color: '#F7F5F0' }}
          >
            Business Owners Should Not Have to{' '}
            <span style={{ color: '#00606B' }}>Build Alone.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-7 text-base lg:text-lg leading-relaxed max-w-2xl"
            style={{ color: '#F7F5F0', opacity: 0.65 }}
          >
            Link Business Alliance helps owners connect with the right people, find trusted resources, understand local opportunities, and build stronger businesses through a structured member network.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Button
              asChild
              size="lg"
              className="font-semibold text-sm px-7"
              style={{ backgroundColor: '#00606B', color: '#fff' }}
            >
              <Link to="/find-chapter">
                Find Your Local Link <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-medium text-sm px-7"
              style={{ borderColor: '#F7F5F0', color: '#F7F5F0', backgroundColor: 'transparent' }}
            >
              <Link to="/membership">Become a Member</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="font-medium text-sm px-5"
              style={{ color: '#B8862B' }}
            >
              <Link to="/start-chapter">Start a Chapter</Link>
            </Button>
          </motion.div>

          {/* Chapter pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-12 flex flex-wrap items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.15em] uppercase mr-2" style={{ color: '#F7F5F0', opacity: 0.35 }}>
              Active Chapters
            </span>
            {chapters.map((ch) => (
              <span
                key={ch}
                className="inline-flex items-center gap-1.5 text-[10px] tracking-wide px-3 py-1 rounded-full border font-medium"
                style={{ borderColor: '#00606B44', color: '#00606B', backgroundColor: '#00606B11' }}
              >
                <MapPin className="w-2.5 h-2.5" />
                {ch}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, #B8862B66, transparent)' }}
        />
      </motion.div>
    </section>
  );
}