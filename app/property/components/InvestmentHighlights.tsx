import { PropertyConfiguration } from '../types';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface InvestmentHighlightsProps {
  config: PropertyConfiguration;
}

export default function InvestmentHighlights({ config }: InvestmentHighlightsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-stone-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-3">Key Features</h2>
        <p className="text-lg text-stone-600">
          Premium agricultural infrastructure and amenities
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.features.map((feature) => {
          const IconComponent = (Icons as any)[feature.icon] as LucideIcon;
          return (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg shrink-0">
                  {IconComponent && <IconComponent className="w-6 h-6 text-amber-700" />}
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
