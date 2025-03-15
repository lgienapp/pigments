<template>
  <div v-if="visible" class="fixed bottom-4 right-4 border-2 border-black bg-white text-black px-6 py-3 shadow-lg z-50 transition-opacity duration-300">
    <div class="flex items-center">
      <span class="mr-2">{{ message }}</span>
      <button @click="$emit('close')" class="ml-4 text-black border-l-2 border-black pl-4">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true
  },
  visible: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close']);
</script>