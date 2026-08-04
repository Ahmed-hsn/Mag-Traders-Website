'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown, Printer, Palette, Briefcase, Monitor } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Vision', href: '/vision' },
  { label: 'Services', href: '/services', hasMegaMenu: true },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

const serviceCategories = [
  {
    title: 'Printing Solutions',
    href: '/services#printing-solutions',
    icon: Printer,
    color: 'bg-blue-50 text-blue-600',
    items: ['Offset Printing', 'Digital Printing', 'Flex & Banner Printing', 'Business Cards', 'Product Packaging'],
  },
  {
    title: 'Branding & Advertising',
    href: '/services#branding',
    icon: Palette,
    color: 'bg-purple-50 text-purple-600',
    items: ['Sign Boards & Hoardings', 'Outdoor Advertising', 'Indoor Branding', 'Advertising Campaigns'],
  },
  {
    title: 'Corporate Branding',
    href: '/services#corporate',
    icon: Briefcase,
    color: 'bg-amber-50 text-amber-600',
    items: ['Promotional Items', 'Rubber Stamps & Seals', 'Trophies & Awards', 'Customized T-Shirts'],
  },
  {
    title: 'Office & IT Solutions',
    href: '/services#office',
    icon: Monitor,
    color: 'bg-teal-50 text-teal-600',
    items: ['Complete Office Stationery', 'Computer & Laptop Sales', 'IT Accessories', 'General Supplies'],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounced close so cursor can travel from trigger to menu
  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setMegaMenuOpen(false), 120);
  };

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white py-2.5 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 flex-shrink-0 transition-opacity hover:opacity-90"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
              <Image
                src="/logo-new.png"
                alt="MAG Traders (Pvt.) Ltd. Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center leading-[0.8] select-none">
              <span className="text-2xl md:text-3xl font-serif font-bold text-[#0C1B3A] tracking-tight">MAG</span>
              <span className="text-[10px] md:text-[11px] font-sans font-black text-[#F47920] tracking-[0.35em] uppercase mt-1">Traders</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isTrigger = link.hasMegaMenu;

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={isTrigger ? handleMouseEnter : undefined}
                  onMouseLeave={isTrigger ? handleMouseLeave : undefined}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-300 font-body flex items-center gap-1 ${isActive ? 'text-[#F47920] bg-slate-50' : 'text-slate-700 hover:text-[#F47920] hover:bg-slate-50'
                      }`}
                  >
                    {link.label}
                    {isTrigger && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 ml-0.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`}
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F47920]"
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white orange-gradient shadow-lg shadow-[#F47920]/30 hover:shadow-[#F47920]/50 transition-all duration-300 hover:scale-105 font-body"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full text-slate-800 hover:bg-slate-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── Mega Menu — rendered outside header so it can be truly viewport-centered ── */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="fixed top-[69px] left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden">
              {/* Category grid */}
              <div className="grid grid-cols-4 divide-x divide-[#F1F5F9]">
                {serviceCategories.map((cat) => (
                  <div key={cat.title} className="p-7 hover:bg-[#FAFBFF] transition-colors duration-150">
                    {/* Category header with icon */}
                    <Link href={cat.href} className="flex items-center gap-3 mb-5 group">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cat.color} bg-opacity-10`}>
                        <cat.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-bold text-[#1B4DB7] text-[15px] leading-tight group-hover:text-[#F47920] transition-colors">
                        {cat.title}
                      </h4>
                    </Link>

                    {/* Sub-items */}
                    <ul className="space-y-2.5">
                      {cat.items.map((item) => (
                        <li key={item}>
                          <Link
                            href={cat.href}
                            className="flex items-center gap-2 text-[13px] text-slate-500 hover:text-[#F47920] transition-colors font-body group"
                          >
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all flex-shrink-0" />
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 mt-5 text-xs font-semibold text-[#1B4DB7] hover:text-[#F47920] transition-colors font-body group"
                    >
                      View All
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Footer bar */}
              <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-8 py-4 flex items-center justify-between">
                <p className="text-sm text-slate-500 font-body">
                  ✨ Ready to transform your brand?
                </p>
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 text-sm font-semibold text-[#1B4DB7] hover:text-[#F47920] transition-colors font-body group"
                >
                  Request a Custom Quote
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop dimmer */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[69px] z-30 bg-black/20 backdrop-blur-[1px]"
            onMouseEnter={handleMouseLeave}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image src="/logo-new.png" alt="Logo" fill className="object-contain" />
                  </div>
                  <div className="flex flex-col leading-[0.8]">
                    <span className="text-xl font-serif font-bold text-[#0C1B3A]">MAG</span>
                    <span className="text-[9px] font-sans font-bold text-[#F47920] tracking-[0.2em] uppercase">Traders</span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const isTrigger = link.hasMegaMenu;

                  return (
                    <div key={link.href}>
                      <div className="flex items-center">
                        <Link
                          href={link.href}
                          onClick={() => !isTrigger && setMobileOpen(false)}
                          className={`flex-1 flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 font-body ${isActive
                              ? 'bg-[#F47920]/15 text-[#F47920] border border-[#F47920]/30'
                              : 'text-slate-600 hover:text-[#F47920] hover:bg-slate-50'
                            }`}
                        >
                          {link.label}
                          {!isTrigger && (
                            <ChevronRight className={`w-3.5 h-3.5 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                          )}
                        </Link>
                        {isTrigger && (
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="p-3 ml-2 text-slate-500 hover:text-[#F47920]"
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>

                      {/* Mobile expandable services */}
                      {isTrigger && mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-slate-50 rounded-xl mt-1 mb-2"
                        >
                          <div className="p-4 space-y-5">
                            {serviceCategories.map((cat) => (
                              <div key={cat.title}>
                                <div className="flex items-center gap-2 mb-2">
                                  <cat.icon className="w-4 h-4 text-[#F47920]" />
                                  <h5 className="text-[#F47920] text-xs font-bold uppercase tracking-wider">{cat.title}</h5>
                                </div>
                                <ul className="space-y-1.5 pl-6 border-l border-slate-200">
                                  {cat.items.map((item) => (
                                    <li key={item}>
                                      <Link
                                        href={cat.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-slate-500 text-sm hover:text-[#F47920] transition-colors block py-0.5"
                                      >
                                        {item}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <Link
                              href="/services"
                              onClick={() => setMobileOpen(false)}
                              className="block w-full text-center py-2 mt-1 bg-slate-100 rounded-lg text-sm text-slate-700 hover:bg-slate-200 hover:text-[#F47920] transition-colors"
                            >
                              View All Services
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="px-4 pb-8 pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex justify-center py-3.5 rounded-full text-sm font-semibold text-white orange-gradient shadow-lg font-body hover:shadow-[#F47920]/40 transition-shadow"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
