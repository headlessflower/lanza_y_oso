<script setup>
import classOfferings from '~/data/classes.js'

useHead({
  title: 'Classes | Lanza y Oso'
})
</script>

<template>
  <main class="mt-32 px-4 sm:px-6 lg:px-8">
    <section class="mx-auto max-w-7xl">
      <div class="max-w-3xl">
        <AppBackButton />
        <h1 class="mt-10 text-4xl font-semibold text-black md:text-6xl">Classes</h1>
        <p class="mt-5 text-lg leading-8 text-gray-700">
          Hands-on printmaking classes for East Los Angeles students, families, and community groups who want to learn through materials, image-making, and time in the studio.
        </p>
      </div>

      <div class="mt-14 grid gap-8 md:grid-cols-2">
        <NuxtLink
          v-for="offering in classOfferings"
          :key="offering.id"
          :to="`/classes/${offering.slug}`"
          class="group block border-t border-gray-200 pt-8"
        >
          <div class="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gray-100">
            <NuxtImg
              :src="offering.image"
              :alt="offering.title"
              sizes="sm:100vw md:50vw"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          <div class="mt-6">
            <h2 class="text-3xl font-semibold text-black">{{ offering.title }}</h2>
            <p class="mt-3 text-lg leading-8 text-gray-700">{{ offering.summary }}</p>
            <p class="mt-4 text-sm leading-6 text-gray-600">{{ offering.communityCopy }}</p>

            <dl class="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
              <div>
                <dt class="font-medium text-gray-500">Format</dt>
                <dd class="mt-1 text-gray-900">{{ offering.format }}</dd>
              </div>
              <div>
                <dt class="font-medium text-gray-500">Length</dt>
                <dd class="mt-1 text-gray-900">{{ offering.duration }}</dd>
              </div>
            </dl>

            <span class="mt-6 inline-flex text-sm font-medium text-black">
              View Class
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
