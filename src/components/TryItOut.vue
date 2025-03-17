<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-light mb-10 tracking-tight">Try It Out</h2>
      <div class="max-w-4xl mx-auto space-y-6 text-lg mb-10">
        <p>
          The luminance variants are optimized for contrast. Experiment with color combinations to test contrast ratios and accessibility. Select a text color and a background color to preview UI elements and check WCAG accessibility levels.
        </p>
        <p>
          WCAG guidelines define minimum contrast ratios for text to ensure readability: <strong>AA standard</strong> (Minimum) requires 4.5:1 for normal text and 3:1 for large text, while <strong>AAA standard</strong> (Enhanced) requires 7:1 for normal text and 4.5:1 for large text. These standards ensure content is readable by people with moderate visual impairments or color blindness.
        </p>
      </div>
      <div class="max-w-4xl mx-auto">
        <!-- Color Selection Controls -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 p-6">
          <!-- Text Color Selection -->
          <div>
            <div class="grid grid-cols-2 items-center border-b-2 border-black pb-2">
              <label class="block text-xl font-light">
                Text Color
              </label>
              <label class="block text-sm font-light flex items-center">
                <div class="w-5 h-5 border border-gray-300" :style="{ backgroundColor: textColorHex }"></div>
                <span class="ml-4 font-mono">{{ textColorHex }}</span>
              </label>
            </div>
            <div class="flex flex-col space-y-3">
              <!-- Color Family Dropdown -->
              <div class="p-2">
                <label class="block text-sm font-medium mb-1">Color Family</label>
                <div class="relative">
                  <select v-model="textColorFamily" class="appearance-none border-2 border-black rounded-none p-1 w-full leading-tight">>
                    <option value="basic">Basic Colors</option>
                    <option v-for="(color, key) in colorPalette" :key="`text-${key}`" :value="key">
                      {{ color.name }}
                    </option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              
              <!-- Shade/Basic Options -->
              <div class="p-2">
                <template v-if="textColorFamily === 'basic'">
                  <label class="block text-sm font-medium mb-2">Color</label>
                  <div class="flex space-x-2">
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" v-model="basicTextColor" value="black" class="mr-2">
                      <span class="flex items-center">
                        <span class="w-4 h-4 inline-block bg-black mr-1 border border-gray-300"></span>
                        Black
                      </span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" v-model="basicTextColor" value="white" class="mr-2">
                      <span class="flex items-center">
                        <span class="w-4 h-4 inline-block bg-white mr-1 border border-gray-300"></span>
                        White
                      </span>
                    </label>
                  </div>
                </template>
                <template v-else>
                  <label class="block text-sm font-medium mb-2">Shade</label>
                  <div class="relative">
                    <select v-model="textColorShade" class="appearance-none border-2 border-black rounded-none p-1 w-full leading-tight">
                      <option v-for="shade in availableShades" :key="`text-shade-${shade}`" :value="shade">
                        {{ shade }}
                      </option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          
          <!-- Background Color Selection -->
          <div class="md:pl-8">
            <div class="grid grid-cols-2 items-center border-b-2 border-black pb-2">
              <label class="block text-xl font-light">
                Background Color
              </label>
              <label class="block text-sm font-light flex items-center">
                <div class="w-5 h-5 border border-gray-300" :style="{ backgroundColor: bgColorHex }"></div>
                <span class="ml-4 font-mono">{{ bgColorHex }}</span>
              </label>
            </div>
            <div class="flex flex-col space-y-3">
              <!-- Color Family Dropdown -->
              <div class="p-2">
                <label class="block text-sm font-medium mb-1">Color Family</label>
                <div class="relative">
                  <select v-model="bgColorFamily" class="appearance-none border-2 border-black rounded-none p-1 w-full leading-tight">
                    <option value="basic">Basic Colors</option>
                    <option v-for="(color, key) in colorPalette" :key="`bg-${key}`" :value="key">
                      {{ color.name }}
                    </option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              
              <!-- Shade/Basic Options -->
              <div class="p-2">
                <template v-if="bgColorFamily === 'basic'">
                  <label class="block text-sm font-medium mb-2">Color</label>
                  <div class="flex space-x-2">
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" v-model="basicBgColor" value="black" class="mr-2">
                      <span class="flex items-center">
                        <span class="w-4 h-4 inline-block bg-black mr-1 border border-gray-300"></span>
                        Black
                      </span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" v-model="basicBgColor" value="white" class="mr-2">
                      <span class="flex items-center">
                        <span class="w-4 h-4 inline-block bg-white mr-1 border border-gray-300"></span>
                        White
                      </span>
                    </label>
                  </div>
                </template>
                <template v-else>
                  <label class="block text-sm font-medium mb-2">Shade</label>
                  <div class="relative">
                    <select v-model="bgColorShade" class="appearance-none border-2 border-black rounded-none p-1 w-full leading-tight">
                      <option v-for="shade in availableShades" :key="`bg-shade-${shade}`" :value="shade">
                        {{ shade }}
                      </option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Preview Section -->
        <div class="border-2 border-black mb-8 overflow-hidden">
          <!-- Preview Header with Contrast Results -->
          <div class="p-4 border-b-2 border-black">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="border-r-0 pr-4">
                <div class="text-sm font-medium pb-1">Contrast Ratio</div>
                <div class="text-2xl font-light" :class="contrastRatioClass">{{ contrastRatio }}</div>
              </div>
              <div class="border-r-0 pr-4">
                <div class="text-sm font-medium pb-1">WCAG AA</div>
                <div class="flex items-center">
                  <span v-if="meetsAA" class="text-black font-bold flex items-center">
                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Pass
                  </span>
                  <span v-else class="text-black font-bold flex items-center">
                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    Fail
                  </span>
                </div>
              </div>
              <div>
                <div class="text-sm font-medium pb-1">WCAG AAA</div>
                <div class="flex items-center">
                  <span v-if="meetsAAA" class="text-black font-bold flex items-center">
                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Pass
                  </span>
                  <span v-else class="text-black font-bold flex items-center">
                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    Fail
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- UI Elements Preview -->
          <div class="p-6" :style="{ backgroundColor: bgColorHex, color: textColorHex }">
            <h3 class="text-4xl font-light mb-4">Sample Heading</h3>
            <p class="mb-6">This is how your text will look with the selected colors. The preview shows various UI elements to help you evaluate the combination.</p>
            
            <!-- Sample UI Elements -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <!-- Button -->
              <div>
                <button class="px-4 py-2 border-2 font-bold" :style="{ backgroundColor: textColorHex, color: bgColorHex, borderColor: textColorHex }">
                  Sample Button
                </button>
              </div>
              
              <!-- Form Input -->
              <div>
                <label class="block mb-2 font-medium">Input Label</label>
                <input type="text" class="w-full p-2 border-2" 
                       :style="{ backgroundColor: bgColorHex, color: textColorHex, borderColor: textColorHex }"
                       value="Sample input text">
              </div>
            </div>
            
            <!-- Sample Content -->
            <div class="border-2 p-4" :style="{ borderColor: textColorHex }">
              <h4 class="text-2xl font-light mb-2">Content Card</h4>
              <p>This is a sample content card with the selected text and background colors. Use this to evaluate how your content will appear with this color combination.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue';

// Get color palette data from the parent component
const colorPalette = inject('colorPalette');

// Available shade numbers
const availableShades = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

// Basic color selection (black or white)
const basicTextColor = ref('black');
const basicBgColor = ref('white');

// Default palette selections
const textColorFamily = ref('red');
const textColorShade = ref(900);
const bgColorFamily = ref('gray');
const bgColorShade = ref(100);

// Computed properties for the selected colors
const textColorHex = computed(() => {
  if (textColorFamily.value === 'basic') {
    return basicTextColor.value === 'black' ? '#000000' : '#FFFFFF';
  } else {
    return colorPalette[textColorFamily.value].hues[textColorShade.value];
  }
});

const bgColorHex = computed(() => {
  if (bgColorFamily.value === 'basic') {
    return basicBgColor.value === 'black' ? '#000000' : '#FFFFFF';
  } else {
    return colorPalette[bgColorFamily.value].hues[bgColorShade.value];
  }
});

// Calculate luminance for a color
function getLuminance(hex) {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;
  
  // Calculate luminance
  const R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

// Calculate contrast ratio between two colors
function getContrastRatio(color1, color2) {
  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);
  
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

// Computed properties for accessibility
const contrastRatio = computed(() => {
  const ratio = getContrastRatio(textColorHex.value, bgColorHex.value);
  return ratio.toFixed(2) + ':1';
});

const contrastRatioValue = computed(() => {
  return getContrastRatio(textColorHex.value, bgColorHex.value);
});

const contrastRatioClass = computed(() => {
  if (contrastRatioValue.value >= 7) {
    return 'text-green-600';
  } else if (contrastRatioValue.value >= 4.5) {
    return 'text-yellow-600';
  } else {
    return 'text-red-600';
  }
});

const meetsAA = computed(() => {
  return contrastRatioValue.value >= 4.5;
});

const meetsAAA = computed(() => {
  return contrastRatioValue.value >= 7;
});
</script>