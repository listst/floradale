import { PropertyConfiguration } from './types';

export const propertyConfigurations: PropertyConfiguration[] = [
  {
    id: 'full-estate',
    name: 'Full Estate',
    shortName: 'Full Estate',
    price: 15600000,
    priceFormatted: '$15.6M',
    totalAcres: 406.7,
    farmableAcres: 195,
    parcelCount: 5,
    buyerProfile: 'Institutional Investors',
    headline: 'Premier 406.7-Acre Agricultural Estate in Santa Barbara County',
    description: 'The complete property offering includes all five parcels with comprehensive infrastructure, extensive water rights, and turnkey operations. Ideal for institutional investors seeking a flagship agricultural asset in one of California\'s most productive farming regions.',
    overlayImage: '/overlays/full-estate.png',
    parcels: [
      { apn: '093-111-004', acres: 151.96, farmableAcres: 60, description: 'Apache Ranch - Primary production parcel' },
      { apn: '093-111-005', acres: 177.06, farmableAcres: 65, description: 'Apache Ranch - Secondary production parcel' },
      { apn: '093-070-053', acres: 0.55, farmableAcres: 0, description: 'Home Ranch - Support parcel' },
      { apn: '093-070-055', acres: 38.98, farmableAcres: 40, description: 'Home Ranch - Includes main facilities' },
      { apn: '093-070-058', acres: 38.16, farmableAcres: 30, description: 'Home Ranch - Operations area' }
    ],
    features: [
      { icon: 'Droplets', title: '7 Agricultural Wells', description: '$350K recent investment in well infrastructure' },
      { icon: 'Home', title: 'H-2A Housing', description: 'Certified housing for up to 100 workers' },
      { icon: 'Warehouse', title: 'Packing Facility', description: '8,500± sq ft refrigerated warehouse with 3 loading bays' },
      { icon: 'Truck', title: 'Equipment Storage', description: '8,000 sq ft covered equipment storage' },
      { icon: 'Building', title: 'Manager Residence', description: '2,400 sq ft single-family home' },
      { icon: 'Wrench', title: 'Maintenance Shop', description: 'Full-service shop with 4 roll-up doors' }
    ],
    infrastructure: {
      wells: 7,
      wellInvestment: '$350,000',
      buildings: [
        { name: 'Packing Facility', squareFeet: 8500, description: '8,500± sq ft refrigerated warehouse area with 3 loading bays' },
        { name: 'Equipment Storage', squareFeet: 8000, description: 'Covered storage for tractors and implements' },
        { name: 'Maintenance Shop', squareFeet: 3000, description: 'Full-service repair facility with 4 roll-up doors' }
      ],
      housing: [
        { type: 'H-2A Worker Housing', units: 100, description: 'Certified housing for up to 100 workers with heated communal dining and laundry facilities' },
        { type: 'Manager Residence', units: 1, description: '2,400 sq ft single-family home with modern amenities' }
      ],
      facilities: [
        { name: 'Irrigation System', description: 'Complete drip and overhead irrigation infrastructure' },
        { name: 'Road Network', description: 'All-weather access roads throughout property' },
        { name: 'Truck Scale', description: 'On-site truck scale for weighing operations' },
        { name: 'Drinking Water System', description: 'Recently upgraded system ($100,000 investment)' }
      ]
    }
  },
  {
    id: 'apache-ranch',
    name: 'Apache Ranch Only',
    shortName: 'Apache Ranch',
    price: 8800000,
    priceFormatted: '$8.8M',
    totalAcres: 329.02,
    farmableAcres: 125,
    parcelCount: 2,
    buyerProfile: 'Agricultural Investors',
    headline: '329-Acre Premium Production Ranch',
    description: 'The Apache Ranch parcel represents the heart of the estate\'s production capacity. With 125 farmable acres and excellent water rights, this property is perfect for investors focused on pure agricultural production without operational facilities.',
    overlayImage: '/overlays/apache-ranch.png',
    parcels: [
      { apn: '093-111-004', acres: 151.96, farmableAcres: 60, description: 'Apache Ranch - Primary production parcel' },
      { apn: '093-111-005', acres: 177.06, farmableAcres: 65, description: 'Apache Ranch - Secondary production parcel with excellent water' }
    ],
    features: [
      { icon: 'Droplets', title: '4 Agricultural Wells', description: 'Dedicated water rights and recent infrastructure upgrades' },
      { icon: 'Sprout', title: '125 Farmable Acres', description: 'Prime soil conditions for high-value vegetable production' },
      { icon: 'Sun', title: '259 Frost-Free Days', description: 'Extended growing season for maximum productivity' },
      { icon: 'TrendingUp', title: 'Current Tenant', description: 'Established relationship with major vegetable grower' }
    ],
    infrastructure: {
      wells: 4,
      wellInvestment: '$200,000',
      buildings: [],
      housing: [],
      facilities: [
        { name: 'Irrigation System', description: 'Complete drip irrigation throughout farmable acres' },
        { name: 'Field Access Roads', description: 'All-weather roads for equipment and harvest operations' }
      ]
    }
  },
  {
    id: 'home-ranch',
    name: 'Home Ranch Only',
    shortName: 'Home Ranch',
    price: 6200000,
    priceFormatted: '$6.2M',
    totalAcres: 77.69,
    farmableAcres: 70,
    parcelCount: 3,
    buyerProfile: 'Owner-Operators',
    headline: '77.69-Acre Ranch with Comprehensive Facilities',
    description: 'The Home Ranch parcel combines productive farmland with key operational infrastructure including the packing facility and manager residence. Ideal for owner-operators seeking a complete, manageable agricultural operation.',
    overlayImage: '/overlays/home-ranch.png',
    parcels: [
      { apn: '093-070-053', acres: 0.55, farmableAcres: 0, description: 'Home Ranch - Support parcel' },
      { apn: '093-070-055', acres: 38.98, farmableAcres: 40, description: 'Home Ranch with main facilities and residence' },
      { apn: '093-070-058', acres: 38.16, farmableAcres: 30, description: 'Home Ranch - Operations area' }
    ],
    features: [
      { icon: 'Droplets', title: '2 Agricultural Wells', description: 'Reliable water supply for 70 farmable acres' },
      { icon: 'Warehouse', title: 'Packing Facility', description: '8,500± sq ft refrigerated warehouse with 3 loading bays' },
      { icon: 'Home', title: 'Manager Residence', description: '2,400 sq ft home with modern amenities' },
      { icon: 'Wrench', title: 'Maintenance Shop', description: 'Full-service shop with 4 roll-up doors' }
    ],
    infrastructure: {
      wells: 2,
      wellInvestment: '$100,000',
      buildings: [
        { name: 'Packing Facility', squareFeet: 8500, description: '8,500± sq ft refrigerated warehouse area with 3 loading bays' },
        { name: 'Maintenance Shop', squareFeet: 3000, description: 'Full-service repair facility with 4 roll-up doors' }
      ],
      housing: [
        { type: 'Manager Residence', units: 1, description: '2,400 sq ft single-family home' }
      ],
      facilities: [
        { name: 'Irrigation System', description: 'Complete irrigation infrastructure' },
        { name: 'Equipment Parking', description: 'Paved areas for equipment storage' }
      ]
    }
  },
  {
    id: 'operations-housing',
    name: 'Operations & Housing',
    shortName: 'Operations',
    price: 5500000,
    priceFormatted: '$5.5M',
    totalAcres: 30,
    farmableAcres: 15,
    parcelCount: 2,
    buyerProfile: 'Agricultural Operators',
    headline: '30-Acre Operations Center with H-2A Housing',
    description: 'This strategic combination includes productive farmland, equipment storage, and H-2A certified worker housing for up to 100 workers. Perfect for operators who need housing infrastructure for seasonal labor programs.',
    overlayImage: '/overlays/operations-housing.png',
    parcels: [
      { apn: '093-070-055', acres: 15, farmableAcres: 10, description: 'Operations center with equipment storage' },
      { apn: '093-070-058', acres: 15, farmableAcres: 5, description: 'H-2A housing complex' }
    ],
    features: [
      { icon: 'Droplets', title: '1 Agricultural Well', description: 'Adequate water supply for 15 farmable acres' },
      { icon: 'Home', title: 'H-2A Housing', description: 'Certified housing for up to 100 workers' },
      { icon: 'Truck', title: 'Equipment Storage', description: '8,000 sq ft covered storage facility' },
      { icon: 'Users', title: 'Labor Ready', description: 'Turnkey housing for H-2A visa program' }
    ],
    infrastructure: {
      wells: 1,
      buildings: [
        { name: 'Equipment Storage', squareFeet: 8000, description: 'Covered storage for agricultural equipment' }
      ],
      housing: [
        { type: 'H-2A Worker Housing', units: 100, description: 'Certified housing for up to 100 workers with heated communal dining and laundry facilities' }
      ],
      facilities: [
        { name: 'Irrigation System', description: 'Drip irrigation for farmable acres' },
        { name: 'Common Areas', description: 'Recreation and gathering spaces for workers' }
      ]
    }
  }
];
