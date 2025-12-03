'use client';

import { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';
import { saveRentalRate, loadRentalRate } from '@/lib/supabase';

interface RentalCalculatorProps {
  farmableAcres: number;
  configName: string;
}

export default function RentalCalculator({ farmableAcres, configName }: RentalCalculatorProps) {
  const [rentalRate, setRentalRate] = useState(3000);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadRentalRate().then((rate) => {
      if (rate) setRentalRate(rate);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        saveRentalRate(rentalRate);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [rentalRate, isLoading]);

  const annualIncome = farmableAcres * rentalRate;

  return (
    <section className="py-20 bg-forest-900/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-gold-500/10 via-transparent to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="card p-8 md:p-10 border-2 border-gold-500/20 glow-gold">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gold-500/20 flex items-center justify-center">
              <Calculator className="w-7 h-7 text-gold-400" />
            </div>
            <div>
              <h2 className="text-2xl font-display text-white">
                Rental Income Calculator
              </h2>
              <p className="text-forest-400">
                Estimate potential annual income for {configName}
              </p>
            </div>
          </div>

          {/* Calculator grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Input */}
            <div>
              <label className="block text-sm font-medium text-forest-300 mb-3">
                Rental Rate per Acre (Annual)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-forest-500" />
                <input
                  type="number"
                  value={rentalRate}
                  onChange={(e) => setRentalRate(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-4 text-xl font-semibold bg-forest-800/50 border-2 border-forest-700 rounded-xl text-white placeholder-forest-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
                  min="0"
                  step="100"
                />
              </div>
              <p className="text-sm text-forest-500 mt-3">
                Central Coast market rates typically range from $2,500–$3,500 per acre
              </p>
            </div>

            {/* Output */}
            <div className="card p-6 bg-forest-800/50 border-forest-700">
              <div className="flex items-center gap-2 text-forest-400 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Projected Annual Income</span>
              </div>
              <p className="text-4xl md:text-5xl font-display text-gold-400 mb-3">
                ${annualIncome.toLocaleString()}
              </p>
              <p className="text-sm text-forest-400">
                Based on {farmableAcres} farmable acres × ${rentalRate.toLocaleString()}/acre
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-forest-800/30 rounded-lg border border-forest-700/50">
            <p className="text-xs text-forest-500 leading-relaxed">
              <strong className="text-forest-400">Disclaimer:</strong> This calculator provides estimates only. Actual rental income may vary based on crop type,
              lease terms, market conditions, water availability, and other factors. Current tenant relationships and historical
              performance may provide additional context for income expectations. Consult with agricultural professionals for
              detailed income projections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
