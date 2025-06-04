/**
 * Image Optimization Script for MiniGuardTech Landing Page
 * 
 * This script uses sharp to process and optimize images in the public directory
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const IMAGE_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');
const SIZES = [2560, 1920, 1280, 768, 480]; // Responsive sizes
const FORMATS = ['webp', 'avif']; // Modern formats

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(IMAGE_DIR)
  .filter(file => /\.(jpe?g|png|gif|svg)$/i.test(file))
  .filter(file => !file.includes('optimized')); // Skip already optimized images

console.log(`Found ${imageFiles.length} images to optimize`);

// Process each image
async function processImages() {
  for (const file of imageFiles) {
    const inputPath = path.join(IMAGE_DIR, file);
    const fileName = path.parse(file).name;
    
    console.log(`Processing ${file}...`);
    
    // Skip SVG files for resizing but copy them
    if (file.toLowerCase().endsWith('.svg')) {
      const outputPath = path.join(OUTPUT_DIR, file);
      fs.copyFileSync(inputPath, outputPath);
      console.log(`  Copied SVG: ${file}`);
      continue;
    }
    
    // Process for each size
    for (const size of SIZES) {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      
      // Skip if original is smaller than target size
      if (metadata.width < size) {
        console.log(`  Skipping size ${size}px (original: ${metadata.width}px)`);
        continue;
      }
      
      // Create resized version in each format
      for (const format of FORMATS) {
        const outputFileName = `${fileName}-${size}.${format}`;
        const outputPath = path.join(OUTPUT_DIR, outputFileName);
        
        try {
          await image
            .resize({
              width: size,
              fit: 'inside',
              withoutEnlargement: true
            })
            [format]({
              quality: format === 'webp' ? 80 : 60, // AVIF can use lower quality
            })
            .toFile(outputPath);
            
          console.log(`  Created: ${outputFileName}`);
        } catch (err) {
          console.error(`  Error creating ${outputFileName}:`, err.message);
        }
      }
      
      // Create original format version too
      const originalFormat = path.extname(file).substring(1);
      const outputFileName = `${fileName}-${size}.${originalFormat}`;
      const outputPath = path.join(OUTPUT_DIR, outputFileName);
      
      try {
        await image
          .resize({
            width: size,
            fit: 'inside',
            withoutEnlargement: true
          })
          .toFile(outputPath);
          
        console.log(`  Created: ${outputFileName}`);
      } catch (err) {
        console.error(`  Error creating ${outputFileName}:`, err.message);
      }
    }
  }
  
  console.log('Image optimization complete!');
}

processImages().catch(err => {
  console.error('Error processing images:', err);
  process.exit(1);
});
