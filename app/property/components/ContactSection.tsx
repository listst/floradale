'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactSectionProps {
  configName: string;
}

export default function ContactSection({ configName }: ContactSectionProps) {
  const subject = encodeURIComponent(
    `Inquiry: Lompoc Valley Agricultural Estate - ${configName}`
  );
  const mailtoLink = `mailto:team@allanrealestate.com?subject=${subject}`;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold-500/10 via-transparent to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="badge-gold mb-4 inline-block">Get Started</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-4">
            Schedule a Private Tour
          </h2>
          <p className="text-xl text-forest-200 max-w-2xl mx-auto">
            Discover the exceptional opportunities this premier agricultural estate offers.
            Contact us today for detailed information and site visits.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <a
            href={mailtoLink}
            className="card card-hover p-6 text-center group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-500/20 rounded-xl mb-4 group-hover:bg-gold-500/30 transition-colors">
              <Mail className="w-7 h-7 text-gold-400" />
            </div>
            <h3 className="font-display text-lg text-white mb-2">Email</h3>
            <p className="text-gold-400 group-hover:text-gold-300 transition-colors">
              team@allanrealestate.com
            </p>
          </a>

          <a
            href="tel:+18054737500"
            className="card card-hover p-6 text-center group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-500/20 rounded-xl mb-4 group-hover:bg-gold-500/30 transition-colors">
              <Phone className="w-7 h-7 text-gold-400" />
            </div>
            <h3 className="font-display text-lg text-white mb-2">Phone</h3>
            <p className="text-gold-400 group-hover:text-gold-300 transition-colors">
              (805) 473-7500
            </p>
          </a>

          <div className="card p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-forest-700/50 rounded-xl mb-4">
              <MapPin className="w-7 h-7 text-forest-300" />
            </div>
            <h3 className="font-display text-lg text-white mb-2">Location</h3>
            <p className="text-forest-300">
              901 Floradale Avenue<br />Lompoc, CA 93436
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <a
            href={mailtoLink}
            className="btn-gold text-lg px-10 py-5 inline-flex"
          >
            <Send className="w-5 h-5" />
            Request Information
          </a>
          <p className="text-forest-400 text-sm mt-4">
            Currently viewing: <span className="text-gold-400 font-medium">{configName}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
