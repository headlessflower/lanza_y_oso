<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    <!-- Logo -->
    <div class="flex-shrink-0">
      <NuxtLink to="/" class="text-xl font-bold">lanzayoso</NuxtLink>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-8">
      <NuxtLink to="/art" class="text-gray-700 hover:text-gray-900">Art</NuxtLink>
      <NuxtLink to="/furniture" class="text-gray-700 hover:text-gray-900">Furniture</NuxtLink>
      <NuxtLink to="/classes" class="text-gray-700 hover:text-gray-900">Classes</NuxtLink>
      <NuxtLink to="/about" class="text-gray-700 hover:text-gray-900">About</NuxtLink>
    </nav>

    <!-- Mobile Hamburger -->
    <div class="md:hidden relative">
      <button
          @click="toggleMenu"
          aria-label="Toggle menu"
          class="focus:outline-none"
      >
        <span class="block w-6 h-0.5 bg-gray-800 mb-1"></span>
        <span class="block w-6 h-0.5 bg-gray-800 mb-1"></span>
        <span class="block w-6 h-0.5 bg-gray-800"></span>
      </button>

      <!-- Click-to-open Menu -->
      <div
          v-show="isOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg transition-opacity duration-200"
      >
        <NuxtLink
            to="/art"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            @click="closeMenu"
        >Art</NuxtLink>
        <NuxtLink
            to="/furniture"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            @click="closeMenu"
        >Furniture</NuxtLink>
        <NuxtLink
            to="/classes"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            @click="closeMenu"
        >Classes</NuxtLink>
        <NuxtLink
            to="/about"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            @click="closeMenu"
        >About</NuxtLink>
      </div>
    </div>
  </div>
</template>
