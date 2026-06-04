import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { pageContent } from '@/content/pageContent';

const categories = ['All', 'Business Basics', 'Networking', 'Leadership', 'Sales', 'Finance', 'Operations', 'Hiring', 'Resources'];

const posts = [
  { title: 'Why Business Owners Need More Than Referrals', category: 'Networking', date: 'May 28, 2026', excerpt: 'Referrals are valuable. But a business built only on referrals is fragile. Here is what a real support network looks like for a small business owner.', readTime: '5 min' },
  { title: 'The Honest Truth About Business Accountability', category: 'Leadership', date: 'May 22, 2026', excerpt: 'Accountability is not about checking boxes. It is about committing to your own goals in front of people who care whether you follow through.', readTime: '6 min' },
  { title: 'Things We Wish Someone Had Told Us Earlier', category: 'Business Basics', date: 'May 15, 2026', excerpt: 'A collection of practical lessons from Link members — owners across industries sharing what they know now that would have helped them then.', readTime: '7 min' },
  { title: 'How to Know When to Hire', category: 'Hiring', date: 'May 10, 2026', excerpt: 'The timing conversation most owners avoid until it is too late. A practical guide to knowing when your business is ready for its first hire.', readTime: '6 min' },
  { title: 'Understanding Your Cash Position (Not Just Revenue)', category: 'Finance', date: 'May 5, 2026', excerpt: 'Revenue is not profit. Profit is not cash. Here is a simple framework for understanding where your business actually stands financially.', readTime: '5 min' },
  { title: 'What Strategic Partnerships Actually Look Like', category: 'Networking', date: 'Apr 28, 2026', excerpt: 'How to find, qualify, and structure business partnerships that drive mutual value — without making promises you cannot keep.', readTime: '6 min' },
  { title: 'Building Repeatable Systems So You Can Scale', category: 'Operations', date: 'Apr 22, 2026', excerpt: 'The difference between a busy business and a scalable one often comes down to documented processes. Here is how to start.', readTime: '7 min' },
  { title: 'Client Experience: Why It Matters More Than Marketing', category: 'Sales', date: 'Apr 15, 2026', excerpt: 'Most referrals come from how you made someone feel during the engagement, not from what you said in your pitch. Here is why this matters.', readTime: '5 min' },
];

export default function Blog() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  return (
    <div>
      <PageHero {...pageContent.blog} />

      <section id="articles" className="py-16 lg:py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => (
              <Button
                key={c}
                size="sm"
                onClick={() => setFilter(c)}
                className="text-xs font-semibold"
                style={filter === c
                  ? { backgroundColor: '#00606B', color: '#fff' }
                  : { backgroundColor: 'transparent', color: '#111418', border: '1px solid #E4E0D8' }
                }
              >
                {c}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border p-7 group cursor-pointer hover:border-teal transition-colors"
                style={{ borderColor: '#E4E0D8' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-bold tracking-[0.15em] uppercase" style={{ color: '#00606B' }}>{post.category}</span>
                  <span className="text-[9px]" style={{ color: '#2C3238', opacity: 0.4 }}>·</span>
                  <span className="text-[9px]" style={{ color: '#2C3238', opacity: 0.4 }}>{post.readTime} read</span>
                </div>
                <h3 className="font-heading font-bold text-lg leading-snug group-hover:text-teal transition-colors mb-3" style={{ color: '#111418' }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#2C3238', opacity: 0.65 }}>{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: '#2C3238', opacity: 0.4 }}>{post.date}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#00606B' }} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}