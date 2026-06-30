<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/portfolio.js'

const activeFilter = ref('All')

const filters = computed(() => {
  const categories = [...new Set(projects.map((p) => p.category))]
  return ['All', ...categories]
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter((p) => p.category === activeFilter.value)
})

function setFilter(filter) {
  activeFilter.value = filter
}

const typeStyles = {
  Project: 'text-brand-300 ring-1 ring-inset ring-brand-500/40',
  Publication: 'text-amber-300 ring-1 ring-inset ring-amber-500/40',
  Engineering: 'text-zinc-300 ring-1 ring-inset ring-zinc-600/60'
}

const pad = (n) => String(n + 1).padStart(2, '0')
</script>

<template>
  <section id="projects" class="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
    <div v-reveal class="max-w-2xl">
      <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
        <span class="h-px w-8 bg-brand-500"></span> Portfolio
      </p>
      <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Selected projects &amp; research
      </h2>
      <p class="mt-3 text-zinc-400">Selected work across QA, backend development, computer vision, and published research.</p>
    </div>

    <!-- Filter tabs (editorial underline, not pills) -->
    <div v-reveal="{ delay: 60 }" class="mt-10 flex flex-wrap gap-x-7 gap-y-2 border-b border-zinc-800" role="tablist" aria-label="Filter projects by category">
      <button
        v-for="filter in filters"
        :key="filter"
        type="button"
        role="tab"
        :aria-selected="activeFilter === filter"
        @click="setFilter(filter)"
        class="relative -mb-px py-3 text-sm font-medium transition-colors focus-visible:outline-none"
        :class="activeFilter === filter ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'"
      >
        {{ filter }}
        <span
          class="absolute inset-x-0 -bottom-px h-0.5 bg-brand-500 transition-transform duration-300"
          :class="activeFilter === filter ? 'scale-x-100' : 'scale-x-0'"
        ></span>
      </button>
    </div>

    <!-- Hairline matrix -->
    <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        v-reveal="{ delay: index * 70 }"
        class="group relative flex flex-col overflow-hidden rounded-2xl border border-[#fa5a1e]/30 bg-gradient-to-br from-zinc-900 to-zinc-950 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#fa5a1e]/60"
      >
        <div class="glow pointer-events-none absolute -right-12 -top-12 h-36 w-36 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        <div class="relative z-10 flex flex-1 flex-col">
          <div class="flex items-start justify-between gap-3">
            <span class="font-mono text-xs text-zinc-600">{{ pad(index) }}</span>
            <span class="shrink-0 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide" :class="typeStyles[project.type]">{{ project.type }}</span>
          </div>

          <h3 class="mt-4 font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-400">{{ project.title }}</h3>
          <p class="mt-0.5 text-sm text-zinc-500">{{ project.subtitle }}</p>

          <p class="mt-4 text-sm leading-relaxed text-zinc-400">{{ project.description }}</p>

          <!-- Impact: sharp left-accent block -->
          <div class="mt-5 border-l-2 border-brand-500 bg-zinc-950/40 py-2 pl-4">
            <p class="text-[10px] font-semibold uppercase tracking-wider text-brand-500">Impact</p>
            <p class="mt-1 text-sm font-medium text-zinc-200">{{ project.impact }}</p>
          </div>

          <div class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="tool in project.tools"
              :key="tool"
              class="border border-zinc-800 bg-zinc-950/50 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
            >{{ tool }}</span>
          </div>

          <div class="mt-auto flex flex-wrap gap-4 border-t border-zinc-800 pt-4">
            <a
              v-for="link in project.links"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-brand-400"
            >
              <svg v-if="link.kind === 'code'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
              <svg v-else class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M4 3.5A1.5 1.5 0 0 1 5.5 2h5.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 16 6.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-13Zm7 .56V6a.5.5 0 0 0 .5.5h1.94L11 4.06ZM7 9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7Zm0 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7Z" />
              </svg>
              {{ link.label }}
              <svg class="h-3 w-3 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>

    <p
      v-if="filteredProjects.length === 0"
      class="border border-dashed border-zinc-800 py-12 text-center text-sm text-zinc-500"
    >
      No projects in this category yet.
    </p>
  </section>
</template>
