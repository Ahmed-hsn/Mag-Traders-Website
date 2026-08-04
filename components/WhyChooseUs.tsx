'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Clock, Palette, Truck, HeartHandshake, BadgeDollarSign, Printer, Settings } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Premium Quality Printing',
    desc: 'We use only the finest papers, inks, and substrates to ensure every printed piece meets the highest standards of quality and durability.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Printer,
    title: 'Modern Printing Technology',
    desc: 'Equipped with the latest printing technology to deliver sharp, vibrant, and precise results for all your branding materials.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable & Competitive Prices',
    desc: 'Get exceptional value with our competitive pricing. No hidden fees, no surprises — just honest, upfront quotes tailored to your budget.',
    color: 'from-[#F47920] to-[#a8852e]',
  },
  {
    icon: Palette,
    title: 'Creative Design Team',
    desc: 'Our talented in-house designers bring your brand vision to life with creativity and precision — from concept sketches to print-ready files.',
    color: 'from-purple-600 to-purple-700',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround Time',
    desc: 'We understand business deadlines. Our streamlined production process ensures your orders are completed and delivered on time, every time.',
    color: 'from-emerald-600 to-emerald-700',
  },
  {
    icon: HeartHandshake,
    title: 'Professional Customer Support',
    desc: 'Our friendly support team is always available to guide you through the ordering process, answer questions, and ensure your satisfaction.',
    color: 'from-rose-500 to-rose-600',
  },
  {
    icon: Settings,
    title: 'Customized Solutions',
    desc: 'We provide tailored printing and branding solutions designed specifically to meet your unique business requirements and goals.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery Across Pakistan',
    desc: 'We deliver your prints safely and promptly to any location across Pakistan, with careful packaging to protect your order in transit.',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-choose-us" className="section-padding blue-gradient relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F47920] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-400 blur-3xl" />
      </div>

      <div className="container-tight relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-[#F47920]/20 text-[#F47920] text-xs font-semibold tracking-widest uppercase font-body mb-4 border border-[#F47920]/30"
          >
            Our Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Why Choose <span className="text-[#F47920]">MAG Traders (Pvt.) Ltd.?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl mx-auto font-body"
          >
            Six reasons why hundreds of businesses across Pakistan trust MAG Traders (Pvt.) Ltd. 
            as their go-to printing and branding partner.
          </motion.p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#F47920]/40 transition-all duration-400 cursor-default overflow-hidden flex flex-col"
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
              <h3 className="font-body font-bold text-white text-lg mb-3 group-hover:text-[#F47920] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-body group-hover:text-white/75 transition-colors duration-300 flex-1">
                {feature.desc}
              </p>

              {/* Number accent */}
              <div className="absolute top-5 right-5 font-display text-5xl font-bold text-white/4 group-hover:text-white/8 transition-colors duration-300 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nationwide Delivery Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-[#F47920]/10 border border-[#F47920]/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#1B4DB7]/40 z-0" />
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Delivery Across Pakistan
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-body">
              No matter where you are in Pakistan, we ensure safe, secure, and timely delivery of your orders right to your doorstep.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
