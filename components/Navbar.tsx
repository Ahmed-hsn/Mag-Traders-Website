'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Printer, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className="sticky top-0 left-0 right-0 z-50 bg-[#0C1B3A] py-3 shadow-lg shadow-black/10 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <div className="w-9 h-9 rounded-xl gold-gradient flex items-center justify-center shadow-md group-hover:shadow-[#C9A84C]/40 transition-shadow duration-300">
              <Printer className="w-5 h-5 text-[#0C1B3A]" />
            </div>
            <div className="leading-none">
              <span className="block font-display font-bold text-lg tracking-wide text-white transition-colors duration-400">
                MAG
              </span>
              <span className="block font-body text-[10px] font-semibold tracking-[0.25em] text-[#C9A84C] uppercase">
                Traders
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-300 font-body ${
                    isActive
                      ? 'text-[#C9A84C] bg-white/10'
                      : 'text-white hover:text-[#C9A84C] hover:bg-white/8'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A84C]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA button */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-[#0C1B3A] gold-gradient shadow-lg shadow-[#C9A84C]/30 hover:shadow-[#C9A84C]/50 transition-all duration-300 hover:scale-105 font-body"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu — full-screen drawer */}
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
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#0C1B3A] flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
                    <Printer className="w-4 h-4 text-[#0C1B3A]" />
                  </div>
                  <span className="font-display font-bold text-white">MAG Traders</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 font-body ${
                          isActive
                            ? 'bg-[#C9A84C]/15 text-[#C9A84C] border border-[#C9A84C]/30'
                            : 'text-white/75 hover:text-white hover:bg-white/8'
                        }`}
                      >
                        {link.label}
                        <ChevronRight className={`w-3.5 h-3.5 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="px-4 pb-8 pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex justify-center py-3.5 rounded-full text-sm font-semibold text-[#0C1B3A] gold-gradient shadow-lg font-body hover:shadow-[#C9A84C]/40 transition-shadow"
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
