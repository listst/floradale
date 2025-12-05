'use client';

import { useState, useRef } from 'react';
import { individualParcels } from './parcels';
import HeroSection from './components/HeroSection';
import AerialMap from './components/AerialMap';
import ParcelSelector from './components/ParcelSelector';
import PropertyDetails from './components/PropertyDetails';
import RentalCalculator from './components/RentalCalculator';
import MarketContext from './components/MarketContext';
import BuyerProfiles from './components/BuyerProfiles';
import ContactSection from './components/ContactSection';
import AnimatedSection from './components/AnimatedSection';

export default function PropertyPage() {
  // Default all parcels to selected
  const [selectedParcels, setSelectedParcels] = useState<string[]>(
    () => individualParcels.map((p) => p.id)
  );
  const mapSectionRef = useRef<HTMLDivElement>(null);

  const handleToggleParcel = (parcelId: string) => {
    setSelectedParcels((prev) =>
      prev.includes(parcelId)
        ? prev.filter((id) => id !== parcelId)
        : [...prev, parcelId]
    );
  };

  const handleScrollToMap = () => {
    mapSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedOverlays = individualParcels
    .filter((parcel) => selectedParcels.includes(parcel.id))
    .map((parcel) => parcel.overlayImage);

  const totalAcres = individualParcels
    .filter((p) => selectedParcels.includes(p.id))
    .reduce((sum, p) => sum + p.acres, 0);

  const totalFarmableAcres = individualParcels
    .filter((p) => selectedParcels.includes(p.id))
    .reduce((sum, p) => sum + p.farmableAcres, 0);

  return (
    <div className="min-h-screen bg-forest-950">
      {/* Hero Section */}
      <HeroSection onScrollToMap={handleScrollToMap} />

      {/* Interactive Map Section */}
      <section 
        ref={mapSectionRef}
        id="explore"
        className="relative py-20 section-gradient"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-4">
              Build Your <span className="text-gradient">Custom Portfolio</span>
            </h2>
            <p className="text-lg text-forest-300 max-w-2xl mx-auto">
              Select individual parcels to create a configuration that matches your investment goals
            </p>
          </AnimatedSection>

          {/* Map - Full width */}
          <AnimatedSection delay={100}>
            <div className="card overflow-hidden mb-8">
              <AerialMap 
                selectedOverlays={selectedOverlays} 
                hasSelection={selectedParcels.length > 0}
              />
            </div>
          </AnimatedSection>

          {/* Parcel Selector - Below map */}
          <AnimatedSection delay={200}>
            <ParcelSelector
              parcels={individualParcels}
              selectedParcels={selectedParcels}
              onToggle={handleToggleParcel}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Rental Calculator - shows when parcels selected */}
      {selectedParcels.length > 0 && (
        <AnimatedSection>
          <RentalCalculator
            farmableAcres={totalFarmableAcres}
            configName="Selected Parcels"
          />
        </AnimatedSection>
      )}

      {/* Property Details - shows when parcels selected */}
      {selectedParcels.length > 0 && (
        <AnimatedSection>
          <PropertyDetails
            config={{
              id: 'custom',
              name: 'Custom Selection',
              shortName: 'Selected Parcels',
              price: 0,
              priceFormatted: 'Contact for Pricing',
              totalAcres,
              farmableAcres: totalFarmableAcres,
              parcelCount: selectedParcels.length,
              buyerProfile: '',
              headline: '',
              description: '',
              overlayImage: '',
              parcels: individualParcels
                .filter((p) => selectedParcels.includes(p.id))
                .map((p) => ({
                  apn: p.id,
                  acres: p.acres,
                  farmableAcres: p.farmableAcres,
                  description: p.name,
                })),
              features: [],
              infrastructure: {
                wells: 0,
                buildings: [],
                housing: [],
                facilities: [],
              },
            }}
          />
        </AnimatedSection>
      )}

      {/* Market Context */}
      <AnimatedSection>
        <MarketContext />
      </AnimatedSection>

      {/* Buyer Profiles */}
      <AnimatedSection>
        <BuyerProfiles />
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <ContactSection configName={selectedParcels.length > 0 ? 'Selected Parcels' : 'Full Estate'} />
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-forest-950 border-t border-forest-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl text-white mb-1">
                Lompoc Valley Agricultural Estate
              </h3>
              <p className="text-sm text-forest-400">
                Santa Barbara County, California
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-forest-500 max-w-md">
                Information deemed reliable but not guaranteed. All measurements and calculations 
                are approximate. Verify all details independently before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
