'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Clock, Palette, Truck, HeartHandshake, BadgeDollarSign } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Premium Quality',
    desc: 'We use only the finest papers, inks, and substrates to ensure every printed piece meets the highest standards of quality and durability.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable Pricing',
    desc: 'Get exceptional value with our competitive pricing. No hidden fees, no surprises — just honest, upfront quotes tailored to your budget.',
    color: 'from-[#C9A84C] to-[#a8852e]',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: 'We understand business deadlines. Our streamlined production process ensures your orders are completed and delivered on time, every time.',
    color: 'from-emerald-600 to-emerald-700',
  },
  {
    icon: Palette,
    title: 'Custom Designs',
    desc: 'Our talented in-house designers bring your brand vision to life with creativity and precision — from concept sketches to print-ready files.',
    color: 'from-purple-600 to-purple-700',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    desc: 'We deliver your prints safely and promptly to any location across Pakistan, with careful packaging to protect your order in transit.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: HeartHandshake,
    title: 'Professional Customer Support',
    desc: 'Our friendly support team is always available to guide you through the ordering process, answer questions, and ensure your satisfaction.',
    color: 'from-rose-500 to-rose-600',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-choose-us" className="section-padding navy-gradient relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-400 blur-3xl" />
      </div>

      <div className="container-tight relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase font-body mb-4 border border-[#C9A84C]/30"
          >
            Our Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Why Choose <span className="text-[#C9A84C]">MAG Traders?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/65 text-lg max-w-2xl mx-auto font-body"
          >
            Six reasons why hundreds of businesses across Pakistan trust MAG Traders 
            as their go-to printing and branding partner.
          </motion.p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#C9A84C]/40 transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
              />

              {/* Icon */}
              <div className={`w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-body font-bold text-white text-lg mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-body group-hover:text-white/75 transition-colors duration-300">
                {feature.desc}
              </p>

              {/* Number accent */}
              <div className="absolute top-5 right-5 font-display text-5xl font-bold text-white/4 group-hover:text-white/8 transition-colors duration-300 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
