'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, ShieldCheck, Lightbulb, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    desc: 'We refuse to cut corners. From paper stock to ink density, every detail matters in our pursuit of perfection.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Innovation',
    desc: 'We embrace modern technology and innovative design trends to keep your brand ahead of the curve.',
  },
  {
    icon: Users,
    title: 'Customer-Centric Approach',
    desc: 'Your success is our success. We partner with you to understand your goals and deliver beyond expectations.',
  },
  {
    icon: Target,
    title: 'Reliability & Speed',
    desc: 'Deadlines are sacred to us. We guarantee fast turnarounds without ever compromising on our quality standards.',
  },
];

export default function AboutExtended() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView1 = useInView(ref1, { once: true, margin: '-80px' });
  const inView2 = useInView(ref2, { once: true, margin: '-80px' });

  return (
    <div className="bg-[#F8FAFC]">
      {/* Story Section */}
      <section className="py-20 lg:py-28" ref={ref1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={inView1 ? 'visible' : 'hidden'}
              className="space-y-8 order-2 lg:order-1"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-block px-4 py-1 rounded-full bg-[#F47920]/10 text-[#F47920] text-xs font-semibold tracking-widest uppercase font-body mb-4">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B4DB7] leading-tight mb-6">
                  A Legacy of <span className="text-[#F47920]">Excellence</span>
                </h2>
                <p className="text-slate-600 leading-relaxed font-body text-lg mb-4">
                  Founded with a passion for exceptional design and pristine printing, MAG Traders (Pvt.) Ltd. has grown from a humble local print shop into one of Pakistan's most trusted corporate branding partners.
                </p>
                <p className="text-slate-600 leading-relaxed font-body text-lg">
                  Over the years, we have continually invested in state-of-the-art printing technology and assembled a team of creative professionals dedicated to pushing the boundaries of what's possible in print and advertising.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4 pt-4 border-t border-[#E2E8F0]">
                {['Over a decade of industry experience', 'Thousands of satisfied corporate clients', 'Nationwide delivery network'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F47920] flex-shrink-0" />
                    <span className="text-[#1B4DB7] font-medium font-body">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Printing process"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/7675023/pexels-photo-7675023.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Design team"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F47920]/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#E2E8F0]" ref={ref2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-[#1B4DB7]/8 text-[#1B4DB7] text-xs font-semibold tracking-widest uppercase font-body mb-4"
            >
              Our Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl md:text-5xl font-bold text-[#1B4DB7] mb-6"
            >
              Core <span className="text-[#F47920]">Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-lg font-body"
            >
              These foundational principles guide every project we undertake, ensuring we deliver nothing short of excellence to our partners.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] hover:shadow-xl hover:border-[#F47920]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#1B4DB7] transition-colors duration-300">
                  <val.icon className="w-7 h-7 text-[#F47920]" />
                </div>
                <h3 className="text-xl font-bold text-[#1B4DB7] mb-3 font-display">{val.title}</h3>
                <p className="text-slate-600 font-body leading-relaxed text-sm">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1B4DB7]" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1749301/pexels-photo-1749301.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-2xl mx-auto">
            Join hundreds of successful businesses across Pakistan who trust MAG Traders (Pvt.) Ltd. for their printing and branding needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-[#F47920] hover:bg-[#e06713] hover:scale-105 transition-all duration-300 font-body"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors duration-300 font-body"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
