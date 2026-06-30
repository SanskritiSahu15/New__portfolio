<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile } from '../data/portfolio.js'

// Rotating role text under the name.
const roleIndex = ref(0)
const roleVisible = ref(true)
let timer

onMounted(() => {
  timer = setInterval(() => {
    roleVisible.value = false
    setTimeout(() => {
      roleIndex.value = (roleIndex.value + 1) % profile.roles.length
      roleVisible.value = true
    }, 350)
  }, 2600)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden"
  >
    <div class="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-28 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <!-- Left: copy -->
      <div>
        <div
          v-reveal
          class="relative inline-flex items-center gap-2 rounded-md bg-brand-500 px-3 py-1.5 text-sm font-semibold text-white"
        >
          Hello, I am
          <span class="absolute -bottom-1.5 left-6 h-3 w-3 rotate-45 bg-brand-500"></span>
        </div>

        <h1
          v-reveal="{ delay: 120 }"
          class="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {{ profile.name }}
        </h1>

        <!-- Rotating role -->
        <p v-reveal="{ delay: 220 }" class="mt-5 flex items-center gap-3 text-lg font-medium text-zinc-400 sm:text-xl">
          <span class="h-px w-8 bg-brand-500"></span>
          <span
            class="text-gradient font-display font-semibold transition-all duration-300"
            :class="roleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'"
          >{{ profile.roles[roleIndex] }}</span>
        </p>

        <p v-reveal="{ delay: 300 }" class="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
          {{ profile.tagline }}
        </p>

        <!-- CTAs -->
        <div v-reveal="{ delay: 380 }" class="mt-9 flex flex-wrap items-center gap-4">
          <a
            :href="profile.resumeFile"
            download
            class="btn-primary group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold hover:-translate-y-0.5"
          >
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 2a.75.75 0 0 1 .75.75v8.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V2.75A.75.75 0 0 1 10 2Z" />
              <path d="M3.5 14.5a.75.75 0 0 1 .75.75v1.5c0 .138.112.25.25.25h11a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 15.5 18.5h-11a1.75 1.75 0 0 1-1.75-1.75v-1.5a.75.75 0 0 1 .75-.75Z" />
            </svg>
            Download Resume
          </a>

          <a
            href="#projects"
            class="btn-outline inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold hover:-translate-y-0.5"
          >
            My Work
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" />
            </svg>
          </a>
        </div>

        <!-- Socials -->
        <div v-reveal="{ delay: 460 }" class="mt-10 flex items-center gap-5 text-zinc-500">
          <a :href="profile.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="transition-colors hover:text-brand-400">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
          </a>
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="transition-colors hover:text-brand-400">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.059-1.864-3.059-1.865 0-2.151 1.456-2.151 2.961v5.702h-3v-11h2.879v1.503h.041c.401-.759 1.379-1.561 2.839-1.561 3.036 0 3.597 1.999 3.597 4.599v6.456z" />
            </svg>
          </a>
          <span class="h-4 w-px bg-zinc-700"></span>
          <a :href="`mailto:${profile.email}`" class="text-sm font-medium transition-colors hover:text-brand-400">{{ profile.email }}</a>
        </div>
      </div>

      <!-- Right: availability card -->
      <div v-reveal="{ delay: 200 }" class="relative mx-auto flex w-full max-w-md flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur">
        <h3 class="font-display text-2xl font-semibold text-white">{{ profile.availability }}</h3>
        <p class="text-sm leading-relaxed text-zinc-400">
          I’m interested in opportunities where I can contribute to quality engineering, backend systems, and AI-driven product development.
        </p>
        <div class="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300">
          <span class="relative flex h-2.5 w-2.5">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          Open for new opportunities
        </div>
      </div>
    </div>
  </section>
</template>
