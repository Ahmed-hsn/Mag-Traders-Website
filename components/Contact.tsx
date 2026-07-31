'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+92 XXX XXX XXXX',
      sub: 'Available Mon–Sat, 9:00 AM–6:00 PM',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@magtraders.pk',
      sub: 'We respond within 24 hours',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'magtraders.pk',
      sub: 'Visit us online',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Monday–Saturday 9:00 AM–6:00 PM',
      sub: 'Closed on Sundays & public holidays',
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase font-body mb-4 border border-[#C9A84C]/20"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-[#0C1B3A] mb-4"
          >
            Contact <span className="text-[#C9A84C]">MAG Traders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto font-body"
          >
            Ready to bring your brand to life? Get in touch for a free quote or to discuss your project.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="navy-gradient rounded-2xl p-7 text-white mb-6">
              <h3 className="font-display text-xl font-bold mb-1">MAG Traders</h3>
              <p className="text-white/60 text-sm font-body mb-6">
                Premium Printing &amp; Branding Solutions
              </p>

              <div className="space-y-5">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <detail.icon className="w-4.5 h-4.5 w-4 h-4 text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 font-body uppercase tracking-wider mb-0.5">{detail.label}</p>
                      <p className="text-white font-semibold font-body text-sm">{detail.value}</p>
                      <p className="text-white/50 text-xs font-body">{detail.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm">
              <div
                className="w-full h-52 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/38748839/pexels-photo-38748839.jpeg?auto=compress&cs=tinysrgb&h=400&w=600)',
                }}
                aria-label="MAG Traders location map placeholder"
              >
                <div className="absolute inset-0 bg-[#0C1B3A]/60 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-8 h-8 text-[#C9A84C] mx-auto mb-2" />
                    <p className="font-body text-sm font-medium">MAG Traders</p>
                    <p className="font-body text-xs text-white/70">Pakistan</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-5 py-2 rounded-full text-xs font-semibold text-[#0C1B3A] gold-gradient hover:scale-105 transition-all duration-200 shadow-md font-body"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0C1B3A] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 font-body text-sm max-w-xs">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#0C1B3A] hover:bg-[#122247] hover:scale-[1.03] transition-all duration-200 font-body shadow-md"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-[#0C1B3A] mb-1">
                    Request a Free Quote
                  </h3>
                  <p className="text-slate-500 text-sm font-body mb-7">
                    Fill in your details and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#0C1B3A] mb-1.5 font-body tracking-wide uppercase">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-slate-800 placeholder-slate-400 font-body focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all duration-200 bg-[#F8FAFC]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0C1B3A] mb-1.5 font-body tracking-wide uppercase">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-slate-800 placeholder-slate-400 font-body focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all duration-200 bg-[#F8FAFC]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0C1B3A] mb-1.5 font-body tracking-wide uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92 XXX XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-slate-800 placeholder-slate-400 font-body focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all duration-200 bg-[#F8FAFC]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0C1B3A] mb-1.5 font-body tracking-wide uppercase">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project — what do you need, quantity, timeline, and any other details..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-slate-800 placeholder-slate-400 font-body focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all duration-200 bg-[#F8FAFC] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full text-base font-semibold text-[#0C1B3A] gold-gradient hover:shadow-lg hover:shadow-[#C9A84C]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-body"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
