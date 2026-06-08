<script setup>
import { collection } from '~/data/art.js'
</script>
<template>
  <div class="flex flex-col mt-24">
    <AppBackButton />
    <div
      class="art-container h-screen grid lg:grid-cols-3 gap-2 overflow-y-auto dark:text-white"
    >
      <NuxtLink
        :to="art.link"
        v-for="art in collection"
        :key="art.id"
        class="hover:shadow-xl p-4 duration-100 dark:hover:text-red-200"
      >
        <div class="grid place-content-center">
          <p class="art-title font-bold text-2xl">{{ art.title }}</p>
          <NuxtImg :src="art.image" height="900px" preload :alt="art.alt || art.title"></NuxtImg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
