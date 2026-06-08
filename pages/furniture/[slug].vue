<script setup>
import { computed } from 'vue'
import { getFurnitureBySlug } from '~/utils/furniture.js'

const route = useRoute()
const piece = computed(() => getFurnitureBySlug(route.params.slug))

if (!piece.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Furniture piece not found'
  })
}

useHead(() => ({
  title: `${piece.value.title} | Lanza y Oso`
}))
</script>

<template>
  <main class="mt-32 px-4 sm:px-6 lg:px-8">
    <article class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
      <section class="flex min-h-[60vh] items-center justify-center bg-gray-100">
        <NuxtImg
          :src="piece.image"
          :alt="piece.alt || piece.title"
          sizes="sm:100vw lg:70vw"
          format="webp"
          class="max-h-[calc(100vh-10rem)] w-full object-contain p-4"
        />
      </section>

      <aside class="lg:sticky lg:top-28 lg:self-start">
        <NuxtLink to="/furniture" class="text-sm font-medium text-gray-600 hover:text-black">
          Back to furniture
        </NuxtLink>

        <h1 class="mt-8 text-4xl font-semibold text-black">{{ piece.title }}</h1>
        <p v-if="piece.description" class="mt-6 text-lg leading-8 text-gray-700">
          {{ piece.description }}
        </p>

        <dl class="mt-8 divide-y divide-gray-200 border-y border-gray-200">
          <div v-if="piece.material" class="flex justify-between gap-6 py-4">
            <dt class="text-sm font-medium text-gray-500">Material</dt>
            <dd class="text-right text-sm text-gray-900">{{ piece.material }}</dd>
          </div>
          <div v-if="piece.size" class="flex justify-between gap-6 py-4">
            <dt class="text-sm font-medium text-gray-500">Size</dt>
            <dd class="text-right text-sm text-gray-900">{{ piece.size }}</dd>
          </div>
          <div v-if="piece.price" class="flex justify-between gap-6 py-4">
            <dt class="text-sm font-medium text-gray-500">Price</dt>
            <dd class="text-right text-sm text-gray-900">${{ piece.price }}</dd>
          </div>
        </dl>

        <NuxtLink
          :to="{ path: '/', query: { furniture: piece.slug }, hash: '#contact' }"
          class="mt-8 inline-flex w-full justify-center bg-black px-5 py-4 text-sm font-medium text-white transition hover:bg-gray-900"
        >
          Inquire about this piece
        </NuxtLink>
      </aside>
    </article>
  </main>
</template>
