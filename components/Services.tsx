'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CreditCard,
  Heart,
  Mail,
  FileText,
  Image,
  Maximize,
  Tag,
  Stamp,
  Layers,
  Package,
  PenTool,
  Palette,
  Share2,
  MessageSquare,
  Star,
} from 'lucide-react';

const services = [
  {
    icon: CreditCard,
    title: 'Business Cards',
    desc: 'Premium quality cards with matte, gloss, spot UV, and raised print finishes.',
    image: 'https://kimi-web-img.moonshot.cn/img/cdn.mockupnest.com/3570f6604fce4d7a162b80f5a60e57c2c3422a0c.jpg',
  },
  {
    icon: Heart,
    title: 'Wedding & Invitation Cards',
    desc: 'Beautifully crafted custom invitations for your special day.',
    image: 'https://kimi-web-img.moonshot.cn/img/www.claritynco.com/46876d4c47a13b2dff1546cbeb03bea20a8281a8.jpg',
  },
  {
    icon: Mail,
    title: 'Letterheads & Envelopes',
    desc: 'Professional branded stationery for your corporate communications.',
    image: 'https://kimi-web-img.moonshot.cn/img/mir-s3-cdn-cf.behance.net/facc1678f105ecde679fbf09cc690f09e4447a42.jpg',
  },
  {
    icon: FileText,
    title: 'Flyers/Brochures/Catalogues',
    desc: 'High-impact marketing materials with stunning layouts and vivid colors.',
    image: 'https://kimi-web-img.moonshot.cn/img/dv12lc9eedkje.cloudfront.net/c1762cf98e1cd776d7f4c00cd6c6711d17f4877f.png',
  },
  {
    icon: Image,
    title: 'Posters & Banners',
    desc: 'Eye-catching posters and vinyl banners for indoor and outdoor use.',
    image: 'https://daganghalal.blob.core.windows.net/28330/Product/1000x1000__banner1-1644313639441.jpg',
  },
  {
    icon: Maximize,
    title: 'Roll-up Standees',
    desc: 'Portable and durable pull-up banners for events and exhibitions.',
    image: 'https://kimi-web-img.moonshot.cn/img/image.made-in-china.com/97f2f5890cd564725275345f97cbdd5a34037812.webp',
  },
  {
    icon: Tag,
    title: 'Stickers & Labels',
    desc: 'Die-cut stickers, product labels, and holographic seals.',
    image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Stamp,
    title: 'Rubber Stamps & Self-Inking Stamps',
    desc: 'Custom stamps for official and corporate use.',
    image: 'https://kimi-web-img.moonshot.cn/img/images.squarespace-cdn.com/d2ccff6a153cf62d3fec148d2d867f167ebfd0b3.jpg',
  },
  {
    icon: Layers,
    title: 'Corporate Stationery',
    desc: 'Complete stationery suites including notepads, ID cards, and lanyards.',
    image: 'https://images.pexels.com/photos/7191981/pexels-photo-7191981.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    desc: 'Branded boxes, bags, and packaging solutions tailored to your products.',
    image: 'https://kimi-web-img.moonshot.cn/img/thecustomizeboxes.com/f5f6acc035e307ff0672bc59e88881a29beb5141.webp',
  },
  {
    icon: PenTool,
    title: 'Logo Design',
    desc: 'Professional logo design to establish a strong brand identity.',
    image: 'https://kimi-web-img.moonshot.cn/img/images-platform.99static.com/8ed5f7bae1344bea5a62e43b5714bc11b9e0f940',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Full creative design services from concept to print-ready artwork.',
    image: 'https://img.magnific.com/premium-photo/free-picture-graphic-designer-design-logo-design-sketches_934342-77.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    icon: Share2,
    title: 'Social Media Designs',
    desc: 'Engaging digital creatives for your social media campaigns.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: MessageSquare,
    title: 'Printing Consultation',
    desc: 'Expert advice on materials, finishes, and cost-effective solutions.',
    image: 'https://kimi-web-img.moonshot.cn/img/secretsofprint.co.uk/42f59e6ea856f901d9871450500426b3c74d55f7.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.055, duration: 0.55 },
  }),
};

export default function Services({ limit, isHome = false }: { limit?: number; isHome?: boolean } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-[#0C1B3A]/8 text-[#0C1B3A] text-xs font-semibold tracking-widest uppercase font-body mb-4 border border-[#0C1B3A]/10"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-[#0C1B3A] mb-4"
          >
            Our <span className="text-[#C9A84C]">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto font-body"
          >
            A comprehensive suite of premium printing and branding services —
            everything your business needs under one roof.
          </motion.p>
        </div>

        {/* Services grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayedServices.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -7, scale: 1.02, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-300 cursor-default flex flex-col"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0C1B3A]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm group-hover:bg-[#0C1B3A] group-hover:gold-gradient flex items-center justify-center shadow-lg transition-all duration-300">
                    <service.icon className="w-6 h-6 text-[#C9A84C] group-hover:text-[#0C1B3A] transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col bg-white z-20">
                <h3 className="font-body font-bold text-[#0C1B3A] mb-2 text-base group-hover:text-[#C9A84C] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-body">
                  {service.desc}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-30" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          {isHome ? (
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold text-[#0C1B3A] gold-gradient hover:shadow-xl hover:shadow-[#C9A84C]/30 hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 font-body shadow-lg shadow-[#C9A84C]/15"
            >
              Explore More Services
            </Link>
          ) : (
            <>
              <p className="text-slate-600 mb-4 font-body">
                Don't see what you need? We handle custom projects too.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold text-[#0C1B3A] gold-gradient hover:shadow-xl hover:shadow-[#C9A84C]/30 hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 font-body shadow-lg shadow-[#C9A84C]/15"
              >
                <Star className="w-4 h-4" />
                Request a Custom Quote
              </Link>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}