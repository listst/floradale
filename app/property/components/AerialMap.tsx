'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Map, Maximize2 } from 'lucide-react';
import MapViewer from './MapViewer';
import { Parcel } from './ParcelSelector';

interface AerialMapProps {
  selectedOverlays: string[];
  hasSelection: boolean;
  selectedParcels: Parcel[];
}

export default function AerialMap({ selectedOverlays, hasSelection, selectedParcels }: AerialMapProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  // Source image: 519x1280 (portrait)
  // After 90° rotation: 1280x519 (landscape)
  // Aspect ratio: 1280/519 ≈ 2.466
  
  return (
    <>
      <div 
        className="relative w-full overflow-hidden bg-forest-900/50 cursor-pointer group"
        onClick={() => setIsViewerOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsViewerOpen(true);
          }
        }}
        aria-label="Open fullscreen map viewer"
      >
        {/* Container with exact aspect ratio of rotated image (1280:519) */}
        <div className="relative w-full" style={{ aspectRatio: '1280 / 519' }}>
          {/* 
            Image wrapper sized as portrait, then rotated to fill landscape container.
            Pre-rotation: width = 519/1280 of container width, height = 1280/519 of container height
          */}
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: '40.55%',    /* 519/1280 = 0.4055 */
              height: '246.63%', /* 1280/519 = 2.4663 */
              transform: 'translate(-50%, -50%) rotate(90deg)',
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/All Large.jpeg"
              alt="Aerial view of agricultural property"
              fill
              className="object-fill"
              priority
            />

            {/* Parcel overlays */}
            {selectedOverlays.map((overlay) => (
              <div key={overlay} className="absolute inset-0 transition-opacity duration-300">
                <Image
                  src={overlay}
                  alt="Property parcel overlay"
                  fill
                  className="object-fill"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tap to explore indicator - visible on mobile */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="animate-tap-pulse bg-forest-950/85 backdrop-blur-sm rounded-xl px-4 py-3 border border-forest-700/50 shadow-2xl flex items-center gap-2">
            <Maximize2 className="w-5 h-5 text-gold-400" />
            <span className="text-sm font-medium text-white">Tap to explore</span>
          </div>
        </div>

        {/* Hover overlay for desktop */}
        <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/20 transition-colors duration-300 pointer-events-none" />

        {/* Empty state message */}
        {!hasSelection && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center p-8 bg-forest-950/85 backdrop-blur-sm rounded-2xl border border-forest-800/50 shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-800/80 border border-forest-700 mb-4">
                <Map className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="font-display text-xl text-white mb-2">
                Select Parcels to View
              </h3>
              <p className="text-forest-300 text-sm max-w-xs">
                Choose one or more parcels from the selector below to see them highlighted on the map
              </p>
            </div>
          </div>
        )}

        {/* Map legend - shows when parcels are selected */}
        {hasSelection && (
          <div className="absolute bottom-4 left-4 bg-forest-950/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-forest-800/50">
            <p className="text-xs text-forest-300">
              <span className="text-gold-400 font-medium">{selectedOverlays.length}</span> parcel{selectedOverlays.length !== 1 ? 's' : ''} selected
            </p>
          </div>
        )}

        {/* Expand icon hint - bottom right */}
        <div className="absolute bottom-4 right-4 bg-forest-950/80 backdrop-blur-sm rounded-lg p-2 border border-forest-800/50 opacity-60 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-4 h-4 text-gold-400" />
        </div>
      </div>

      {/* Fullscreen Map Viewer */}
      <MapViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        selectedOverlays={selectedOverlays}
        selectedParcels={selectedParcels}
      />
    </>
  );
}
