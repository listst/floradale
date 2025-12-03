import { BarChart3, Sun, Award, Leaf } from 'lucide-react';

export default function MarketContext() {
  return (
    <section className="py-20 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-gold-500/5 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-forest-500/10 via-transparent to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge-forest mb-4 inline-block">Regional Advantages</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-4">
            Lompoc Valley <span className="text-gradient">Agricultural Advantages</span>
          </h2>
          <p className="text-lg text-forest-300 max-w-3xl mx-auto">
            Located in one of California's most productive agricultural regions with exceptional
            growing conditions and market access
          </p>
        </div>

        {/* Primary cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Robust Agricultural Economy */}
          <div className="card card-hover p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gold-500/20 flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-display text-white">
                  Robust Agricultural Economy
                </h3>
              </div>
              <p className="text-forest-200 leading-relaxed mb-4">
                Santa Barbara County generates <span className="text-gold-400 font-semibold">$2.01 billion</span> in annual agricultural
                production value, ranking among California's top agricultural counties. The region's
                diverse crop production and established supply chains provide stable market access.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-forest">Top 10 CA County</span>
                <span className="badge-forest">Diverse Crops</span>
                <span className="badge-forest">Strong Markets</span>
              </div>
            </div>
          </div>

          {/* Extended Growing Season */}
          <div className="card card-hover p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gold-500/20 flex items-center justify-center">
                  <Sun className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-display text-white">
                  Extended Growing Season
                </h3>
              </div>
              <p className="text-forest-200 leading-relaxed mb-4">
                With an average of <span className="text-gold-400 font-semibold">259 frost-free days</span> annually, the Lompoc Valley
                offers one of California's longest growing seasons. The moderate coastal climate allows
                for multiple crop cycles and premium quality production year-round.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-forest">259 Frost-Free Days</span>
                <span className="badge-forest">Coastal Climate</span>
                <span className="badge-forest">Year-Round</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Proven Production */}
          <div className="card card-hover p-6 flex items-start gap-5">
            <div className="w-12 h-12 rounded-lg bg-forest-700/50 flex items-center justify-center shrink-0">
              <Leaf className="w-6 h-6 text-forest-300" />
            </div>
            <div>
              <h3 className="text-xl font-display text-white mb-2">
                Proven Production Success
              </h3>
              <p className="text-forest-300 leading-relaxed text-sm">
                Currently leased to major vegetable growers with established operations, demonstrating
                the property's productivity and market viability. The existing tenant relationship
                provides continuity and proven income potential for new ownership.
              </p>
            </div>
          </div>

          {/* Expanding Opportunities */}
          <div className="card card-hover p-6 flex items-start gap-5">
            <div className="w-12 h-12 rounded-lg bg-forest-700/50 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-forest-300" />
            </div>
            <div>
              <h3 className="text-xl font-display text-white mb-2">
                Expanding Opportunities
              </h3>
              <p className="text-forest-300 leading-relaxed text-sm">
                Santa Barbara County's New Agricultural Enterprise Ordinance expands permitted uses
                beyond traditional farming, allowing agritourism, farm-to-table operations, and
                agricultural processing. Adjacent to the prestigious Sta. Rita Hills AVA wine region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
