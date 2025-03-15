<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-light mb-10 tracking-tight">The Primary Pigments</h2>
      <p class="max-w-4xl mx-auto mb-12 text-lg">Each primary color in our palette is derived from a natural pigment with a rich history and unique properties. These base colors serve as the foundation for our expanded hue system.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Primary Color Card Component for each color -->
        <div v-for="(color, key) in colorPalette" :key="key" 
             class="border-4 bg-white"
             :style="{ borderColor: color.base }">
          
          <!-- Color Banner -->
          <div class="h-48 flex items-center justify-center border-b-2" 
               :style="{ backgroundColor: color.base, borderColor: color.base }">
            
          </div>
          
          <!-- Color Info -->
          <div class="">
            <div class="flex items-center p-4 pb-2"
                 :style="{ borderColor: color.base }">
              <h3 class="text-2xl font-light">{{ color.name }} <span class="ml-2 font-mono text-sm">{{ color.base }}</span></h3>
            </div>
            <p class="pt-2 p-4">{{ color.description }}</p>
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
