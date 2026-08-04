'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, TrendingUp, Globe2, Truck, Star } from 'lucide-react';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
export default function Vision() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[#1B4DB7]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4DB7] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl bg-white/10 rounded-full p-4 backdrop-blur-sm border border-white/20">
              <Image
                src="/logo-new.png"
                alt="MAG Traders (Pvt.) Ltd. Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6"
          >
            Our <span className="text-[#F47920]">Vision</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto font-serif font-light leading-relaxed"
          >
            To become one of Pakistan's leading printing and advertising companies by delivering exceptional quality, outstanding customer service, and innovative branding solutions.
          </motion.p>
        </div>
      </section>
      {/* Expanded Vision Content */}
      <section className="py-24" ref={ref1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: TrendingUp,
                title: 'Industry Leadership',
                desc: 'We strive to set the orange standard in the printing industry. By continuously upgrading our technology and methodologies, we aim to pioneer new branding solutions that help our clients dominate their markets.'
              },
              {
                icon: Star,
                title: 'Unrivaled Quality',
                desc: 'Our vision is deeply rooted in perfection. We envision a future where every piece of marketing collateral produced by MAG Traders serves as a benchmark for premium quality and stunning aesthetics.'
              },
              {
                icon: Globe2,
                title: 'Sustainable Growth',
                desc: 'As we expand our reach across Pakistan, we remain committed to sustainable business practices, fostering long-term relationships with our clients, and empowering local businesses to thrive globally.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#F8FAFC] rounded-3xl p-10 border border-[#E2E8F0] hover:shadow-2xl hover:shadow-[#F47920]/10 hover:border-[#F47920]/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F47920]/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500" />
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-8 group-hover:bg-[#1B4DB7] transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-[#1B4DB7] group-hover:text-[#F47920] transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B4DB7] font-display mb-4 group-hover:text-[#F47920] transition-colors duration-500">{item.title}</h3>
                <p className="text-slate-600 font-body leading-relaxed group-hover:text-slate-700 transition-colors duration-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Nationwide Delivery Highlight */}
      <section className="py-24 bg-[#1B4DB7] relative overflow-hidden" ref={ref2}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-[#122855] to-[#081428] rounded-[2.5rem] p-10 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl"
          >
            {/* Map/Globe background abstraction */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[url('https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover opacity-5 mix-blend-screen rounded-full blur-sm" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#F47920]/20 border border-[#F47920]/40 mb-8">
                <Truck className="w-5 h-5 text-[#F47920]" />
                <span className="text-[#F47920] font-semibold text-sm tracking-wider uppercase font-body">
                  Our Promise
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6 leading-tight">
                Delivery Across <span className="text-[#F47920]">Pakistan</span>
              </h2>
              <p className="text-xl text-white/80 font-body leading-relaxed mb-10">
                Our vision extends beyond rawalpindi. No matter where you are in Pakistan, we ensure safe, secure, and timely delivery of your orders right to your doorstep. We are building a logistical network that matches the quality of our prints.
              </p>

              <div className="flex gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
                  <h4 className="text-[#F47920] text-3xl font-display font-bold mb-1">100%</h4>
                  <p className="text-white/60 text-sm font-body">Secure Packaging</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
                  <h4 className="text-[#F47920] text-3xl font-display font-bold mb-1">Fast</h4>
                  <p className="text-white/60 text-sm font-body">Nationwide Transit</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}