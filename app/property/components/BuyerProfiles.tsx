import { Building2, Tractor, Home, Users, ArrowRight } from 'lucide-react';

const buyerProfiles = [
  {
    id: 'full-estate',
    icon: Building2,
    title: 'Institutional Investors',
    configuration: 'Full Estate',
    investment: '$15.6M',
    description: 'Complete 612-acre portfolio offering turnkey operations, comprehensive infrastructure, and maximum scale. Ideal for institutional capital seeking flagship agricultural assets with proven income streams.',
    advantages: [
      'Largest contiguous holding with full control',
      'Complete infrastructure minimizes additional capital needs',
      'Established tenant relationship provides immediate income',
      'H-2A housing supports seasonal labor programs',
      'Diversification across multiple parcels'
    ],
    highlight: true,
  },
  {
    id: 'apache-ranch',
    icon: Tractor,
    title: 'Agricultural Investors',
    configuration: 'Apache Ranch Only',
    investment: '$8.8M',
    description: '320-acre pure production parcel focused on farmland value and agricultural returns. Perfect for investors prioritizing acreage and water rights without operational complexity.',
    advantages: [
      '280 farmable acres with excellent water rights',
      'Lower entry point for farmland investment',
      'Flexibility to lease or self-operate',
      'Prime soil quality for high-value crops',
      'Recent well infrastructure investment included'
    ],
    highlight: false,
  },
  {
    id: 'home-ranch',
    icon: Home,
    title: 'Owner-Operators',
    configuration: 'Home Ranch Only',
    investment: '$6.2M',
    description: '160-acre ranch combining productive farmland with complete facilities including packing operations and residence. Ideal for hands-on operators seeking a manageable, self-contained operation.',
    advantages: [
      'Turnkey operation with packing facility',
      'On-site manager residence included',
      'Right-sized for owner-operator management',
      'Complete infrastructure for direct marketing',
      'Maintenance shop supports equipment needs'
    ],
    highlight: false,
  },
  {
    id: 'operations-housing',
    icon: Users,
    title: 'Agricultural Operators',
    configuration: 'Operations & Housing',
    investment: '$5.5M',
    description: '132-acre strategic package emphasizing labor housing and equipment infrastructure. Perfect for operators who need H-2A housing capacity and support facilities.',
    advantages: [
      '48 units of certified H-2A worker housing',
      'Lowest entry price point',
      'Essential infrastructure for labor-intensive operations',
      '8,000 sq ft equipment storage',
      'Immediate housing solution for seasonal programs'
    ],
    highlight: false,
  }
];

export default function BuyerProfiles() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900/40 to-forest-950" />
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge-gold mb-4 inline-block">Investment Strategies</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-4">
            Configuration Options
          </h2>
          <p className="text-lg text-forest-300 max-w-3xl mx-auto">
            Each configuration is designed to match specific buyer profiles and investment objectives
          </p>
        </div>

        {/* Profiles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {buyerProfiles.map((profile) => (
            <div
              key={profile.id}
              className={`card card-hover p-8 relative overflow-hidden transition-all duration-300 ${
                profile.highlight ? 'ring-2 ring-gold-500/30' : ''
              }`}
            >
              {/* Highlight badge */}
              {profile.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="badge-gold text-xs">Most Popular</span>
                </div>
              )}

              {/* Icon and header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                  profile.highlight 
                    ? 'bg-gold-500/20' 
                    : 'bg-forest-700/50'
                }`}>
                  <profile.icon className={`w-7 h-7 ${
                    profile.highlight ? 'text-gold-400' : 'text-forest-300'
                  }`} />
                </div>
                <div>
                  <h3 className="text-2xl font-display text-white mb-1">
                    {profile.title}
                  </h3>
                  <p className="text-gold-400 font-medium">
                    {profile.configuration} <span className="text-forest-500">•</span> {profile.investment}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-forest-200 leading-relaxed mb-6">
                {profile.description}
              </p>

              {/* Advantages */}
              <div>
                <h4 className="text-sm font-semibold text-forest-400 uppercase tracking-wider mb-3">
                  Key Advantages
                </h4>
                <ul className="space-y-2">
                  {profile.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-forest-300">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
