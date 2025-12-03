# Images Required for Property Listing

Please add the following images to the project:

## Base Image
Already present:
- `/public/All Large.jpeg` - Base aerial photo of the property

## Overlay Images Needed
Create four transparent PNG overlays highlighting different parcel configurations:

1. `/public/overlays/full-estate.png` - All 4 parcels highlighted
2. `/public/overlays/apache-ranch.png` - Only Apache Ranch parcel (APN 097-230-067) highlighted
3. `/public/overlays/home-ranch.png` - Only Home Ranch parcel (APN 097-230-068) highlighted
4. `/public/overlays/operations-housing.png` - Operations parcels (APNs 097-230-069 & 097-230-070) highlighted

## Image Specifications
- Format: PNG with transparency
- Dimensions: Must match the base aerial image dimensions exactly
- Content: Semi-transparent colored overlays showing parcel boundaries
- Suggested colors: Amber/yellow tones (e.g., rgba(251, 191, 36, 0.4)) to match the site theme
- Alignment: Must align perfectly with the base image when overlaid

## How to Create
1. Open the base aerial image in an image editor (Photoshop, GIMP, etc.)
2. Create a new transparent layer
3. Draw/trace the appropriate parcel boundaries
4. Fill with semi-transparent amber color
5. Export as PNG with transparency preserved
6. Place in `/public/overlays/` directory with the exact filenames listed above
