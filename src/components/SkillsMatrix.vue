<script setup>
import { skillGroups, extras } from '../data/portfolio.js'

const pad = (n) => String(n + 1).padStart(2, '0')
</script>

<template>
  <section id="skills">
    <div class="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div v-reveal class="max-w-2xl">
        <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
          <span class="h-px w-8 bg-brand-500"></span> Tech Stack
        </p>
        <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tools &amp; capabilities
        </h2>
        <p class="mt-3 text-zinc-400">Grouped by domain — the stack I reach for to ship.</p>
      </div>

      <!-- Hairline matrix -->
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(group, index) in skillGroups"
          :key="group.category"
          v-reveal="{ delay: (index % 3) * 80 }"
          class="group relative overflow-hidden rounded-2xl border border-[#fa5a1e]/30 bg-gradient-to-br from-zinc-900 to-zinc-950 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#fa5a1e]/60"
        >
          <div class="glow pointer-events-none absolute -right-10 -top-10 h-32 w-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <div class="relative z-10">
            <div class="flex items-baseline justify-between">
              <h3 class="font-display text-sm font-semibold uppercase tracking-wide text-white">{{ group.category }}</h3>
              <span class="font-mono text-xs text-zinc-700 transition-colors group-hover:text-brand-500/50">{{ pad(index) }}</span>
            </div>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="skill in group.skills"
                :key="skill"
                class="border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 font-mono text-xs text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-brand-500/60 hover:text-brand-400"
              >{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Beyond work -->
      <div v-reveal class="mt-5 overflow-hidden rounded-2xl border border-[#fa5a1e]/30 bg-gradient-to-br from-zinc-900 to-zinc-950 p-7">
        <h3 class="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Beyond the desk</h3>
        <ul class="mt-4 grid gap-3 sm:grid-cols-2">
          <li
            v-for="item in extras"
            :key="item"
            class="flex gap-3 text-sm text-zinc-400"
          >
            <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden="true"></span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
