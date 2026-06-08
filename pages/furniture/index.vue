<script setup>
import { furniturePieces } from '~/utils/furniture.js'

useHead({
  title: 'Furniture | Lanza y Oso'
})
</script>

<template>
  <main class="mt-32 px-4 sm:px-6 lg:px-8">
    <section class="mx-auto max-w-7xl">
      <div class="mb-12 max-w-3xl">
        <AppBackButton />
        <h1 class="mt-10 text-4xl font-semibold text-black md:text-6xl">Furniture</h1>
        <p class="mt-4 text-lg leading-8 text-gray-700">
          Built objects, storage pieces, seating, lighting, and fixtures from Lanza y Oso.
        </p>
      </div>

      <div class="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="piece in furniturePieces"
          :key="piece.id"
          :to="piece.link"
          class="group block"
        >
          <div class="flex aspect-[4/5] items-center justify-center overflow-hidden bg-gray-100 md:aspect-[5/6]">
            <NuxtImg
              :src="piece.image"
              :alt="piece.alt || piece.title"
              sizes="sm:100vw md:50vw lg:33vw"
              format="webp"
              class="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
            />
          </div>
          <div class="mt-4 flex items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold text-black">{{ piece.title }}</h2>
              <p v-if="piece.material" class="mt-1 text-sm text-gray-600">{{ piece.material }}</p>
            </div>
            <p v-if="piece.price" class="shrink-0 text-sm font-medium text-gray-900">
              ${{ piece.price }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
