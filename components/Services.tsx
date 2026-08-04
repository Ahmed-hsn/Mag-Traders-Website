'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FileText,
  Printer,
  Monitor,
  Briefcase,
  Star,
  Image as ImageIcon,
} from 'lucide-react';

const serviceCategories = [
  {
    category: 'Printing Solutions',
    icon: Printer,
    items: [
      { title: 'Offset Printing', desc: 'High-volume professional printing.', image: 'https://images.pexels.com/photos/29857196/pexels-photo-29857196.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Digital Printing', desc: 'Fast turnaround and short-run printing.', image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Flex Printing', desc: 'Durable large-format printing.', image: 'https://images.pexels.com/photos/7675023/pexels-photo-7675023.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Banner Printing', desc: 'Eye-catching custom banners.', image: 'https://images.pexels.com/photos/5727002/pexels-photo-5727002.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Vinyl Printing', desc: 'High-quality vinyl wraps and prints.', image: 'https://images.pexels.com/photos/20042071/pexels-photo-20042071.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Brochures', desc: 'Informative folding brochures.', image: 'https://images.pexels.com/photos/29452731/pexels-photo-29452731.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Flyers & Leaflets', desc: 'Effective marketing handouts.', image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Business Cards', desc: 'Premium custom business cards.', image: 'https://images.pexels.com/photos/8490097/pexels-photo-8490097.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Letterheads & Envelopes', desc: 'Professional branded stationery.', image: 'https://images.pexels.com/photos/29857196/pexels-photo-29857196.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Company Profiles', desc: 'Comprehensive corporate profiles.', image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Catalogs & Booklets', desc: 'Detailed product catalogs.', image: 'https://images.unsplash.com/photo-1627211448661-0ff9872180db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Wedding Cards & Invitation Cards', desc: 'Beautiful custom invitations.', image: 'https://images.pexels.com/photos/689442/pexels-photo-689442.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Product Packaging', desc: 'Custom packaging solutions.', image: 'https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Stickers & Labels', desc: 'Die-cut stickers and product labels.', image: 'https://plus.unsplash.com/premium_photo-1717894321045-6697f5b40ff3?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ]
  },
  {
    category: 'Branding & Advertising',
    icon: ImageIcon,
    items: [
      { title: 'Sign Boards', desc: 'Illuminated and standard sign boards.', image: 'https://plus.unsplash.com/premium_photo-1680859126181-6f85456f864e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Hoardings', desc: 'Large outdoor advertising structures.', image: 'https://plus.unsplash.com/premium_photo-1748188813885-36ffdca3b955?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Outdoor Advertising', desc: 'Billboards and outdoor placements.', image: 'https://plus.unsplash.com/premium_photo-1717894321045-6697f5b40ff3?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Indoor Branding', desc: 'Interior wall graphics and branding.', image: 'https://images.unsplash.com/photo-1716703435900-8a3fa400aa30?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Advertising Campaigns', desc: 'Comprehensive ad campaigns.', image: 'https://plus.unsplash.com/premium_photo-1661425715124-310ec1b49b8a?q=80&w=982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Promotional Materials', desc: 'Branded promotional items.', image: 'https://plus.unsplash.com/premium_photo-1752230475676-8fb37ed41631?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ]
  },
  {
    category: 'Corporate Branding Solutions',
    icon: Briefcase,
    items: [
      { title: 'Corporate & Promotional Items', desc: 'Branded merchandise for business.', image: 'https://images.unsplash.com/photo-1702609342206-c37562b99740?q=80&w=600&auto=format&fit=crop' },
      { title: 'Rubber Stamps', desc: 'Custom official rubber stamps.', image: 'https://images.pexels.com/photos/6445417/pexels-photo-6445417.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Company Seals', desc: 'Embossing seals for corporate use.', image: 'https://img.magnific.com/free-vector/illustration-circle-stamp-banner-vector_53876-27185.jpg?semt=ais_hybrid&w=740&q=80' },
      { title: 'Trophies, Shields & Awards', desc: 'Custom recognition awards.', image: 'https://images.unsplash.com/photo-1716703435900-8a3fa400aa30?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Customized T-Shirts', desc: 'Printed branded apparel.', image: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Corporate Gift Items', desc: 'Premium executive gifts.', image: 'https://images.unsplash.com/photo-1578704694513-08946e996642?q=80&w=600&auto=format&fit=crop' },
      { title: 'New Product Launch Kits', desc: 'Complete kits for product releases.', image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  {
    category: 'Office & IT Solutions',
    icon: Monitor,
    items: [
      { title: 'Complete Office Stationery', desc: 'All essential office supplies.', image: 'https://images.unsplash.com/photo-1672302377486-71f3fa61bb80?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Computer & Laptop Sales', desc: 'Desktop and laptop computers.', image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Laptop & Computer Accessories', desc: 'Peripherals and add-ons.', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop' },
      { title: 'Office Supplies', desc: 'General office materials and equipment.', image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=800&auto=format&fit=crop' }
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.55 },
  }),
};

export default function Services({ limit, isHome = false }: { limit?: number; isHome?: boolean } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Limit categories for home page preview
  const displayedCategories = limit ? serviceCategories.slice(0, 2) : serviceCategories;

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-[#1B4DB7]/8 text-[#1B4DB7] text-xs font-semibold tracking-widest uppercase font-body mb-4 border border-[#1B4DB7]/10"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-[#1B4DB7] mb-4"
          >
            Our <span className="text-[#F47920]">Services</span>
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

        {/* Services Categories */}
        <div ref={ref} className="space-y-20">
          {displayedCategories.map((categoryGroup, categoryIndex) => (
            <div key={categoryGroup.category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="flex items-center gap-4 mb-8 border-b border-[#1B4DB7]/10 pb-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B4DB7] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <categoryGroup.icon className="w-6 h-6 text-[#F47920]" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1B4DB7]">
                  {categoryGroup.category}
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryGroup.items.map((service, i) => (
                  <motion.div
                    key={service.title}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
                    className="group relative bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#F47920]/15 transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Image Header */}
                    <div className="h-48 w-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-[#1B4DB7]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        loading="lazy"
                      />
                      {/* Icon overlay */}
                      <div className="absolute bottom-4 left-4 z-20">
                        <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm group-hover:bg-[#1B4DB7] group-hover:orange-gradient flex items-center justify-center shadow-lg transition-all duration-300">
                          <FileText className="w-5 h-5 text-[#F47920] group-hover:text-[#1B4DB7] transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col bg-white relative z-20">
                      <h4 className="font-body font-bold text-[#1B4DB7] text-[15px] group-hover:text-[#F47920] transition-colors duration-300 mb-1.5">
                        {service.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-body">
                        {service.desc}
                      </p>
                    </div>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F47920] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-30" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          {isHome ? (
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold text-[#1B4DB7] orange-gradient hover:shadow-xl hover:shadow-[#F47920]/30 hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 font-body shadow-lg shadow-[#F47920]/15"
            >
              Explore All Categories
            </Link>
          ) : (
            <>
              <p className="text-slate-600 mb-4 font-body">
                Don't see what you need? We handle custom projects too.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold text-[#1B4DB7] orange-gradient hover:shadow-xl hover:shadow-[#F47920]/30 hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 font-body shadow-lg shadow-[#F47920]/15"
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