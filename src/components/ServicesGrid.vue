<script setup>
import { services } from '../data/portfolio.js'

const icons = {
  bot: 'M9 2a1 1 0 0 1 2 0v1h2V2a1 1 0 1 1 2 0v1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3H5a1 1 0 1 1 0-2h1v-4H5a1 1 0 0 1 0-2h1V6a3 3 0 0 1 3-3V2Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z',
  eye: 'M12 5c-5 0-8.5 4.5-9.5 6.5C3.5 13.5 7 18 12 18s8.5-4.5 9.5-6.5C20.5 9.5 17 5 12 5Zm0 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z',
  chart: 'M4 20a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v14h14a1 1 0 1 1 0 2H4Zm4-4a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Zm4 0a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1Zm4 0a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1Z',
  code: 'M8.7 7.3a1 1 0 0 1 0 1.4L5.42 12l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 0Zm6.6 0a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4L18.6 12l-3.3-3.3a1 1 0 0 1 0-1.4Z',
  cpu: 'M9 3a1 1 0 0 1 1 1v1h4V4a1 1 0 1 1 2 0v1a3 3 0 0 1 3 3h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3 3v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1a3 3 0 0 1-3-3H4a1 1 0 1 1 0-2h1v-4H4a1 1 0 0 1 0-2h1a3 3 0 0 1 3-3V4a1 1 0 0 1 1-1Zm0 6v6h6V9H9Z',
  spark: 'M12 2a1 1 0 0 1 .95.69l1.4 4.27 4.48.02a1 1 0 0 1 .59 1.8l-3.62 2.64 1.36 4.28a1 1 0 0 1-1.54 1.12L12 14.77l-3.62 2.65a1 1 0 0 1-1.54-1.12l1.36-4.28L4.58 9.4a1 1 0 0 1 .59-1.8l4.48-.02 1.4-4.27A1 1 0 0 1 12 2Z',
  check: 'M20.3 6.3a1 1 0 0 1 0 1.4l-8.4 8.4a1 1 0 0 1-1.4 0l-4.2-4.2a1 1 0 0 1 1.4-1.4l3.5 3.5 7.7-7.7a1 1 0 0 1 1.4 0Z'
}

const pad = (n) => String(n + 1).padStart(2, '0')
</script>

<template>
  <section id="services" class="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
    <div v-reveal class="max-w-2xl">
      <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
        <span class="h-px w-8 bg-brand-500"></span> What I Do
      </p>
      <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Services &amp; expertise
      </h2>
      <p class="mt-3 text-zinc-400">
        End-to-end product work spanning QA strategy, backend engineering, and applied AI.
      </p>
    </div>

    <!-- Hairline matrix: sharp corners, shared borders, fill on hover -->
    <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(service, i) in services"
        :key="service.title"
        v-reveal="{ delay: (i % 3) * 90 }"
        class="group relative overflow-hidden rounded-2xl border border-[#fa5a1e]/30 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#fa5a1e]/60"
      >
        <div class="glow pointer-events-none absolute -right-10 -top-10 h-32 w-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        <div class="relative z-10">
          <div class="flex items-start justify-between">
            <div class="flex h-12 w-12 items-center justify-center border border-zinc-800 text-brand-500 transition-colors duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path :d="icons[service.icon]" />
              </svg>
            </div>
            <span class="font-display text-4xl font-bold leading-none text-zinc-800 transition-colors duration-300 group-hover:text-brand-500/40">{{ pad(i) }}</span>
          </div>

          <h3 class="mt-6 font-display text-lg font-semibold text-white">{{ service.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">{{ service.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
