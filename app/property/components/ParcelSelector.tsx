'use client';

import { Check, Layers, Mountain, Home } from 'lucide-react';

export interface Parcel {
  id: string;
  name: string;
  acres: number;
  farmableAcres: number;
  overlayImage: string;
  color: string;
}

interface ParcelSelectorProps {
  parcels: Parcel[];
  selectedParcels: string[];
  onToggle: (parcelId: string) => void;
}

// Define parcel groups
const parcelGroups = [
  {
    id: 'apache-ranch',
    name: 'Apache Ranch',
    icon: Mountain,
    parcelIds: ['093-111-004', '093-111-005'],
  },
  {
    id: 'home-ranch',
    name: 'Home Ranch',
    icon: Home,
    parcelIds: ['093-070-053', '093-070-055', '093-070-058'],
  },
];

export default function ParcelSelector({ parcels, selectedParcels, onToggle }: ParcelSelectorProps) {
  const totalAcres = parcels
    .filter(p => selectedParcels.includes(p.id))
    .reduce((sum, p) => sum + p.acres, 0);

  const totalFarmableAcres = parcels
    .filter(p => selectedParcels.includes(p.id))
    .reduce((sum, p) => sum + p.farmableAcres, 0);

  const selectGroupParcels = (parcelIds: string[]) => {
    parcelIds.forEach(id => {
      if (!selectedParcels.includes(id)) {
        onToggle(id);
      }
    });
  };

  const clearGroupParcels = (parcelIds: string[]) => {
    parcelIds.forEach(id => {
      if (selectedParcels.includes(id)) {
        onToggle(id);
      }
    });
  };

  const isGroupFullySelected = (parcelIds: string[]) => 
    parcelIds.every(id => selectedParcels.includes(id));

  const isGroupPartiallySelected = (parcelIds: string[]) => 
    parcelIds.some(id => selectedParcels.includes(id)) && !isGroupFullySelected(parcelIds);

  return (
    <div className="card p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center">
            <Layers className="w-4 h-4 text-gold-400" />
          </div>
          <div>
            <h3 className="font-display text-base text-white">Select Parcels</h3>
          </div>
        </div>

        {/* Global actions */}
        <div className="flex gap-2">
          <button
            onClick={() => parcels.forEach(p => !selectedParcels.includes(p.id) && onToggle(p.id))}
            className="text-xs text-gold-400 hover:text-gold-300 py-1 px-2 rounded-lg border border-forest-700 hover:border-forest-600 transition-colors"
          >
            Select All
          </button>
          <button
            onClick={() => selectedParcels.forEach(id => onToggle(id))}
            className="text-xs text-forest-400 hover:text-forest-300 py-1 px-2 rounded-lg border border-forest-700 hover:border-forest-600 transition-colors"
            disabled={selectedParcels.length === 0}
          >
            Clear
          </button>
        </div>
      </div>

      {/* 3-column layout: Apache Ranch | Home Ranch | Summary */}
      <div className="grid md:grid-cols-3 gap-4">
        {parcelGroups.map((group) => {
          const groupParcels = parcels.filter(p => group.parcelIds.includes(p.id));
          const isFullySelected = isGroupFullySelected(group.parcelIds);
          const isPartiallySelected = isGroupPartiallySelected(group.parcelIds);
          const GroupIcon = group.icon;

          return (
            <div key={group.id} className="bg-forest-800/30 rounded-xl p-3 border border-forest-700/50">
              {/* Group header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GroupIcon className="w-4 h-4 text-gold-400" />
                  <h4 className="font-display text-sm text-white">{group.name}</h4>
                </div>
                <button
                  onClick={() => isFullySelected 
                    ? clearGroupParcels(group.parcelIds) 
                    : selectGroupParcels(group.parcelIds)
                  }
                  className={`text-xs py-0.5 px-1.5 rounded transition-colors ${
                    isFullySelected
                      ? 'text-forest-400 hover:text-forest-300'
                      : 'text-gold-400 hover:text-gold-300'
                  }`}
                >
                  {isFullySelected ? 'Clear' : isPartiallySelected ? 'Select Rest' : 'Select All'}
                </button>
              </div>

              {/* Parcels in group - single line each */}
              <div className="space-y-1.5">
                {groupParcels.map((parcel) => {
                  const isSelected = selectedParcels.includes(parcel.id);
                  return (
                    <button
                      key={parcel.id}
                      onClick={() => onToggle(parcel.id)}
                      className={`w-full text-left p-2 rounded-lg border transition-all duration-200 group ${
                        isSelected
                          ? 'border-gold-500/50 bg-gold-500/10'
                          : 'border-forest-700/50 bg-forest-800/30 hover:border-forest-600 hover:bg-forest-800/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          {/* Color indicator */}
                          <div
                            className={`w-2.5 h-2.5 rounded-full ring-2 ring-offset-1 ring-offset-forest-900 transition-all flex-shrink-0 ${
                              isSelected ? 'ring-current' : 'ring-transparent'
                            }`}
                            style={{ 
                              backgroundColor: parcel.color,
                              color: parcel.color
                            }}
                          />
                          {/* Parcel info - single line */}
                          <span className="text-xs text-white font-medium truncate">{parcel.name}</span>
                          <span className="text-xs text-forest-400 whitespace-nowrap">
                            {parcel.acres} acres / {parcel.farmableAcres} farmable
                          </span>
                        </div>
                        
                        {/* Checkbox */}
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                            isSelected
                              ? 'bg-gold-500 border-gold-500'
                              : 'border border-forest-600 group-hover:border-forest-500'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-forest-950" strokeWidth={3} />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Summary column */}
        <div className="bg-forest-800/30 rounded-xl p-4 border border-forest-700/50 flex flex-col justify-between">
          <div className="text-center pb-3 border-b border-forest-700/50">
            <span className="text-forest-400 text-xs uppercase tracking-wider block mb-1">Total Acres</span>
            <span className="text-3xl font-display text-white">{totalAcres ? totalAcres.toFixed(2) : '—'}</span>
          </div>
          <div className="text-center py-3 border-b border-forest-700/50">
            <span className="text-forest-400 text-xs uppercase tracking-wider block mb-1">Farmable Acres</span>
            <span className="text-3xl font-display text-gold-400">{totalFarmableAcres || '—'}</span>
          </div>
          <div className="text-center pt-3">
            <span className="text-forest-400 text-xs uppercase tracking-wider block mb-1">Parcels Selected</span>
            <span className="text-3xl font-display text-white">
              {selectedParcels.length > 0 ? `${selectedParcels.length} of ${parcels.length}` : '—'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
