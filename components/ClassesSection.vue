<script setup>
import classOfferings from '~/data/classes.js'
</script>

<template>
  <section class="py-20">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:px-8">
      <div>
        <p class="text-sm font-medium uppercase tracking-wide text-gray-500">Classes</p>
        <h2 class="mt-3 text-4xl font-semibold text-black md:text-5xl">Learn printmaking by hand</h2>
        <p class="mt-5 text-lg leading-8 text-gray-700">
          Private and small-group instruction in linocuts, etching, papermaking, printmaking, and project-based studio work for East Los Angeles students and neighbors.
        </p>
        <NuxtLink
          to="/classes"
          class="mt-8 inline-flex bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-900"
        >
          View Classes
        </NuxtLink>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <NuxtLink
          v-for="offering in classOfferings"
          :key="offering.id"
          :to="`/classes/${offering.slug}`"
          class="group block"
        >
          <div class="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gray-100">
            <NuxtImg
              :src="offering.image"
              :alt="offering.title"
              sizes="sm:100vw md:50vw lg:25vw"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <h3 class="mt-4 text-xl font-semibold text-black">{{ offering.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">{{ offering.summary }}</p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
