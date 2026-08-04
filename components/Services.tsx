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
      { title: 'Offset Printing', desc: 'High-volume professional printing.', image: 'https://images.pexels.com/photos/1749301/pexels-photo-1749301.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Digital Printing', desc: 'Fast turnaround and short-run printing.', image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Flex Printing', desc: 'Durable large-format printing.', image: 'https://images.pexels.com/photos/7675023/pexels-photo-7675023.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Banner Printing', desc: 'Eye-catching custom banners.', image: 'https://images.pexels.com/photos/5727002/pexels-photo-5727002.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Vinyl Printing', desc: 'High-quality vinyl wraps and prints.', image: 'https://images.pexels.com/photos/20042071/pexels-photo-20042071.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Brochures', desc: 'Informative folding brochures.', image: 'https://images.pexels.com/photos/29452731/pexels-photo-29452731.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Flyers & Leaflets', desc: 'Effective marketing handouts.', image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Business Cards', desc: 'Premium custom business cards.', image: 'https://images.pexels.com/photos/8490097/pexels-photo-8490097.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Letterheads & Envelopes', desc: 'Professional branded stationery.', image: 'https://images.pexels.com/photos/29857196/pexels-photo-29857196.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Company Profiles', desc: 'Comprehensive corporate profiles.', image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Catalogs & Booklets', desc: 'Detailed product catalogs.', image: 'https://images.pexels.com/photos/1750058/pexels-photo-1750058.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Wedding Cards & Invitation Cards', desc: 'Beautiful custom invitations.', image: 'https://images.pexels.com/photos/689442/pexels-photo-689442.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Product Packaging', desc: 'Custom packaging solutions.', image: 'https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Stickers & Labels', desc: 'Die-cut stickers and product labels.', image: 'https://images.pexels.com/photos/2034963/pexels-photo-2034963.jpeg?auto=compress&cs=tinysrgb&w=600' }
    ]
  },
  {
    category: 'Branding & Advertising',
    icon: ImageIcon,
    items: [
      { title: 'Sign Boards', desc: 'Illuminated and standard sign boards.', image: 'https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Hoardings', desc: 'Large outdoor advertising structures.', image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Outdoor Advertising', desc: 'Billboards and outdoor placements.', image: 'https://images.pexels.com/photos/4005041/pexels-photo-4005041.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Indoor Branding', desc: 'Interior wall graphics and branding.', image: 'https://images.pexels.com/photos/331990/pexels-photo-331990.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Advertising Campaigns', desc: 'Comprehensive ad campaigns.', image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Promotional Materials', desc: 'Branded promotional items.', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600' }
    ]
  },
  {
    category: 'Corporate Branding Solutions',
    icon: Briefcase,
    items: [
      { title: 'Corporate & Promotional Items', desc: 'Branded merchandise for business.', image: 'https://images.pexels.com/photos/7191981/pexels-photo-7191981.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Rubber Stamps', desc: 'Custom official rubber stamps.', image: 'https://images.pexels.com/photos/6445417/pexels-photo-6445417.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Company Seals', desc: 'Embossing seals for corporate use.', image: 'https://images.pexels.com/photos/8132924/pexels-photo-8132924.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Trophies, Shields & Awards', desc: 'Custom recognition awards.', image: 'https://images.pexels.com/photos/7005086/pexels-photo-7005086.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Customized T-Shirts', desc: 'Printed branded apparel.', image: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Corporate Gift Items', desc: 'Premium executive gifts.', image: 'https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'New Product Launch Kits', desc: 'Complete kits for product releases.', image: 'https://images.pexels.com/photos/6347901/pexels-photo-6347901.jpeg?auto=compress&cs=tinysrgb&w=600' }
    ]
  },
  {
    category: 'Office & IT Solutions',
    icon: Monitor,
    items: [
      { title: 'Complete Office Stationery', desc: 'All essential office supplies.', image: 'https://images.pexels.com/photos/7718714/pexels-photo-7718714.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Computer & Laptop Sales', desc: 'Desktop and laptop computers.', image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Laptop & Computer Accessories', desc: 'Peripherals and add-ons.', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { title: 'Office Supplies', desc: 'General office materials and equipment.', image: 'https://images.pexels.com/photos/2085797/pexels-photo-2085797.jpeg?auto=compress&cs=tinysrgb&w=600' }
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