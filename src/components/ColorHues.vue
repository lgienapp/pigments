<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-light mb-10 tracking-tight">Perceptually Uniform Hues</h2>
      <p class="max-w-4xl mx-auto mb-12 text-lg">Each primary color has been expanded into a system of perceptually uniform hues. These carefully calibrated variations maintain color identity across different luminance levels while ensuring accessibility and harmony.</p>
      
      <div class="space-y-2">
        <!-- Hue Group for each color -->
        <div v-for="(colorData, colorName) in colorPalette" :key="colorName">
          <div class="flex flex-wrap gap-2 md:gap-2 justify-center">
            <!-- Individual Hue Box for each shade -->
            <div v-for="(hex, shade) in colorData.hues" :key="`${colorName}-${shade}`"
                 class="flip-card relative cursor-pointer"
                 @click="copyToClipboard(hex)">
              <div class="flip-card-inner w-16 h-16 md:w-20 md:h-20 transition-transform duration-500">
                <!-- Front of card (the color) -->
                <div class="flip-card-front absolute w-full h-full border-2 flex items-end justify-center p-2"
                     :style="{ backgroundColor: hex, borderColor: hex, color: shade > 500 ? 'white' : 'black' }">
                  <span class="text-sm font-medium opacity-80">{{ shade }}</span>
                </div>
                
                <!-- Back of card (color details) -->
                <div class="flip-card-back absolute w-full h-full border-2 border-gray-200 bg-white p-2 flex flex-col justify-center items-center text-center text-black">
                  <div class="text-xs font-semibold mb-1">{{ `${colorName}-${shade}` }}</div>
                  <div class="text-xs font-mono">{{ hex }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, ref } from 'vue';
const colorPalette = inject('colorPalette');
const copyToClipboard = inject('copyToClipboard');
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>