import { Parcel } from './components/ParcelSelector';

export const individualParcels: Parcel[] = [
  {
    id: '093-111-004',
    name: '093-111-004',
    acres: 151.96,
    farmableAcres: 60,
    overlayImage: '/overlays/004.png',
    color: '#ef4444',
    // Center coordinates as percentages (0-100) in the rotated/displayed landscape view
    centerX: 70,
    centerY: 45
  },
  {
    id: '093-111-005',
    name: '093-111-005',
    acres: 177.06,
    farmableAcres: 65,
    overlayImage: '/overlays/005.png',
    color: '#3b82f6',
    centerX: 78,
    centerY: 30
  },
  {
    id: '093-070-053',
    name: '093-070-053',
    acres: 0.55,
    farmableAcres: 0,
    overlayImage: '/overlays/053.png',
    color: '#22c55e',
    centerX: 10,
    centerY: 27
  },
  {
    id: '093-070-055',
    name: '093-070-055',
    acres: 38.98,
    farmableAcres: 39,
    overlayImage: '/overlays/055.png',
    color: '#f59e0b',
    centerX: 8,
    centerY: 42
  },
  {
    id: '093-070-058',
    name: '093-070-058',
    acres: 38.16,
    farmableAcres: 31,
    overlayImage: '/overlays/058.png',
    color: '#8b5cf6',
    centerX: 17,
    centerY: 42
  }
];
