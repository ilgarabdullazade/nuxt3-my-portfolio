export function useParallaxBackground() {
  const parallax = reactive(useParallax(process.client ? document.body : null))
  const isMobile = useMediaQuery('not all and (min-width: 1024px)')

  const parallaxStyle = computed(() => {
    const tiltOffset = 20 * parallax.tilt
    const rollOffset = 20 * parallax.roll

    return {
      backgroundPosition: isMobile.value
        ? 'center'
        : `calc(50% + ${isNaN(tiltOffset) ? 0 : tiltOffset}px) calc(50% + ${
            isNaN(rollOffset) ? 0 : rollOffset
          }px)`,
    }
  })

  return {
    parallaxStyle,
  }
}
