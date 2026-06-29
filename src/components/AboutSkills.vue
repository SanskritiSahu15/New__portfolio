<script setup>
import { profile, proficiencies } from '../data/portfolio.js'
import { useInView } from '../composables/useInView.js'

const { target, inView } = useInView({ threshold: 0.25 })
</script>

<template>
  <section id="about" class="relative">
    <div class="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
      <!-- Left: image + experience badge -->
      <div v-reveal="{ delay: 0 }" class="reveal-left relative mx-auto w-full max-w-md">
        <div class="relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950">
          <!-- Decorative workspace image for the About section (the hero uses the real photo). -->
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80"
            alt="Developer workspace"
            class="h-full w-full object-cover grayscale"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent"></div>
        </div>

        <!-- Experience badge -->
        <div class="absolute -bottom-5 -right-4 animate-float rounded-2xl px-6 py-4 text-white shadow-[0_0_40px_-8px_rgba(250,90,30,0.8)]" style="background-color: #fa5a1e">
          <p class="font-display text-3xl font-bold leading-none">18+</p>
          <p class="mt-1 text-xs font-semibold uppercase tracking-wide">Months of<br />Experience</p>
        </div>
      </div>

      <!-- Right: copy + skill bars -->
      <div ref="target" v-reveal="{ delay: 120 }" class="reveal-right">
        <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
          <span class="h-px w-8 bg-brand-500"></span> About Me
        </p>
        <h2 class="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          Turning AI research into shipped product.
        </h2>
        <p class="mt-5 leading-relaxed text-zinc-400">
          {{ profile.valueProp }}
        </p>

        <!-- Animated proficiency bars -->
        <div class="mt-8 space-y-5">
          <div v-for="skill in proficiencies" :key="skill.label">
            <div class="flex items-center justify-between text-sm">
              <span class="font-medium text-zinc-200">{{ skill.label }}</span>
              <span class="font-mono text-xs" style="color: #ff6a35">{{ skill.value }}%</span>
            </div>
            <div class="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                class="h-full rounded-full transition-[width] duration-1000 ease-out"
                :style="{ width: inView ? skill.value + '%' : '0%', backgroundImage: 'linear-gradient(90deg, #e84309, #ff6a35)' }"
              ></div>
            </div>
          </div>
        </div>

        <div class="mt-9 flex flex-wrap gap-4">
          <a
            :href="profile.resumeFile"
            download
            class="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold hover:-translate-y-0.5"
          >
            Download Resume
          </a>
          <a
            :href="profile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold hover:-translate-y-0.5"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
