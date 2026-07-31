'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, FileSearch, Palette, Printer, PackageCheck, Truck } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Request a Quote',
    desc: 'Reach out via WhatsApp, email, or our contact form. Tell us about your project requirements, quantity, and timeline.',
  },
  {
    icon: FileSearch,
    title: 'Share Your Design or Requirements',
    desc: 'Our team reviews your requirements and provides a detailed, transparent quote tailored to your specific project needs.',
  },
  {
    icon: Palette,
    title: 'Design Approval',
    desc: 'Our expert designers create or refine your artwork. We share proofs for your approval before moving to production.',
  },
  {
    icon: Printer,
    title: 'Printing & Production',
    desc: 'Once you approve, we begin production using premium materials and state-of-the-art printing technology.',
  },
  {
    icon: PackageCheck,
    title: 'Quality Check',
    desc: 'Every order passes through our strict quality control process to ensure it meets our premium standards before dispatch.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    desc: 'Your order is carefully packaged and dispatched. We offer nationwide delivery across Pakistan, right to your doorstep.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how-it-works" className="section-padding bg-[#F8FAFC]">
      <div className="container-tight" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase font-body mb-4 border border-[#C9A84C]/20"
          >
            The Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-[#0C1B3A] mb-4"
          >
            How It <span className="text-[#C9A84C]">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto font-body"
          >
            From first contact to final delivery — a simple, transparent 6-step process 
            designed to make ordering effortless.
          </motion.p>
        </div>

        {/* Steps — desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-14 left-0 right-0 h-px bg-[#E2E8F0]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-[#C9A84C] via-[#E8C96B] to-[#C9A84C] origin-left"
            />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-2xl bg-white border-2 border-[#E2E8F0] shadow-md flex flex-col items-center justify-center group hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[#0C1B3A] flex items-center justify-center mb-1.5">
                      <step.icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <span className="font-display text-2xl font-bold text-[#C9A84C]">
                      {i + 1}
                    </span>
                  </div>
                </div>

                <h3 className="font-body font-bold text-[#0C1B3A] text-sm mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-body">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps — mobile vertical */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-5 relative pb-8"
            >
              {/* Left: number + line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[#0C1B3A] flex items-center justify-center shadow-md z-10">
                  <step.icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2 bg-gradient-to-b from-[#C9A84C] to-[#E2E8F0]" />
                )}
              </div>

              {/* Right: content */}
              <div className="pt-1.5 pb-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold text-[#C9A84C] font-body">Step {i + 1}</span>
                </div>
                <h3 className="font-body font-bold text-[#0C1B3A] text-base mb-1.5">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-body">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
