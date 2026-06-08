<script setup>
import { collection } from '~/data/art.js'
</script>
<template>
  <div class="flex flex-col mt-32">
    <AppBackButton />
    <h1>Art</h1>
    <div class="art-container w-full h-screen grid lg:grid-cols-3 gap-2 overflow-y-auto dark:text-white">
      <NuxtLink :to="art.link" v-for="art in collection" :key="art.id"
        class="hover:shadow-xl p-4 duration-100 dark:hover:text-black group">
        <div class="grid place-content-center overflow-hidden">
          <p class="art-title font-bold text-2xl z-4">
            {{ art.title }}
          </p>
          <NuxtImg :src="art.image" height="600px" preload :alt="art.alt || art.title" class=" duration-300">
          </NuxtImg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
