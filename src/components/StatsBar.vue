<script setup>
import { reactive, watch } from 'vue'
import { stats } from '../data/portfolio.js'
import { useInView } from '../composables/useInView.js'

const { target, inView } = useInView()

// Displayed (animating) values, start at 0.
const display = reactive(stats.map(() => 0))

function animate() {
  const duration = 1500
  const start = performance.now()
  function frame(now) {
    const t = Math.min((now - start) / duration, 1)
    // easeOutCubic
    const eased = 1 - Math.pow(1 - t, 3)
    stats.forEach((s, i) => {
      display[i] = Math.round(s.value * eased)
    })
    if (t < 1) requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

watch(inView, (v) => v && animate())
</script>

<template>
  <section id="stats" ref="target" class="relative">
    <div class="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-24 text-center lg:grid-cols-4 lg:px-8">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        v-reveal="{ delay: i * 90 }"
      >
        <p class="font-display text-4xl font-bold text-white sm:text-5xl">
          <span class="text-gradient">{{ display[i] }}{{ stat.suffix }}</span>
        </p>
        <p class="mt-2 text-sm font-medium text-zinc-400">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>
