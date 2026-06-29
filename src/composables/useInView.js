import { onBeforeUnmount, onMounted, ref } from 'vue'

// Returns a `target` ref to bind to an element and an `inView` boolean that
// flips true (once) when the element first scrolls into view. Used to trigger
// count-up numbers and skill-bar fills.
export function useInView(options = {}) {
  const target = ref(null)
  const inView = ref(false)
  let observer

  onMounted(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      inView.value = true
      return
    }
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inView.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.35, ...options }
    )
    if (target.value) observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return { target, inView }
}
