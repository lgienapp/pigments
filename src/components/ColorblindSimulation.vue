<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-light mb-10 tracking-tight">Colorblind Accessibility</h2>
      <p class="max-w-4xl mx-auto mb-12 text-lg">
        Understanding how your color choices appear to users with color vision deficiencies is essential for inclusive design. 
        Below are simulations of how our palette appears to people with the three most common types of colorblindness.
      </p>
      <p class="max-w-4xl mx-auto mb-12 text-lg">
        While all colors are chosen to ensure sufficient differentiability in each hue level even for users with color vision deficiencies, as a general rule of thumb, pairing blue and purple, red and yellow, and green and gray is discouraged for applications where visibility matters.
      </p>

      <!-- SVG Filter Definitions -->
      <svg width="0" height="0" class="absolute">
        <defs>
          <filter id="deuteranopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.625 0.375 0 0 0
                      0.7 0.3 0 0 0
                      0 0.3 0.7 0 0
                      0 0 0 1 0">
            </feColorMatrix>
          </filter>
          
          <filter id="protanopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.567 0.433 0 0 0
                      0.558 0.442 0 0 0
                      0 0.242 0.758 0 0
                      0 0 0 1 0">
            </feColorMatrix>
          </filter>
          
          <filter id="tritanopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.95 0.05 0 0 0
                      0 0.433 0.567 0 0
                      0 0.475 0.525 0 0
                      0 0 0 1 0">
            </feColorMatrix>
          </filter>
        </defs>
      </svg>

      <!-- Simulation Section - Side by Side -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-0 mb-12 border-2 border-black">
        <!-- Normal Vision -->
        <div class="border-r-0 md:border-r-2 border-black">
          <h3 class="text-lg font-light text-center border-b-2 border-black p-2">Normal Vision</h3>
          <div class="grid grid-cols-6 p-4">
            <div v-for="(color, key) in colorPalette" :key="`normal-${key}`">
              <div v-for="(hex, shade) in color.hues" :key="`normal-${key}-${shade}`"
                   class="w-full aspect-square"
                   :style="{ backgroundColor: hex }">
              </div>
            </div>
          </div>
        </div>
        
        <!-- Deuteranopia Simulation -->
        <div class="border-t-2 md:border-t-0 border-r-0 md:border-r-2 border-black">
          <h3 class="text-lg font-light text-center border-b-2 border-black p-2">Deuteranopia</h3>
          <div class="grid grid-cols-6 p-4 " style="filter: url(#deuteranopia-filter)">
            <div v-for="(color, key) in colorPalette" :key="`deuteranopia-${key}`">
              <div v-for="(hex, shade) in color.hues" :key="`deuteranopia-${key}-${shade}`"
                   class="w-full aspect-square"
                   :style="{ backgroundColor: hex }">
              </div>
            </div>
          </div>
        </div>
        
        <!-- Protanopia Simulation -->
        <div class="border-t-2 md:border-t-0 border-r-0 md:border-r-2 border-black">
          <h3 class="text-lg font-light text-center border-b-2 border-black p-2">Protanopia</h3>
          <div class="grid grid-cols-6 p-4 " style="filter: url(#protanopia-filter)">
            <div v-for="(color, key) in colorPalette" :key="`protanopia-${key}`">
              <div v-for="(hex, shade) in color.hues" :key="`protanopia-${key}-${shade}`"
                   class="w-full aspect-square"
                   :style="{ backgroundColor: hex }">
              </div>
            </div>
          </div>
        </div>
        
        <!-- Tritanopia Simulation -->
        <div class="border-t-2 md:border-t-0">
          <h3 class="text-lg font-light text-center border-b-2 border-black p-2">Tritanopia</h3>
          <div class="grid grid-cols-6 p-4" style="filter: url(#tritanopia-filter)">
            <div v-for="(color, key) in colorPalette" :key="`tritanopia-${key}`">
              <div v-for="(hex, shade) in color.hues" :key="`tritanopia-${key}-${shade}`"
                   class="w-full aspect-square"
                   :style="{ backgroundColor: hex }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';

const colorPalette = inject('colorPalette');
</script>

<style scoped>
/* Ensure aspect ratio is maintained */
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>