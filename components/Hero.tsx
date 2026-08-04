'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ShoppingCart, Phone } from 'lucide-react';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } } as const,
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, type: 'tween' as const } },
};

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-40 flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920)',
        }}
        role="img"
        aria-label="Professional printing and design workspace"
      />
      <div className="absolute inset-0 bg-white/90 backdrop-blur-md" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #F47920 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4DB7]/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#F47920]/15 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F47920]/35 bg-[#F47920]/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47920] animate-pulse flex-shrink-0" />
              <span className="text-[#F47920] text-xs font-semibold tracking-[0.15em] uppercase font-body whitespace-nowrap">
                Pakistan's Premium Printing Partner
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-[#1B4DB7] leading-[1.08] mb-5 md:mb-6"
          >
            Welcome to{' '}
            <span className="text-[#F47920]">MAG Traders (Pvt.) Ltd.</span>
            <br />
            <em className="not-italic font-light text-slate-600 block mt-3 text-3xl sm:text-4xl md:text-5xl">
              - Your Trusted Printing & Advertising Partner
            </em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="text-sm md:text-lg text-slate-700 max-w-3xl mx-auto mb-10 md:mb-12 leading-[1.8] font-serif font-light"
          >
            At MAG Traders (Pvt.) Ltd., we provide complete printing, branding, advertising, and office solutions under one roof. With a commitment to quality, creativity, and timely delivery, we help businesses, organizations, educational institutions, and individuals bring their ideas to life. Whether you need promotional materials, corporate branding, outdoor advertising, or office supplies, our experienced team ensures professional results that leave a lasting impression.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-[0.9rem] font-semibold text-white orange-gradient shadow-xl shadow-[#F47920]/25 hover:shadow-2xl hover:shadow-[#F47920]/40 hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 font-body w-full sm:w-auto justify-center"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-[0.9rem] font-semibold text-slate-700 border-2 border-slate-300 hover:border-[#F47920] hover:text-[#F47920] bg-white hover:bg-slate-50 backdrop-blur-sm hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 font-body w-full sm:w-auto justify-center"
            >
              <ShoppingCart className="w-4 h-4 flex-shrink-0" />
              Place an Order
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-[0.9rem] font-semibold text-[#F47920] border-2 border-[#F47920]/40 hover:border-[#F47920]/80 bg-[#F47920]/8 hover:bg-[#F47920]/18 hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 font-body w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
