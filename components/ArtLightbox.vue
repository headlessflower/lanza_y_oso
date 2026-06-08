<script setup>
import { onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:open'])

function close() {
  if (import.meta.client) {
    window.requestAnimationFrame(() => {
      emit('update:open', false)
    })
    return
  }

  emit('update:open', false)
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    close()
  }
}

function setBodyScrollLock(locked) {
  if (import.meta.server) {
    return
  }

  document.body.style.overflow = locked ? 'hidden' : ''
}

watch(
  () => props.open,
  (open) => {
    if (import.meta.server) {
      return
    }

    setBodyScrollLock(open)

    if (open) {
      window.addEventListener('keydown', handleKeydown)
    } else {
      window.removeEventListener('keydown', handleKeydown)
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  if (import.meta.client) {
    setBodyScrollLock(false)
    window.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-6 sm:px-8"
        role="dialog"
        aria-modal="true"
        :aria-label="title ? `Expanded view of ${title}` : 'Expanded artwork view'"
        @click.self="close"
      >
        <button
          type="button"
          class="absolute left-1/2 top-4 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center bg-white text-black transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Close expanded artwork"
          @pointerup.stop.prevent="close"
          @click.stop="close"
        >
          <span class="absolute h-6 w-0.5 rotate-45 bg-current"></span>
          <span class="absolute h-6 w-0.5 -rotate-45 bg-current"></span>
        </button>

        <figure class="flex max-h-full w-full max-w-7xl flex-col items-center gap-4">
          <NuxtImg
            :src="src"
            :alt="alt"
            sizes="100vw"
            class="max-h-[85vh] w-full object-contain"
          />
          <figcaption v-if="title" class="text-center text-sm font-medium text-white">
            {{ title }}
          </figcaption>
        </figure>
      </div>
    </Transition>
  </Teleport>
</template>
