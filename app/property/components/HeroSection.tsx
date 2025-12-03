'use client';

import { MapPin, Play, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  onScrollToMap: () => void;
}

export default function HeroSection({ onScrollToMap }: HeroSectionProps) {
  const [showTour, setShowTour] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-forest-800/20 via-transparent to-transparent blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 badge-gold mb-8 opacity-0 animate-fade-in-down">
              <MapPin className="w-4 h-4" />
              <span>Santa Barbara County, California</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display text-white mb-6 opacity-0 animate-fade-in delay-100">
              Lompoc Valley
              <span className="block text-gradient mt-2">Agricultural Estate</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-forest-200 max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in-up delay-200 leading-relaxed">
              406.7 acres of premier Central Coast farmland with exceptional infrastructure, 
              proven production history, and flexible acquisition options
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 opacity-0 animate-fade-in-up delay-300">
              <div className="card p-6">
                <p className="text-3xl md:text-4xl font-display text-gold-400 mb-1">406.7</p>
                <p className="text-sm text-forest-300 uppercase tracking-wider">Total Acres</p>
              </div>
              <div className="card p-6">
                <p className="text-3xl md:text-4xl font-display text-gold-400 mb-1">195</p>
                <p className="text-sm text-forest-300 uppercase tracking-wider">Farmable Acres</p>
              </div>
              <div className="card p-6">
                <p className="text-3xl md:text-4xl font-display text-gold-400 mb-1">5</p>
                <p className="text-sm text-forest-300 uppercase tracking-wider">Parcels</p>
              </div>
              <div className="card p-6">
                <p className="text-3xl md:text-4xl font-display text-white mb-1">$5.5M+</p>
                <p className="text-sm text-forest-300 uppercase tracking-wider">Starting Price</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-400">
              <button
                onClick={onScrollToMap}
                className="btn-gold text-lg px-8 py-4"
              >
                Explore Parcels
                <ChevronDown className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowTour(true)}
                className="btn-gold-outline text-lg px-8 py-4"
              >
                <Play className="w-5 h-5" />
                Virtual Tour
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
          <button 
            onClick={onScrollToMap}
            className="flex flex-col items-center gap-2 text-forest-400 hover:text-gold-400 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Virtual Tour Modal */}
      {showTour && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/95 backdrop-blur-sm p-4"
          onClick={() => setShowTour(false)}
        >
          <div 
            className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTour(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-forest-900/80 text-white hover:bg-forest-800 transition-colors flex items-center justify-center"
            >
              <span className="sr-only">Close</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="https://tours.virtourmedia.com/tours/NE_c0G0hY?mls=1%3F&sceneId=PpBjEMKDu"
              className="w-full h-full border-0"
              allow="accelerometer; gyroscope; vr; fullscreen"
              title="Virtual Property Tour"
            />
          </div>
        </div>
      )}
    </>
  );
}
