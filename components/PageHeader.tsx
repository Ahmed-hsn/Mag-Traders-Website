'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="relative py-20 lg:py-28 flex flex-col items-center justify-center overflow-hidden bg-[#0C1B3A]">
      {/* 1. Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081428] to-[#0C1B3A] -z-10" />
      
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#C9A84C]/10 blur-3xl pointer-events-none -z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* 2. Logo Container */}
        {/* Logo */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center mb-10" // Increased bottom margin slightly
>
  <Image
    src="/logo.png"
    alt="Company Logo"
    width={280}   // Increased from 180 to 280
    height={280}  // Increased from 180 to 280
    priority
    className="object-contain w-auto h-32 md:h-40 lg:h-48" // Explicit responsive heights
  />
</motion.div>

        {/* 3. Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          {title}
        </motion.h1>

        {/* 4. Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-body"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}