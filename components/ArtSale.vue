<script setup>
import { artworks as items } from '~/utils/artwork.js'
</script>

<template>
  <section class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
        <div
            v-for="item in items"
            :key="item.id"
            class="flex flex-col"
        >
          <NuxtLink :to="item.link" class="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-md bg-gray-100 md:aspect-[5/6]">
            <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-contain p-2 transition-transform duration-300 hover:scale-105"
            />
          </NuxtLink>

          <div class="mt-4 space-y-1">
            <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
            <p class="text-gray-800 font-medium">Price: ${{ item.price }}</p>
            <p class="text-gray-600">Size: {{ item.size }}</p>
            <p class="text-gray-600">Medium: {{ item.medium }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
