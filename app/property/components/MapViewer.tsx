'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Parcel } from './ParcelSelector';

interface MapViewerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOverlays: string[];
  selectedParcels: Parcel[];
}

export default function MapViewer({ isOpen, onClose, selectedOverlays, selectedParcels }: MapViewerProps) {
  const transformRef = useRef<ReactZoomPanPinchRef>(null);

  // Calculate centroid of selected parcels for smart zoom
  const getInitialPosition = useCallback(() => {
    if (selectedParcels.length === 0) {
      return { x: 50, y: 50, scale: 1 };
    }

    // Calculate centroid
    const avgX = selectedParcels.reduce((sum, p) => sum + p.centerX, 0) / selectedParcels.length;
    const avgY = selectedParcels.reduce((sum, p) => sum + p.centerY, 0) / selectedParcels.length;

    return { x: avgX, y: avgY, scale: 2 };
  }, [selectedParcels]);

  // Center on selected parcels when opening
  useEffect(() => {
    if (isOpen && transformRef.current) {
      const { x, y, scale } = getInitialPosition();
      
      // Small delay to ensure the component is fully mounted
      setTimeout(() => {
        if (transformRef.current) {
          const { setTransform } = transformRef.current;
          
          // Convert percentage coordinates to pixel offsets
          // The map container takes the full viewport, so we calculate based on window dimensions
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          // Map aspect ratio: 1280:519
          const mapAspect = 1280 / 519;
          const viewportAspect = viewportWidth / viewportHeight;
          
          let mapDisplayWidth: number, mapDisplayHeight: number;
          if (viewportAspect > mapAspect) {
            // Viewport is wider than map - map height fills viewport
            mapDisplayHeight = viewportHeight;
            mapDisplayWidth = viewportHeight * mapAspect;
          } else {
            // Viewport is taller than map - map width fills viewport
            mapDisplayWidth = viewportWidth;
            mapDisplayHeight = viewportWidth / mapAspect;
          }
          
          // Target point on the map (as percentages)
          const targetX = (x / 100) * mapDisplayWidth * scale;
          const targetY = (y / 100) * mapDisplayHeight * scale;
          
          // Calculate offset to center that point in viewport
          const offsetX = (viewportWidth / 2) - targetX;
          const offsetY = (viewportHeight / 2) - targetY;
          
          setTransform(offsetX, offsetY, scale, 300);
        }
      }, 100);
    }
  }, [isOpen, getInitialPosition]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-forest-950">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-forest-900/90 backdrop-blur-sm border border-forest-700 flex items-center justify-center text-white hover:bg-forest-800 transition-colors shadow-lg"
        aria-label="Close map viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Zoom controls */}
      <div className="absolute bottom-6 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={() => transformRef.current?.zoomIn()}
          className="w-12 h-12 rounded-full bg-forest-900/90 backdrop-blur-sm border border-forest-700 flex items-center justify-center text-white hover:bg-forest-800 transition-colors shadow-lg"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={() => transformRef.current?.zoomOut()}
          className="w-12 h-12 rounded-full bg-forest-900/90 backdrop-blur-sm border border-forest-700 flex items-center justify-center text-white hover:bg-forest-800 transition-colors shadow-lg"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={() => transformRef.current?.resetTransform()}
          className="w-12 h-12 rounded-full bg-forest-900/90 backdrop-blur-sm border border-forest-700 flex items-center justify-center text-white hover:bg-forest-800 transition-colors shadow-lg"
          aria-label="Reset zoom"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Selected parcels indicator */}
      {selectedOverlays.length > 0 && (
        <div className="absolute bottom-6 left-4 z-50 bg-forest-900/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-forest-700 shadow-lg">
          <p className="text-sm text-forest-300">
            <span className="text-gold-400 font-medium">{selectedOverlays.length}</span> parcel{selectedOverlays.length !== 1 ? 's' : ''} selected
          </p>
        </div>
      )}

      {/* Pan/Zoom container */}
      <TransformWrapper
        ref={transformRef}
        initialScale={1}
        minScale={0.5}
        maxScale={5}
        centerOnInit={true}
        limitToBounds={false}
        doubleClick={{ mode: 'zoomIn' }}
        panning={{ velocityDisabled: false }}
        wheel={{ smoothStep: 0.05 }}
      >
        <TransformComponent
          wrapperStyle={{
            width: '100%',
            height: '100%',
          }}
          contentStyle={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Map container with exact aspect ratio of rotated image (1280:519) */}
          <div 
            className="relative"
            style={{ 
              width: '100vw',
              maxWidth: 'calc(100vh * 1280 / 519)',
              aspectRatio: '1280 / 519'
            }}
          >
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
        </TransformComponent>
      </TransformWrapper>

      {/* Instructions hint (fades out) */}
      <div className="absolute top-4 left-4 z-50 bg-forest-900/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-forest-700 shadow-lg pointer-events-none animate-fade-out">
        <p className="text-sm text-forest-300">
          Pinch to zoom • Drag to pan • Double-tap to zoom in
        </p>
      </div>
    </div>
  );
}

