'use client';

import { PropertyConfiguration } from '../types';

interface ConfigurationSelectorProps {
  configurations: PropertyConfiguration[];
  activeConfig: string;
  onSelect: (id: string) => void;
}

export default function ConfigurationSelector({
  configurations,
  activeConfig,
  onSelect,
}: ConfigurationSelectorProps) {
  return (
    <div className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {configurations.map((config) => (
            <button
              key={config.id}
              onClick={() => onSelect(config.id)}
              className={`
                text-left p-4 rounded-lg border-2 transition-all duration-200
                ${
                  activeConfig === config.id
                    ? 'border-amber-500 bg-amber-50 shadow-md scale-[1.02]'
                    : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow'
                }
              `}
            >
              <div className="flex flex-col gap-1">
                <h3
                  className={`font-semibold text-sm sm:text-base ${
                    activeConfig === config.id ? 'text-amber-900' : 'text-stone-900'
                  }`}
                >
                  {config.shortName}
                </h3>
                <p className="text-lg font-bold text-stone-900">
                  {config.priceFormatted}
                </p>
                <p className="text-xs text-stone-600">
                  {config.totalAcres} acres • {config.parcelCount}{' '}
                  {config.parcelCount === 1 ? 'parcel' : 'parcels'}
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  {config.buyerProfile}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
