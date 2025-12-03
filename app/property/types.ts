export interface PropertyConfiguration {
  id: string;
  name: string;
  shortName: string;
  price: number;
  priceFormatted: string;
  totalAcres: number;
  farmableAcres: number;
  parcelCount: number;
  buyerProfile: string;
  headline: string;
  description: string;
  parcels: Parcel[];
  features: Feature[];
  infrastructure: Infrastructure;
  overlayImage: string;
}

export interface Parcel {
  apn: string;
  acres: number;
  farmableAcres: number;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Infrastructure {
  wells: number;
  wellInvestment?: string;
  buildings: Building[];
  housing: Housing[];
  facilities: Facility[];
}

export interface Building {
  name: string;
  squareFeet: number;
  description: string;
}

export interface Housing {
  type: string;
  units: number;
  description: string;
}

export interface Facility {
  name: string;
  description: string;
}

export interface UserPreference {
  id?: string;
  session_id: string;
  rental_rate: number;
  created_at?: string;
  updated_at?: string;
}
