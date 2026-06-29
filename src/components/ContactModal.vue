<script setup>
import { onBeforeUnmount, nextTick, ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  email: { type: String, required: true }
})
const emit = defineEmits(['update:modelValue'])

// FormSubmit endpoint (AJAX so we never navigate away from the page).
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/harshityuvraj10@gmail.com'

const name = ref('')
const fromEmail = ref('')
const message = ref('')
const sent = ref(false)
const sending = ref(false)
const error = ref('')
const nameInput = ref(null)

function close() {
  emit('update:modelValue', false)
}

function onKey(e) {
  if (e.key === 'Escape') close()
}

async function submit() {
  if (sending.value) return
  sending.value = true
  error.value = ''
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: fromEmail.value,
        message: message.value,
        _subject: `Portfolio enquiry from ${name.value || 'someone'}`,
        _template: 'table',
        _captcha: 'false'
      })
    })
    const data = await res.json().catch(() => ({}))
    if (res.ok && (data.success === true || data.success === 'true')) {
      sent.value = true
    } else {
      error.value = data.message || 'Something went wrong. Please try again.'
    }
  } catch (e) {
    error.value = 'Could not send — check your connection and try again.'
  } finally {
    sending.value = false
  }
}

watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      document.addEventListener('keydown', onKey)
      document.documentElement.style.overflow = 'hidden'
      nextTick(() => nameInput.value?.focus())
    } else {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
      // reset for next time
      setTimeout(() => {
        sent.value = false
        error.value = ''
        name.value = ''
        fromEmail.value = ''
        message.value = ''
      }, 250)
    }
  }
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="close"></div>

        <!-- Dialog -->
        <div
          class="dialog-card relative w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
        >
          <div class="glow pointer-events-none absolute -right-12 -top-12 h-36 w-36"></div>

          <button
            type="button"
            aria-label="Close"
            class="absolute right-4 top-4 text-zinc-500 transition-colors hover:text-white"
            @click="close"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <!-- Form -->
          <template v-if="!sent">
            <h2 id="contact-title" class="relative font-display text-2xl font-bold text-white">Let's work together</h2>
            <p class="relative mt-1 text-sm text-zinc-400">
              Send me a message and I'll get back to you by email.
            </p>

            <form class="relative mt-6 space-y-4" @submit.prevent="submit">
              <div>
                <label for="c-name" class="mb-1.5 block text-sm font-medium text-zinc-300">Name</label>
                <input
                  id="c-name"
                  ref="nameInput"
                  v-model.trim="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  class="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-[#fa5a1e] focus:ring-1 focus:ring-[#fa5a1e]"
                />
              </div>

              <div>
                <label for="c-email" class="mb-1.5 block text-sm font-medium text-zinc-300">Email</label>
                <input
                  id="c-email"
                  v-model.trim="fromEmail"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  class="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-[#fa5a1e] focus:ring-1 focus:ring-[#fa5a1e]"
                />
              </div>

              <div>
                <label for="c-msg" class="mb-1.5 block text-sm font-medium text-zinc-300">Message</label>
                <textarea
                  id="c-msg"
                  v-model.trim="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about the role or project…"
                  class="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-[#fa5a1e] focus:ring-1 focus:ring-[#fa5a1e]"
                ></textarea>
              </div>

              <p v-if="error" class="text-sm text-red-400">{{ error }}</p>

              <div class="flex gap-3 pt-1">
                <button
                  type="submit"
                  :disabled="sending"
                  class="btn-primary inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <svg v-if="sending" class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4Z" />
                  </svg>
                  {{ sending ? 'Sending…' : 'Send Enquiry' }}
                </button>
                <button type="button" class="btn-outline inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold" @click="close">
                  Cancel
                </button>
              </div>
            </form>
          </template>

          <!-- Confirmation -->
          <div v-else class="relative py-6 text-center">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full" style="background-color: rgba(250, 90, 30, 0.15)">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#fa5a1e" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 class="mt-4 font-display text-xl font-bold text-white">Message sent!</h2>
            <p class="mt-1 text-sm text-zinc-400">
              Thanks for reaching out — I'll get back to you soon. You can also email me directly at
              <a :href="`mailto:${email}`" class="font-medium hover:underline" style="color: #ff6a35">{{ email }}</a>.
            </p>
            <button type="button" class="btn-outline mt-6 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold" @click="close">
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
