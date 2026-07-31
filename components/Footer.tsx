'use client';

import Link from 'next/link';
import { Printer, Phone, Mail, MapPin, Clock, ArrowUp, Globe } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact Us', href: '/contact' },
];

const services = [
  'Business Cards',
  'Wedding & Invitation Cards',
  'Letterheads & Envelopes',
  'Flyers/Brochures/Catalogues',
  'Posters & Banners',
  'Roll-up Standees',
  'Stickers & Labels',
  'Custom Packaging',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0C1B3A] text-white">
      {/* Gold top accent */}
      <div className="h-0.5 gold-gradient w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 inline-flex">
              <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center shadow-md">
                <Printer className="w-5 h-5 text-[#0C1B3A]" />
              </div>
              <div className="leading-none">
                <span className="block font-display font-bold text-white text-lg tracking-wide">MAG</span>
                <span className="block font-body text-[10px] font-medium tracking-[0.25em] text-[#C9A84C] uppercase">Traders</span>
              </div>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed font-body mb-6">
              Pakistan's trusted partner for premium printing, branding, and creative design solutions. 
              Your vision, printed perfectly.
            </p>
            {/* Contact snippets */}
            <div className="space-y-3">
              <a href="tel:+92XXXXXXXXXX" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#C9A84C] transition-colors font-body group">
                <Phone className="w-4 h-4 text-[#C9A84C] group-hover:scale-110 transition-transform" />
                +92 XXX XXX XXXX
              </a>
              <a href="mailto:info@magtraders.pk" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#C9A84C] transition-colors font-body group">
                <Mail className="w-4 h-4 text-[#C9A84C] group-hover:scale-110 transition-transform" />
                info@magtraders.pk
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/70 font-body">
                <Globe className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                magtraders.pk
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/70 font-body">
                <MapPin className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                Pakistan — Nationwide Delivery
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body font-bold text-white text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors font-body flex items-center gap-2 group inline-flex"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#C9A84C] transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-bold text-white text-sm tracking-wider uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors font-body flex items-center gap-2 group text-left inline-flex"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#C9A84C] transition-all duration-300 overflow-hidden" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business hours */}
          <div>
            <h4 className="font-body font-bold text-white text-sm tracking-wider uppercase mb-5">
              Business Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white font-body">Monday – Saturday</p>
                  <p className="text-xs text-white/55 font-body">9:00 AM – 6:00 PM (PKT)</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white/50 font-body">Sunday</p>
                  <p className="text-xs text-white/35 font-body">Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white/50 font-body">Public Holidays</p>
                  <p className="text-xs text-white/35 font-body">Closed</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 p-4 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
              <p className="text-xs text-white/60 font-body mb-3">Ready to get started?</p>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-[#0C1B3A] gold-gradient hover:shadow-md transition-all duration-200 font-body block text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 font-body text-center sm:text-left">
            &copy; {new Date().getFullYear()} MAG Traders. All rights reserved. | 
            Premium Printing &amp; Branding Solutions, Pakistan
          </p>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-[#C9A84C]/20 hover:bg-[#C9A84C]/40 border border-[#C9A84C]/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#C9A84C]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
