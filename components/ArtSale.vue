<template>
  <section class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
            v-for="item in items"
            :key="item.id"
            class="flex flex-col"
        >
          <!-- Link wrapper for each art item -->
          <NuxtLink :to="item.link" class="w-full h-64 overflow-hidden rounded-md">
            <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </NuxtLink>

          <!-- Always-visible info -->
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

<script setup>

</script>

<style scoped>
</style>
