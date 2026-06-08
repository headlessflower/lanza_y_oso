<script setup>
import { getClassBySlug } from '~/utils/classes.js'

const route = useRoute()
const offering = computed(() => getClassBySlug(route.params.slug))

if (!offering.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Class not found'
  })
}

useHead(() => ({
  title: `${offering.value.title} | Classes | Lanza y Oso`
}))
</script>

<template>
  <main class="mt-32 px-4 sm:px-6 lg:px-8">
    <article class="mx-auto max-w-7xl">
      <AppBackButton label="Back to Classes" to="/classes" />

      <div class="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div class="flex max-h-[calc(100vh-10rem)] min-h-80 items-center justify-center overflow-hidden bg-gray-100">
          <NuxtImg
            :src="offering.image"
            :alt="offering.title"
            sizes="sm:100vw lg:50vw"
            class="h-full w-full object-cover"
          />
        </div>

        <div>
          <p class="text-sm font-medium uppercase tracking-wide text-gray-500">Classes</p>
          <h1 class="mt-3 text-4xl font-semibold text-black md:text-6xl">{{ offering.title }}</h1>
          <p class="mt-5 text-xl leading-9 text-gray-700">{{ offering.description }}</p>
          <p class="mt-5 text-lg leading-8 text-gray-700">{{ offering.communityCopy }}</p>

          <dl class="mt-8 divide-y divide-gray-200 border-y border-gray-200">
            <div class="flex justify-between gap-6 py-4">
              <dt class="text-sm font-medium text-gray-500">Format</dt>
              <dd class="text-right text-sm text-gray-900">{{ offering.format }}</dd>
            </div>
            <div class="flex justify-between gap-6 py-4">
              <dt class="text-sm font-medium text-gray-500">Length</dt>
              <dd class="text-right text-sm text-gray-900">{{ offering.duration }}</dd>
            </div>
            <div class="flex justify-between gap-6 py-4">
              <dt class="text-sm font-medium text-gray-500">Best For</dt>
              <dd class="max-w-sm text-right text-sm text-gray-900">{{ offering.audience }}</dd>
            </div>
          </dl>

          <section class="mt-10">
            <h2 class="text-2xl font-semibold text-black">What Students Learn</h2>
            <ul class="mt-5 space-y-3">
              <li
                v-for="detail in offering.details"
                :key="detail"
                class="border-l-2 border-black pl-4 text-base leading-7 text-gray-700"
              >
                {{ detail }}
              </li>
            </ul>
          </section>

          <section class="mt-10 border-t border-gray-200 pt-8">
            <h2 class="text-2xl font-semibold text-black">Community-Focused Instruction</h2>
            <p class="mt-4 text-base leading-7 text-gray-700">
              Classes can be shaped for East Los Angeles schools, neighborhood groups, families, and individual students. The goal is to make printmaking approachable while honoring the stories, images, and lived experience students bring into the room.
            </p>
          </section>

          <NuxtLink
            :to="{ path: '/', query: { class: offering.slug }, hash: '#contact' }"
            class="mt-10 inline-flex bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-900"
          >
            Ask About This Class
          </NuxtLink>
        </div>
      </div>
    </article>
  </main>
</template>
