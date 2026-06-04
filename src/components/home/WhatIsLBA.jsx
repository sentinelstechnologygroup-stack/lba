import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhatIsLBA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>
              What Is The Link?
            </p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.15] mb-7" style={{ color: '#111418' }}>
              A Business-Owner Alliance.<br />
              Not a Referral Club.
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: '#2C3238', opacity: 0.75 }}>
              <p>
                Link Business Alliance is a structured membership organization built for entrepreneurs, small business owners, service providers, and local professionals who want stronger relationships, better resources, and practical owner-to-owner support.
              </p>
              <p>
                This is not just a networking group. This is not just a chamber. The Link gives owners access to relationships, resources, practical knowledge, local opportunities, and structured support that can help them build stronger businesses.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: '#E4E0D8' }}>
              {[['Connect', 'Meet the right owners'], ['Learn', 'Practical knowledge'], ['Grow', 'With structured support']].map(([word, sub]) => (
                <div key={word}>
                  <p className="font-heading font-bold text-lg" style={{ color: '#00606B' }}>{word}</p>
                  <p className="text-xs mt-1" style={{ color: '#111418', opacity: 0.5 }}>{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80"
              alt="Business professionals collaborating around a table"
              className="w-full object-cover"
              style={{ height: 480 }}
            />
            <div className="absolute -bottom-5 -left-5 p-6 lg:p-7" style={{ backgroundColor: '#00606B' }}>
              <p className="font-heading font-bold text-3xl text-white">6</p>
              <p className="text-xs tracking-wider uppercase mt-1 text-white/80">Active Chapters</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}