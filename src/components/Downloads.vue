// components/Downloads.vue
<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-light mb-10 tracking-tight">Download</h2>
      <p class="max-w-2xl mx-auto mb-10 text-lg">
        Integrate these natural pigment-inspired colors into your design workflow with these ready-to-use format options.
      </p>
      
      <div class="flex flex-wrap justify-center gap-0 mb-10 p-4">
        <a v-for="format in downloadFormats" :key="format.id"
           :href="format.filePath" 
           :download="format.fileName"
           class="flex items-center gap-3 px-5 py-3 border-2 border-black m-2 transition-colors hover:bg-gray-100">
          <span class="font-mono">{{ format.name }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// File download formats with pre-built file paths
const downloadFormats = [
  { 
    id: 'css', 
    name: 'CSS Variables', 
    filePath: '/downloads/pigments.css',
    fileName: 'pigments.css'
  },
  { 
    id: 'json', 
    name: 'JSON',
    filePath: '/downloads/pigments.json',
    fileName: 'pigments.json'
  },
  { 
    id: 'iterm2', 
    name: 'iTerm2',
    filePath: '/downloads/pigments.itermcolors',
    fileName: 'pigments.itermcolors'
  }
];
</script>