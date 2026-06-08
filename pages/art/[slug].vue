<script setup>
import { computed, ref } from 'vue'
import { getArtworkBySlug } from '~/utils/artwork.js'

const route = useRoute()
const artwork = computed(() => getArtworkBySlug(route.params.slug))
const lightboxOpen = ref(false)

if (!artwork.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artwork not found'
  })
}

useHead(() => ({
  title: `${artwork.value.title} | Lanza y Oso`
}))
</script>

<template>
  <main class="mt-32 px-4 sm:px-6 lg:px-8">
    <article class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
      <section>
        <button
          type="button"
          class="group block w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
          :aria-label="`Open expanded view of ${artwork.title}`"
          @click="lightboxOpen = true"
        >
          <NuxtImg
            :src="artwork.image"
            :alt="artwork.alt || artwork.title"
            sizes="sm:100vw lg:70vw"
            class="max-h-[calc(100vh-10rem)] w-full object-contain transition duration-300 group-hover:scale-[1.01]"
          />
        </button>

        <ArtLightbox
          v-model:open="lightboxOpen"
          :src="artwork.image"
          :alt="artwork.alt || artwork.title"
          :title="artwork.title"
        />
      </section>

      <aside class="lg:sticky lg:top-28 lg:self-start">
        <NuxtLink to="/art" class="text-sm font-medium text-gray-600 hover:text-black">
          Back to art
        </NuxtLink>

        <h1 class="mt-8 text-4xl font-semibold text-black">{{ artwork.title }}</h1>
        <p v-if="artwork.description" class="mt-6 text-lg leading-8 text-gray-700">
          {{ artwork.description }}
        </p>

        <dl class="mt-8 divide-y divide-gray-200 border-y border-gray-200">
          <div v-if="artwork.medium" class="flex justify-between gap-6 py-4">
            <dt class="text-sm font-medium text-gray-500">Medium</dt>
            <dd class="text-right text-sm text-gray-900">{{ artwork.medium }}</dd>
          </div>
          <div v-if="artwork.size" class="flex justify-between gap-6 py-4">
            <dt class="text-sm font-medium text-gray-500">Size</dt>
            <dd class="text-right text-sm text-gray-900">{{ artwork.size }}</dd>
          </div>
          <div v-if="artwork.price" class="flex justify-between gap-6 py-4">
            <dt class="text-sm font-medium text-gray-500">Price</dt>
            <dd class="text-right text-sm text-gray-900">${{ artwork.price }}</dd>
          </div>
        </dl>

        <NuxtLink
          :to="{ path: '/', query: { art: artwork.slug }, hash: '#contact' }"
          class="mt-8 inline-flex w-full justify-center bg-black px-5 py-4 text-sm font-medium text-white transition hover:bg-gray-900"
        >
          Inquire about this piece
        </NuxtLink>
      </aside>
    </article>
  </main>
</template>
