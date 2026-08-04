"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  "Business Cards",
  "Wedding & Invitation Cards",
  "Letterheads & Envelopes",
  "Flyers/Brochures/Catalogues",
  "Posters & Banners",
  "Roll-up Standees",
  "Stickers & Labels",
  "Custom Packaging",
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white text-slate-800">
      {/* orange top accent */}
      <div className="h-0.5 orange-gradient w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <Image
                src="/logo-new.png"
                alt="MAG Traders (Pvt.) Ltd. Logo"
                width={56}
                height={56}
                className="object-contain"
              />

              {/* Logo Text Styled to match image */}
              <div className="flex flex-col justify-center">
                <span className="text-[#0C1B3A] text-3xl font-serif font-bold leading-none tracking-tight">
                  MAG
                </span>
                <span className="text-[#F47920] text-[11px] font-sans font-bold tracking-[0.25em] uppercase leading-none mt-1">
                  Traders
                </span>
              </div>
            </Link>

            <p className="text-[#F47920] font-semibold text-sm leading-relaxed font-body mb-2">
              MAG Traders (Pvt.) Ltd. – Printing Excellence. Creative Branding. Trusted Solutions
            </p>
            <p className="text-slate-500 text-sm leading-relaxed font-body mb-6">
  Pakistan&apos;s trusted partner for premium printing, branding, and
  creative design solutions. Your vision, printed perfectly.
</p>
            {/* Contact snippets */}
            <div className="space-y-3">
              <a
                href="tel:+923215851936"
                className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-[#F47920] transition-colors font-body group"
              >
                <Phone className="w-4 h-4 text-[#F47920] group-hover:scale-110 transition-transform" />
                +92 321 5851936
              </a>
              <a
                href="mailto:Info@magtraders.pk"
                className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-[#F47920] transition-colors font-body group"
              >
                <Mail className="w-4 h-4 text-[#F47920] group-hover:scale-110 transition-transform" />
                Info@magtraders.pk
              </a>
              <a
                href="mailto:Info@magtraders.com"
                className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-[#F47920] transition-colors font-body group"
              >
                <Mail className="w-4 h-4 text-[#F47920] group-hover:scale-110 transition-transform" />
                Info@magtraders.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-600 font-body">
                <MapPin className="w-4 h-4 text-[#F47920] flex-shrink-0 mt-0.5" />
                <span>
                  Basement Shop #5, Taj Mahal Plaza, 6th Road Chowk, Rawalpindi
                </span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body font-bold text-[#0C1B3A] text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-[#F47920] transition-colors font-body inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#F47920] transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-bold text-[#0C1B3A] text-sm tracking-wider uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-600 hover:text-[#F47920] transition-colors font-body inline-flex items-center gap-2 group text-left"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#F47920] transition-all duration-300 overflow-hidden" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business hours */}
          <div>
            <h4 className="font-body font-bold text-[#0C1B3A] text-sm tracking-wider uppercase mb-5">
              Business Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F47920] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 font-body">
                    Monday – Thursday, Saturday – Sunday
                  </p>
                  <p className="text-xs text-slate-500 font-body">
                    9:00 AM – 6:00 PM (PKT)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F47920] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 font-body">
                    Friday
                  </p>
                  <p className="text-xs text-slate-500 font-body">Closed</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 p-4 rounded-xl bg-[#F47920]/10 border border-[#F47920]/20">
              <p className="text-xs text-slate-600 font-body mb-3">
                Ready to get started?
              </p>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-white orange-gradient hover:shadow-md transition-all duration-200 font-body block text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 font-body text-center sm:text-left">
            &copy; {new Date().getFullYear()} MAG Traders (Pvt.) Ltd.. All rights reserved.
            | Premium Printing &amp; Branding Solutions, Pakistan
          </p>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-[#F47920]/10 hover:bg-[#F47920]/20 border border-[#F47920]/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#F47920]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
