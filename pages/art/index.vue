<script setup>
import { artworks } from '~/utils/artwork.js'

useHead({
  title: 'Art | Lanza y Oso'
})
</script>

<template>
  <main class="mt-32 px-4 sm:px-6 lg:px-8">
    <section class="mx-auto max-w-7xl">
      <div class="mb-12 max-w-3xl">
        <AppBackButton />
        <h1 class="mt-10 text-4xl font-semibold text-black md:text-6xl">Art</h1>
        <p class="mt-4 text-lg leading-8 text-gray-700">
          Paintings, prints, studies, and digital pieces from Lanza y Oso.
        </p>
      </div>

      <div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="artwork in artworks"
          :key="artwork.id"
          :to="artwork.link"
          class="group block"
        >
          <div class="flex aspect-[4/5] items-center justify-center overflow-hidden bg-gray-100 md:aspect-[5/6]">
            <NuxtImg
              :src="artwork.image"
              :alt="artwork.alt || artwork.title"
              sizes="sm:100vw md:50vw lg:33vw"
              class="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-105"
            />
          </div>
          <div class="mt-4 flex items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold text-black">{{ artwork.title }}</h2>
              <p class="mt-1 text-sm text-gray-600">{{ artwork.medium }}</p>
            </div>
            <p v-if="artwork.price" class="shrink-0 text-sm font-medium text-gray-900">
              ${{ artwork.price }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
