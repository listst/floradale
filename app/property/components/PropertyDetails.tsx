import { PropertyConfiguration } from '../types';
import { FileText, Droplets, Building, Home, Wrench } from 'lucide-react';

interface PropertyDetailsProps {
  config: PropertyConfiguration;
}

export default function PropertyDetails({ config }: PropertyDetailsProps) {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
            <FileText className="w-6 h-6 text-gold-400" />
          </div>
          <div>
            <h2 className="text-3xl font-display text-white">Property Details</h2>
            <p className="text-forest-400">Detailed breakdown of your selection</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Parcel Breakdown */}
          <div className="card p-8">
            <h3 className="text-xl font-display text-white mb-6">Parcel Breakdown</h3>
            <div className="space-y-4">
              {config.parcels.map((parcel, index) => (
                <div 
                  key={parcel.apn} 
                  className="pb-4 border-b border-forest-700/50 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-white">Parcel {index + 1}</p>
                      <p className="text-sm text-forest-400">APN: {parcel.apn}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-white">{parcel.acres} acres</p>
                      <p className="text-sm text-gold-400">{parcel.farmableAcres} farmable</p>
                    </div>
                  </div>
                  <p className="text-sm text-forest-300">{parcel.description}</p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-6 pt-6 border-t-2 border-forest-600/50">
              <div className="flex justify-between items-center">
                <span className="font-display text-lg text-white">Total</span>
                <div className="text-right">
                  <p className="font-display text-2xl text-white">{config.totalAcres} acres</p>
                  <p className="text-gold-400">{config.farmableAcres} farmable</p>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="card p-8">
            <h3 className="text-xl font-display text-white mb-6">Infrastructure</h3>

            {config.infrastructure.wells > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="w-5 h-5 text-gold-400" />
                  <h4 className="font-semibold text-white">Water Supply</h4>
                </div>
                <p className="text-forest-200">
                  {config.infrastructure.wells} agricultural{' '}
                  {config.infrastructure.wells === 1 ? 'well' : 'wells'}
                  {config.infrastructure.wellInvestment && (
                    <span className="text-gold-400 font-medium">
                      {' '}(Recent {config.infrastructure.wellInvestment} investment)
                    </span>
                  )}
                </p>
              </div>
            )}

            {config.infrastructure.buildings.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-5 h-5 text-gold-400" />
                  <h4 className="font-semibold text-white">Buildings</h4>
                </div>
                <div className="space-y-3">
                  {config.infrastructure.buildings.map((building) => (
                    <div key={building.name} className="pl-8">
                      <p className="text-white">
                        <span className="font-medium">{building.name}</span>
                        <span className="text-forest-400">
                          {' '}— {building.squareFeet.toLocaleString()} sq ft
                        </span>
                      </p>
                      <p className="text-sm text-forest-400">{building.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {config.infrastructure.housing.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-5 h-5 text-gold-400" />
                  <h4 className="font-semibold text-white">Housing</h4>
                </div>
                <div className="space-y-3">
                  {config.infrastructure.housing.map((housing) => (
                    <div key={housing.type} className="pl-8">
                      <p className="text-white">
                        <span className="font-medium">{housing.type}</span>
                        <span className="text-forest-400">
                          {' '}— {housing.units} {housing.units === 1 ? 'unit' : 'units'}
                        </span>
                      </p>
                      <p className="text-sm text-forest-400">{housing.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {config.infrastructure.facilities.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="w-5 h-5 text-gold-400" />
                  <h4 className="font-semibold text-white">Additional Facilities</h4>
                </div>
                <div className="space-y-3">
                  {config.infrastructure.facilities.map((facility) => (
                    <div key={facility.name} className="pl-8">
                      <p className="font-medium text-white">{facility.name}</p>
                      <p className="text-sm text-forest-400">{facility.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state for custom selection */}
            {config.infrastructure.wells === 0 && 
             config.infrastructure.buildings.length === 0 && 
             config.infrastructure.housing.length === 0 && 
             config.infrastructure.facilities.length === 0 && (
              <div className="text-center py-8">
                <p className="text-forest-400">
                  Infrastructure details vary by parcel.<br />
                  Contact us for specific information about your selection.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Zoning info */}
        <div className="mt-8 card p-8 border-l-4 border-l-gold-500">
          <h3 className="font-display text-lg text-white mb-3">Zoning & Permitted Uses</h3>
          <p className="text-forest-200 mb-2">
            <span className="text-gold-400 font-medium">Zoning:</span> AG-II-40 (Agricultural)
          </p>
          <p className="text-forest-300 leading-relaxed">
            Under Santa Barbara County's New Agricultural Enterprise Ordinance, permitted uses include
            traditional row crops, vineyards, orchards, nurseries, agritourism activities, farm stands,
            and agricultural processing facilities. The property's current tenant successfully operates
            large-scale vegetable production, demonstrating the site's productivity and operational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
