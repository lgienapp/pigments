// components/Downloads.vue
<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-light mb-10 tracking-tight">Download</h2>
        <div class="max-w-4xl mx-auto space-y-6 text-lg mb-10">
          <p>
            Integrate Pigments colors into your setup or design workflow with these ready-to-use format options.
          </p>
          <p>
            Spot an error or cant find what you're looking for? Pigments is always open for contributing ports <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://github.com/lgienapp/pigments">on Github</a>!
          </p>
        </div>
      <div class="flex flex-wrap justify-center gap-0 mb-10 p-4">
        <button 
          v-for="format in downloadFormats" 
          :key="format.id"
          @click="downloadFile(format)"
          class="flex items-center gap-3 px-5 py-3 border-2 border-black m-2 transition-colors hover:bg-gray-100">
          <span class="font-mono">{{ format.name }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// File download formats with pre-built file paths
const downloadFormats = [
  { 
    id: 'apple', 
    name: 'Apple Color List', 
    filePath: '/downloads/pigments.clr',
    fileName: 'pigments.clr'
  },
  { 
    id: 'scss', 
    name: 'SCSS Variables', 
    filePath: '/downloads/_pigments.scss',
    fileName: '_pigments.scss'
  },
  { 
    id: 'bootstrap', 
    name: 'Bootstrap SCSS', 
    filePath: '/downloads/pigments.bootstrap.scss',
    fileName: 'pigments.bootstrap.scss'
  },
  { 
    id: 'css', 
    name: 'CSS Variables', 
    filePath: '/downloads/pigments.css',
    fileName: 'pigments.css'
  },
  { 
    id: 'gimp', 
    name: 'GIMP Palette', 
    filePath: '/downloads/pigments.gpl',
    fileName: 'pigments.gpl'
  },
  { 
    id: 'iterm', 
    name: 'iTerm2 Colors', 
    filePath: '/downloads/pigments.itermcolors',
    fileName: 'pigments.itermcolors'
  },
  { 
    id: 'json', 
    name: 'JSON', 
    filePath: '/downloads/pigments.json',
    fileName: 'pigments.json'
  },
  { 
    id: 'less', 
    name: 'LESS Variables', 
    filePath: '/downloads/pigments.less',
    fileName: 'pigments.less'
  },
  { 
    id: 'libreoffice', 
    name: 'LibreOffice Palette', 
    filePath: '/downloads/pigments.soc',
    fileName: 'pigments.soc'
  },
  { 
    id: 'material', 
    name: 'Material Design', 
    filePath: '/downloads/pigments.material.json',
    fileName: 'pigments.material.json'
  },
  { 
    id: 'react', 
    name: 'React Theme', 
    filePath: '/downloads/pigments.react.theme.js',
    fileName: 'pigments.react.theme.js'
  },
  { 
    id: 'sketch', 
    name: 'Sketch Palette', 
    filePath: '/downloads/pigments.sketchpalette',
    fileName: 'pigments.sketchpalette'
  },
  { 
    id: 'tex', 
    name: 'TeX', 
    filePath: '/downloads/pigments.sty',
    fileName: 'pigments.sty'
  },
  { 
    id: 'svg', 
    name: 'SVG Swatches', 
    filePath: '/downloads/pigments.svg',
    fileName: 'pigments.svg'
  },
  { 
    id: 'tailwind', 
    name: 'Tailwind Config', 
    filePath: '/downloads/pigments.tailwind.config.js',
    fileName: 'pigments.tailwind.config.js'
  },
  { 
    id: 'winterm', 
    name: 'Windows Terminal Theme', 
    filePath: '/downloads/pigments.winterm.json',
    fileName: 'pigments.winterm.json'
  }
];

/**
 * Handles file download by creating an invisible anchor element and
 * programmatically triggering a click with the correct file attributes
 */
const downloadFile = (format) => {
  // Create a server-side download link
  // We need to ensure we're getting the file as a download, not as a navigation
  const link = document.createElement('a');
  
  // Ensure the download happens by adding a timestamp to prevent caching
  // This helps avoid the server treating it as a navigation request
  const timestamp = new Date().getTime();
  const url = `${format.filePath}?download=true&t=${timestamp}`;
  
  link.href = url;
  link.setAttribute('download', format.fileName);
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
};
</script>
