<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue'
import ServicesGrid from './components/ServicesGrid.vue'
import AboutSkills from './components/AboutSkills.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import SkillsMatrix from './components/SkillsMatrix.vue'
import ContactModal from './components/ContactModal.vue'
import { profile } from './data/portfolio.js'

const contactOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' }
]

const scrolled = ref(false)
const progress = ref(0)
const menuOpen = ref(false)

function onScroll() {
  const doc = document.documentElement
  const max = doc.scrollHeight - doc.clientHeight
  progress.value = max > 0 ? (doc.scrollTop / max) * 100 : 0
  scrolled.value = doc.scrollTop > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="relative min-h-screen font-sans text-zinc-300 antialiased">
    <!-- Shared backdrop — the exact front-page background (faint grid + orange glows),
         fixed so the whole portfolio sits on one consistent background. -->
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-60"></div>
      <div class="glow absolute -left-32 top-16 h-[28rem] w-[28rem] animate-glow-pulse"></div>
      <div class="glow absolute -right-20 bottom-0 h-[24rem] w-[24rem] animate-glow-pulse [animation-delay:1.5s]"></div>
    </div>

    <!-- Scroll progress bar -->
    <div class="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent">
      <div class="h-full bg-gradient-to-r from-brand-600 to-brand-400 transition-[width] duration-150 ease-out" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- Sticky nav -->
    <header
      class="fixed inset-x-0 top-0 z-40 transition-all duration-300"
      :class="scrolled ? 'border-b border-zinc-900 bg-[#0a0a0b]/85 backdrop-blur-md' : 'bg-transparent'"
    >
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" class="flex flex-col leading-none text-white">
          <span class="font-display text-lg font-bold tracking-tight sm:text-xl">{{ profile.name }}</span>
          <span class="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500">{{ profile.title }}</span>
        </a>

        <div class="hidden items-center gap-1 md:flex">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="group relative rounded-md px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            {{ link.label }}
            <span class="absolute inset-x-3 bottom-1 h-px scale-x-0 bg-brand-500 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>

        <div class="flex items-center gap-3">
          <button
            type="button"
            class="btn-primary hidden rounded-lg px-4 py-2 text-sm font-semibold hover:-translate-y-0.5 sm:inline-block"
            @click="contactOpen = true"
          >Let's Connect</button>

          <button
            type="button"
            class="md:hidden text-zinc-300"
            :aria-expanded="menuOpen"
            aria-label="Toggle menu"
            @click="menuOpen = !menuOpen"
          >
            <svg v-if="!menuOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
            <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      <div v-if="menuOpen" class="border-t border-zinc-900 bg-[#0a0a0b]/95 backdrop-blur md:hidden">
        <div class="space-y-1 px-6 py-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-brand-400"
            @click="menuOpen = false"
          >{{ link.label }}</a>
          <button type="button" class="btn-primary mt-2 block w-full rounded-lg px-3 py-2 text-center text-sm font-semibold" @click="contactOpen = true; menuOpen = false">Let's Connect</button>
        </div>
      </div>
    </header>

    <main class="pt-16">
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <AboutSkills />
      <ProjectGrid />
      <ExperienceTimeline />
      <SkillsMatrix />

      <!-- Freelance CTA -->
      <section class="relative overflow-hidden">
        <div class="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div v-reveal class="relative overflow-hidden rounded-3xl border border-[#fa5a1e]/30 bg-gradient-to-br from-zinc-900 to-zinc-950 px-8 py-14 text-center sm:px-16">
            <div class="glow pointer-events-none absolute -left-10 -top-10 h-56 w-56 animate-glow-pulse"></div>
            <div class="glow pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 animate-glow-pulse [animation-delay:1.5s]"></div>
            <p class="relative text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Let's build something</p>
            <h2 class="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Open to QA, backend, and AI engineering opportunities
            </h2>
            <p class="relative mx-auto mt-4 max-w-xl text-zinc-400">
              Have a project or role in mind? I'd love to hear about it — let's talk about how I can help you ship.
            </p>
            <div class="relative mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                class="btn-primary inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5"
                @click="contactOpen = true"
              >
                Let's Connect
              </button>
              <a
                :href="profile.resumeFile"
                download
                class="btn-outline inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-zinc-900">
      <div class="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center lg:px-8">
        <div>
          <a href="#top" class="flex flex-col leading-none text-white">
            <span class="font-display text-xl font-bold">{{ profile.name }}</span>
            <span class="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500">{{ profile.title }}</span>
          </a>
          <p class="mt-2 text-sm text-zinc-500">{{ profile.name }} — {{ profile.title }} · {{ profile.location }}</p>
        </div>
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
          <a :href="`mailto:${profile.email}`" class="text-zinc-400 transition-colors hover:text-brand-400">Email</a>
          <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="text-zinc-400 transition-colors hover:text-brand-400">GitHub</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="text-zinc-400 transition-colors hover:text-brand-400">LinkedIn</a>
        </div>
      </div>
      <div class="border-t border-zinc-900/80">
        <p class="mx-auto max-w-6xl px-6 py-5 text-xs text-zinc-600 lg:px-8">
          © {{ new Date().getFullYear() }} {{ profile.name }}. Built with Vue &amp; Tailwind.
        </p>
      </div>
    </footer>

    <!-- Contact dialog (opened by the Hire Me! buttons) -->
    <ContactModal v-model="contactOpen" :email="profile.email" />
  </div>
</template>
