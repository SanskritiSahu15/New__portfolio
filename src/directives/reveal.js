// Scroll-reveal directive.
// Elements fade and rise into place the first time they enter the viewport,
// driven by a single shared IntersectionObserver (no scroll listeners).
//
// Usage:
//   v-reveal                       → reveals on enter
//   v-reveal="{ delay: 120 }"      → adds a 120ms stagger before animating

const supportsObserver =
  typeof window !== 'undefined' && 'IntersectionObserver' in window

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer

function getObserver() {
  if (observer || !supportsObserver) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target) // reveal once, then stop watching
      }
    },
    // Trigger a touch before the element is fully on-screen.
    { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
  )
  return observer
}

export const reveal = {
  mounted(el, binding) {
    // No animation when the user opts out of motion, or when the API is missing.
    if (prefersReducedMotion || !supportsObserver) {
      el.classList.add('reveal-visible')
      return
    }

    el.classList.add('reveal')
    const delay = binding.value && binding.value.delay
    if (delay) el.style.transitionDelay = `${delay}ms`

    getObserver().observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  }
}
