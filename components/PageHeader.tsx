'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Added missing import

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="relative py-20 lg:py-28 flex flex-col items-center justify-center overflow-hidden bg-slate-50">
      {/* 1. Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-[#1B4DB7]/5 to-white -z-10" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #F47920 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#1B4DB7]/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#F47920]/10 blur-3xl pointer-events-none -z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* 2. Logo Container - Fixed structure */}
        <Link href="/" className="inline-flex items-center justify-center mb-10 group">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4" // This keeps image and text side-by-side
          >
            {/* The Logo Image */}
            <Image
              src="/logo-new.png"
              alt="Logo"
              width={150}
              height={150}
              priority
              className="w-14 h-14 md:w-20 md:h-20 object-contain"
            />

            {/* The Text Block - Styled to match your image */}
            <div className="flex flex-col items-start leading-[0.9]">
              <span className="text-3xl md:text-5xl font-serif font-bold text-[#0C1B3A] tracking-tight">
                MAG
              </span>
              <span className="text-[10px] md:text-[13px] font-sans font-extrabold text-[#F47920] tracking-[0.4em] uppercase mt-1">
                Traders
              </span>
            </div>
          </motion.div>
        </Link>

        {/* 3. Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C1B3A] mb-4 tracking-tight"
        >
          {title}
        </motion.h1>

        {/* 4. Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-serif font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}