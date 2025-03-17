<template>
  <div class="font-light text-black bg-white">
    <Header />
    <hr class="section-divider" />
    <Introduction />
    <hr class="section-divider" />
    <PrimaryColors />
    <hr class="section-divider" />
    <ColorHues />
    <hr class="section-divider" />
    <TryItOut />
    <hr class="section-divider" />
    <ColorblindSimulation />
    <hr class="section-divider" />
    <Downloads />
    <hr class="section-divider" />
    <Footer />
    <Notification :message="notificationMessage" :visible="showNotification" @close="showNotification = false" />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';
import PrimaryColors from './components/PrimaryColors.vue';
import ColorHues from './components/ColorHues.vue';
import TryItOut from './components/TryItOut.vue';
import ColorblindSimulation from './components/ColorblindSimulation.vue';
import Downloads from './components/Downloads.vue';
import Footer from './components/Footer.vue';
import Notification from './components/Notification.vue';

// Color palette data
const colorPalette = {
  gray: {
    name: 'Ash Gray',
    base: '#9D9A97',
    description: 'Derived from the fine ash of burned hardwoods, this subtle gray has been used since prehistoric times across all civilizations for its neutral tone and high availability. Wood ash also served as a crucial component in medieval glass-making and soap production.',
    hues: {
      100: '#f1f0ef',
      200: '#dddad7',
      300: '#c8c4bf',
      400: '#b3afab',
      500: '#9d9a97',
      600: '#898683',
      700: '#75726f',
      800: '#615f5d',
      900: '#4f4d4a',
      1000: '#3d3b38',
    }
  },
  green: {
    name: 'Celadonite Green',
    base: '#788D64',
    description: 'Celadonite is a natural mineral pigment that yields a subtle earthen green, which remains unaffected by light or chemicals. Medieval painters used green earth for underpainting flesh tones. It is also reminiscient of the distinctive color to celadon pottery of ancient Korea.',
    hues: {
      100: '#f0f5c2',
      200: '#d7e9b4',
      300: '#b3cd9b',
      400: '#9bb989',
      500: '#89a377',
      600: '#788d64',
      700: '#677851',
      800: '#56633f',
      900: '#4a512d',
      1000: '#40401f',
    }
  },
  blue: {
    name: 'Prussian Blue',
    base: '#074248',
    description: 'Prussian Blue was the first modern synthetic pigment and exhibits an intense deep blue tone. It remains widely popular, being used in 19th century japanese woodblock prints, and famous european painters like Van Gogh, de Goya, Picasso, or Munch.',
    hues: {
      100: '#e2f5f0',
      200: '#b7eceb',
      300: '#98d4dd',
      400: '#79bacd',
      500: '#5ea4c0',
      600: '#4590a9',
      700: '#2e7c92',
      800: '#176778',
      900: '#0b5561',
      1000: '#074248',
    }
  },
  violet: {
    name: 'Manganese Violet',
    base: '#6D4DA5',
    description: 'This intense purple is produced by heating manganese oxide with an acid. It provided artists a stable alternative to the notoriously fugitive plant-based purple dyes.',
    hues: {
      100: '#f9ecff',
      200: '#eddbff',
      300: '#d7b8fb',
      400: '#c4a1f1',
      500: '#a98ce4',
      600: '#9177d4',
      700: '#7e62c0',
      800: '#6d4da5',
      900: '#5f3f7e',
      1000: '#502f5a',
    }
  },
  red: {
    name: 'Iron Oxide Red',
    base: '#94202B',
    description: 'Derived from the mineral Hematite, the earthen red has been popular throughout human history for writing, drawing, and decoration. As a byproduct of iron mining, it also yields the famous red paint of wooden houses in Scandinavian countries.',
    hues: {
      100: '#ffede8',
      200: '#ffd3cc',
      300: '#ffb0a4',
      400: '#ff9283',
      500: '#f27666',
      600: '#e15953',
      700: '#cb4245',
      800: '#aa333f',
      900: '#94202b',
      1000: '#720d1e',
    }
  },
  yellow: {
    name: 'Gold Ochre Yellow',
    base: '#9F6520',
    description: 'Gold ochre is one of the oldest pigments used in Art. It is produced by washing clay and grinding the dried sludge. Its warm earthen tone can be found in decorated cave walls, greek and roman frescoe paintings, and remains popular to the present day.',
    hues: {
      100: '#f9f2c8',
      200: '#f6e299',
      300: '#e6c069',
      400: '#d9a850',
      500: '#c98f39',
      600: '#b77927',
      700: '#9f6520',
      800: '#825420',
      900: '#5f3d16',
      1000: '#4b3313',
    }
  },
};

// Notification system
const showNotification = ref(false);
const notificationMessage = ref('');

// Function to copy color to clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    notificationMessage.value = `Color ${text} copied to clipboard!`;
    showNotification.value = true;
    
    // Hide notification after 2 seconds
    setTimeout(() => {
      showNotification.value = false;
    }, 2000);
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
};

// Provide these values to all components
provide('colorPalette', colorPalette);
provide('copyToClipboard', copyToClipboard);
</script>