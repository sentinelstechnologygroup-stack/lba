import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'How do I join The Link?', a: 'Contact your local chapter organizer through the Contact page or Find Chapter page. Membership is not fully self-serve — there is a brief onboarding process to ensure chapter fit and availability.' },
  { q: 'Is there a contract or long-term commitment?', a: 'Membership terms vary by level. Most memberships are month-to-month. Partner and category tiers may require a minimum commitment. Your chapter organizer will explain the specific terms for your membership level.' },
  { q: 'Does membership guarantee me referrals or leads?', a: 'No. The Link does not guarantee leads, referrals, or any specific business outcome. Opportunity routing depends on membership level, category availability, quality, responsiveness, and consistent participation.' },
  { q: 'Can I attend a meeting before joining?', a: 'Yes. Most chapters allow prospective members to attend one meeting as a guest before committing. Contact the chapter organizer to request a guest pass.' },
  { q: 'What is the difference between a Category Member and an Exclusive Category Partner?', a: 'A Category Member is placed in their service category and is eligible for opportunities when no exclusive partner controls that category. An Exclusive Category Partner holds primary positioning in their category/geography and receives priority consideration for relevant inquiries. Exclusive Category Partner status requires approval and is subject to availability.' },
  { q: 'How does category availability work?', a: 'Each chapter has a limited number of category positions available, especially at the Exclusive Category Partner level. If your category is filled in your geography, you may be placed on a waitlist or offered a different membership level.' },
  { q: 'What happens if I am not a good fit for the chapter?', a: 'The Link reserves the right to decline or discontinue membership for any reason, including quality concerns, conduct issues, or category conflicts. Membership is a privilege, not a guaranteed right.' },
  { q: 'Can I upgrade my membership level later?', a: 'Yes. Members can upgrade their level as their business grows or their goals change. Upgrades are subject to availability and chapter approval.' },
  { q: 'What is a Founding Member?', a: 'Founding Members join a chapter before it opens publicly. They get early access to category positions, founding recognition, and direct access to the chapter organizer during setup. Founding spots are limited and subject to approval.' },
  { q: 'Is The Link a franchise?', a: 'No. The Link is not a franchise. Chapter leaders operate under the Link Business Alliance brand and standards but this is not a franchise arrangement. There is no franchise fee, territory purchase, or income guarantee.' },
];

export default function MembershipFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="h-0.5 w-10 mb-7" style={{ backgroundColor: '#B8862B' }} />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#00606B' }}>Common Questions</p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-[1.15]" style={{ color: '#111418' }}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border-t last:border-b"
              style={{ borderColor: '#E4E0D8' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span className="font-semibold text-sm pr-4" style={{ color: '#111418' }}>{faq.q}</span>
                {open === i
                  ? <Minus className="w-4 h-4 flex-shrink-0" style={{ color: '#00606B' }} />
                  : <Plus className="w-4 h-4 flex-shrink-0" style={{ color: '#2C3238', opacity: 0.4 }} />
                }
              </button>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pb-5"
                >
                  <p className="text-sm leading-relaxed" style={{ color: '#2C3238', opacity: 0.7 }}>{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}