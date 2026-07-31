'use client';

import { motion } from 'framer-motion';

export default function TrustStrip() {
  return (
    <section className="bg-[#081428] py-16 relative overflow-hidden">
      {/* Subtle border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4"
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '14+', label: 'Services' },
            { value: '100%', label: 'Quality Assured' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center relative py-4">
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
              )}
              {i > 0 && (
                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-white/10" />
              )}
              <div className="font-display text-4xl sm:text-5xl font-bold text-[#C9A84C] mb-3">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/70 font-body tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
