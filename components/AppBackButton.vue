<script setup>
defineProps({
  label: {
    type: String,
    default: 'back to home'
  },
  to: {
    type: String,
    default: '/'
  }
})
</script>
<template>
  <div>
    <NuxtLink :to="to" class="text-3xl hover:text-red-400 text-black"
      >{{ label }}</NuxtLink
    >
  </div>
</template>
