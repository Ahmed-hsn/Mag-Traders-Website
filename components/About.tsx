'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } } as const,
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7675023/pexels-photo-7675023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="MAG Traders (Pvt.) Ltd. graphic design and branding professionals at work"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4DB7]/60 to-transparent" />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg orange-gradient flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#1B4DB7]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B4DB7] text-sm font-body">Premium Quality Guaranteed</p>
                    <p className="text-xs text-slate-500 font-body">Every print, every time — excellence delivered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-[#F47920]/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#1B4DB7]/5 -z-10" />
          </motion.div>

          {/* Text content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1 rounded-full bg-[#F47920]/10 text-[#F47920] text-xs font-semibold tracking-widest uppercase font-body mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B4DB7] leading-tight mb-6">
                About <span className="text-[#F47920]">MAG Traders (Pvt.) Ltd.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed font-body text-lg">
                Our mission is to provide reliable, innovative, and high-quality printing and advertising solutions that help businesses strengthen their brand identity and achieve their marketing goals.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B4DB7] leading-tight mb-6 mt-12">
                Our <span className="text-[#F47920]">Vision</span>
              </h2>
              <p className="text-slate-600 leading-relaxed font-body text-lg">
                To become one of Pakistan's leading printing and advertising companies by delivering exceptional quality, outstanding customer service, and innovative branding solutions.
              </p>
            </motion.div>

            {/* Key pillars */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, title: 'Precision', desc: 'Pixel-perfect output every time' },
                { icon: Eye, title: 'Innovation', desc: 'Modern design that stands out' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1B4DB7] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#F47920]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B4DB7] text-sm font-body">{item.title}</p>
                    <p className="text-xs text-slate-500 font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
