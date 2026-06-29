<script setup>
import { experiences, education } from '../data/portfolio.js'

// Wrap any term found in `terms` with a <strong> so metrics & tool names
// pop during a rapid recruiter scan, without hand-marking every bullet.
function emphasize(text, terms) {
  if (!terms || terms.length === 0) return escapeHtml(text)
  const ordered = [...terms].sort((a, b) => b.length - a.length)
  let safe = escapeHtml(text)
  for (const term of ordered) {
    const safeTerm = escapeHtml(term)
    const pattern = new RegExp(`(${escapeRegExp(safeTerm)})`, 'g')
    safe = safe.replace(pattern, '<strong class="font-semibold text-white">$1</strong>')
  }
  return safe
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
</script>

<template>
  <section id="experience" class="mx-auto max-w-6xl px-6 py-24 lg:px-8">
    <div v-reveal class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
          <span class="h-px w-8 bg-brand-500"></span> Career
        </p>
        <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Experience</h2>
      </div>
      <span class="text-xs font-medium uppercase tracking-wide text-zinc-500">18+ months · 4 internships</span>
    </div>

    <!-- Timeline -->
    <ol class="mt-12 space-y-8">
      <li
        v-for="(job, index) in experiences"
        :key="job.company + job.period"
        v-reveal="{ delay: index * 90 }"
        class="group relative grid grid-cols-[auto_1fr] gap-x-5 sm:grid-cols-[11rem_auto_1fr] sm:gap-x-8"
      >
        <!-- Period (desktop column) -->
        <div class="hidden pt-1 text-right sm:block">
          <p class="text-xs font-medium text-zinc-500">{{ job.period }}</p>
        </div>

        <!-- Rail + node -->
        <div class="relative flex flex-col items-center">
          <span
            class="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
            :class="job.current
              ? 'border-brand-500 bg-brand-500 shadow-[0_0_12px_2px_rgba(250,90,30,0.6)]'
              : 'border-zinc-600 bg-zinc-950 group-hover:border-brand-500'"
          ></span>
          <span class="mt-1 w-px grow bg-zinc-800"></span>
        </div>

        <!-- Content -->
        <div class="rounded-2xl border border-transparent pb-2 transition-all duration-300 group-hover:border-zinc-800 group-hover:bg-zinc-900/40 sm:p-5 sm:group-hover:-translate-y-0.5">
          <p class="text-xs font-medium text-zinc-500 sm:hidden">{{ job.period }}</p>
          <div class="mt-1 flex flex-wrap items-center gap-2 sm:mt-0">
            <h3 class="font-display text-lg font-semibold text-white">{{ job.role }}</h3>
            <span
              v-if="job.current"
              class="rounded-full bg-brand-500/15 px-2 py-0.5 text-[11px] font-medium text-brand-300 ring-1 ring-inset ring-brand-500/30"
            >Current</span>
          </div>
          <p class="text-sm font-medium text-zinc-400">
            {{ job.company }} <span class="text-zinc-600">·</span> {{ job.location }}
          </p>

          <ul class="mt-4 space-y-3">
            <li
              v-for="(point, i) in job.highlights"
              :key="i"
              class="flex gap-3 text-sm leading-relaxed text-zinc-400"
            >
              <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden="true"></span>
              <span v-html="emphasize(point.text, point.terms)"></span>
            </li>
          </ul>
        </div>
      </li>
    </ol>

    <!-- Education -->
    <div class="mt-16">
      <h3 v-reveal class="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Education</h3>
      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <div
          v-for="(edu, index) in education"
          :key="edu.degree"
          v-reveal="{ delay: index * 90 }"
          class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50"
        >
          <div class="flex items-start justify-between gap-3">
            <h4 class="font-display text-sm font-semibold text-white">{{ edu.degree }}</h4>
            <span class="shrink-0 text-xs font-medium text-zinc-500">{{ edu.period }}</span>
          </div>
          <p class="mt-1 text-sm text-zinc-400">{{ edu.school }}</p>
          <p class="mt-1 text-sm font-medium text-brand-400">{{ edu.detail }}</p>
          <div v-if="edu.coursework.length" class="mt-3 flex flex-wrap gap-1.5">
            <span
              v-for="course in edu.coursework"
              :key="course"
              class="rounded-md border border-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-500"
            >{{ course }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
