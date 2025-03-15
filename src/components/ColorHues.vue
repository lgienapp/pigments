<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-light mb-10 tracking-tight">Perceptually Uniform Hues</h2>
      <p class="max-w-4xl mx-auto mb-12 text-lg">Each primary color has been expanded into a system of perceptually uniform hues. These carefully calibrated variations maintain color identity across different luminance levels while ensuring accessibility and harmony.</p>
      
      <div class="space-y-4">
        <!-- Hue Group for each color -->
        <div v-for="(color, key) in colorPalette" :key="key">
          <div class="flex flex-wrap gap-4 md:gap-4 justify-center">
            <!-- Individual Hue Box for each shade -->
            <div v-for="(hex, shade) in color.hues" :key="`${key}-${shade}`"
                 class="relative group cursor-pointer"
                 @click="copyColor(hex)">
              <div class="w-16 h-16 md:w-20 md:h-20 border-2 flex items-end justify-center p-2 transition duration-200 hover:scale-105"
                   :style="{ backgroundColor: hex, borderColor: hex, color: shade > 500 ? 'white' : 'black' }">
                <span class="text-sm font-medium opacity-80">{{ shade }}</span>
              </div>
              <!-- Color code tooltip -->
              <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ hex }}
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
const copyToClipboard = inject('copyToClipboard');

function copyColor(hex) {
  copyToClipboard(hex);
}
</script>