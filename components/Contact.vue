<script setup lang="ts">
import { ref, watch } from 'vue'
import homeArt from '~/data/art-main.js'
import classOfferings from '~/data/classes.js'
import { artworks } from '~/utils/artwork.js'
import { furniturePieces } from '~/utils/furniture.js'

const route = useRoute()
const name = ref('')
const email = ref('')
const selectedArt = ref('')
const message = ref('')
const inquiryItems = [
  ...homeArt.map((item) => ({
    label: item.title,
    value: item.title,
    type: 'Art'
  })),
  ...furniturePieces.map((item) => ({
    label: item.title,
    value: item.title,
    type: 'Furniture'
  })),
  ...classOfferings.map((item) => ({
    label: item.title,
    value: item.title,
    type: 'Class'
  }))
]

watch(
  () => route.query.art,
  (art) => {
    if (typeof art !== 'string') {
      return
    }

    const selectedArtwork = artworks.find((item) => item.slug === art || item.title === art)

    if (selectedArtwork) {
      selectedArt.value = selectedArtwork.title
    }
  },
  { immediate: true }
)

watch(
  () => route.query.furniture,
  (furniture) => {
    if (typeof furniture !== 'string') {
      return
    }

    const selectedPiece = furniturePieces.find((item) => item.slug === furniture || item.title === furniture)

    if (selectedPiece) {
      selectedArt.value = selectedPiece.title
      message.value = `I'm interested in ${selectedPiece.title}.`
    }
  },
  { immediate: true }
)

watch(
  () => route.query.class,
  (classSlug) => {
    if (typeof classSlug !== 'string') {
      return
    }

    const selectedClass = classOfferings.find((item) => item.slug === classSlug || item.title === classSlug)

    if (selectedClass) {
      selectedArt.value = selectedClass.title
      message.value = `I'm interested in ${selectedClass.title}.`
    }
  },
  { immediate: true }
)

function submitForm() {
  // TODO: replace with real submission logic
  console.log({
    name: name.value,
    email: email.value,
    selectedArt: selectedArt.value,
    message: message.value
  })
  // Reset fields
  name.value = ''
  email.value = ''
  selectedArt.value = ''
  message.value = ''
}
</script>

<template>
  <section id="contact" class="py-16">
    <div class="max-w-xl mx-auto text-center px-4">
      <!-- Decorator Label -->
      <div class="inline-flex items-center border border-gray-300 rounded-lg px-4 py-2 mb-4 space-x-2">
        <!-- Envelope Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8" />
        </svg>
        <span class="text-gray-700 font-medium">Contact</span>
      </div>

      <!-- Heading -->
      <h2 class="text-4xl font-light mb-2">Get in Touch</h2>
      <p class="text-gray-600 mb-8">Fill out the form below, and we'll respond promptly.</p>

      <!-- Form -->
      <form @submit.prevent="submitForm" class="space-y-4 text-left">
        <input
            v-model="name"
            type="text"
            placeholder="Name"
            class="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
        />
        <input
            v-model="email"
            type="email"
            placeholder="yourMail@mail.com"
            class="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
        />

        <select
            v-model="selectedArt"
            class="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
        >
          <option value="" disabled>Select a piece</option>
          <option
              v-for="(item, index) in inquiryItems"
              :key="index"
              :value="item.value"
          >
            {{ item.type }}: {{ item.label }}
          </option>
        </select>

        <textarea
            v-model="message"
            rows="6"
            placeholder="Your message..."
            class="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
            required
        />
        <button
            type="submit"
            class="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-900 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>

</style>
