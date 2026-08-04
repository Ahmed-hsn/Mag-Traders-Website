'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Truck, Layers } from 'lucide-react';

const faqs = [
  {
    icon: Layers,
    q: 'What types of printing services does MAG Traders (Pvt.) Ltd. offer?',
    a: 'MAG Traders (Pvt.) Ltd. offers a comprehensive range of printing and branding services including:',
    bullets: [
      'Business cards, brochures, flyers & stationery',
      'Banners, signage & large-format printing',
      'Custom packaging & branded boxes',
      'Digital & offset printing for any volume',
      'Corporate gifts & promotional merchandise',
      'Apparel printing, stickers & labels',
      'Graphic design, logo & brand identity creation',
      'Premium finishing: embossing, foiling & more',
    ],
    suffix: 'Whether you need a single item or a complete branding package — we have you covered.',
  },
  {
    icon: HelpCircle,
    q: 'How long does it take to complete an order?',
    a: 'Turnaround times vary based on your project details:',
    bullets: [
      'Standard orders — completed within 3–7 business days',
      'Rush / express orders — 24–48 hours (subject to availability)',
      'Large-scale or custom projects — timeline provided with your quote',
    ],
    suffix: 'We always do our best to accommodate urgent deadlines. A precise timeline is included with every quote.',
  },
  {
    icon: Truck,
    q: 'Do you offer delivery across Pakistan?',
    a: 'Yes! MAG Traders (Pvt.) Ltd. delivers nationwide across Pakistan — including:',
    bullets: [
      'Karachi, Lahore, Islamabad & Rawalpindi',
      'Peshawar, Quetta, Faisalabad & all major cities',
      'Remote locations via reliable courier partners',
    ],
    suffix: 'Every order is carefully packaged for safe transit. Delivery charges and timelines are confirmed at the time of your order.',
  },
];

function AccordionItem({
  faq,
  index,
  inView,
  isOpen,
  onToggle,
}: {
  faq: typeof faqs[0];
  index: number;
  inView: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl overflow-hidden border transition-all duration-400 ${
        isOpen
          ? 'border-[#F47920]/60 shadow-lg shadow-[#F47920]/8 bg-white'
          : 'border-slate-200/80 bg-white hover:border-[#F47920]/30 hover:shadow-md shadow-sm'
      }`}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start gap-4 px-6 py-5 text-left group"
      >
        {/* Icon box */}
        <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 mt-0.5 ${
          isOpen ? 'bg-[#F47920] shadow-md shadow-[#F47920]/30' : 'bg-[#1B4DB7]/6 group-hover:bg-[#1B4DB7]/12'
        }`}>
          <faq.icon className={`w-4.5 h-4.5 w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-[#1B4DB7]' : 'text-[#1B4DB7]/70'}`} />
        </div>

        {/* Question text */}
        <div className="flex-1 pr-2">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-semibold text-[#F47920] tracking-widest uppercase font-body">
              Question {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <span className={`font-body font-semibold text-base leading-snug transition-colors duration-300 ${
            isOpen ? 'text-[#1B4DB7]' : 'text-slate-800 group-hover:text-[#1B4DB7]'
          }`}>
            {faq.q}
          </span>
        </div>

        {/* Chevron */}
        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border transition-all duration-300 mt-1 ${
          isOpen
            ? 'bg-[#F47920] border-[#F47920] text-[#1B4DB7]'
            : 'border-slate-200 text-slate-400 group-hover:border-[#F47920]/40 group-hover:text-[#F47920]'
        }`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-20">
              {/* Left accent bar */}
              <div className="relative border-l-2 border-[#F47920]/30 pl-4">
                <p className="text-slate-600 text-sm leading-relaxed font-body mb-3">{faq.a}</p>
                <ul className="space-y-2 mb-3">
                  {faq.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-600 font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F47920] flex-shrink-0 mt-1.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-500 italic font-body">{faq.suffix}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#F47920]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#1B4DB7]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1B4DB7]/6 text-[#1B4DB7] text-xs font-semibold tracking-widest uppercase font-body mb-4 border border-[#1B4DB7]/10"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#F47920]" />
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-[#1B4DB7] mb-4 leading-tight"
          >
            Frequently Asked{' '}
            <span className="text-[#F47920]">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 font-body max-w-lg mx-auto"
          >
            Everything you need to know about working with MAG Traders (Pvt.) Ltd.. 
            Can't find an answer? Reach out to our team directly.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-6xl mx-auto">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 lg:sticky lg:top-28 space-y-5"
          >
            {/* Card */}
            <div className="blue-gradient rounded-2xl p-7 text-white overflow-hidden relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#F47920]/10" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/5" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#F47920]/20 border border-[#F47920]/30 flex items-center justify-center mb-5">
                  <MessageCircle className="w-6 h-6 text-[#F47920]" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Still have questions?</h3>
                <p className="text-white/65 text-sm leading-relaxed font-body mb-6">
                  Our friendly team is ready to help. Reach out and we'll respond within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="w-full flex justify-center py-3 rounded-full text-sm font-semibold text-[#1B4DB7] orange-gradient hover:shadow-lg hover:shadow-[#F47920]/30 transition-all duration-300 font-body"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: '24h', label: 'Response Time' },
                { num: '3–7d', label: 'Standard Lead' },
                { num: '100%', label: 'Satisfaction' },
                { num: 'Free', label: 'Quotes' },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
                  <div className="font-display text-xl font-bold text-[#F47920]">{s.num}</div>
                  <div className="text-xs text-slate-500 font-body mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Accordion */}
          <div className="lg:col-span-3 space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                faq={faq}
                index={i}
                inView={inView}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
