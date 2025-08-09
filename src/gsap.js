/* global gsap, ScrollTrigger, Lenis */
gsap.registerPlugin(ScrollTrigger)

window.addEventListener("load", () => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual"
  }

  // Lenis smooth scrolling
  const lenis = new Lenis({
    autoRaf: false,
    duration: 1.2,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  })

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
    ScrollTrigger.update()
  })

  setTimeout(() => ScrollTrigger.refresh(), 250)
  window.addEventListener("resize", () => ScrollTrigger.refresh())

  const sections = [
    ".home-container",
    ".about-container",
    ".skills-container",
  ]

  sections.forEach((selector, i) => {
    const section = document.querySelector(selector)

    // Assign z-index so later sections are above earlier ones
    if (section) {
      section.style.zIndex = String(100 + i) // 100, 101, 102, ...
    }

    if (i === 0) return // skip animating first section

    // Slide from below over the previous section
    gsap.fromTo(
      section,
      { yPercent: 100 },
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // starts when bottom of section hits viewport
          end: "top top", // ends when top reaches top of viewport
          scrub: true,
        },
      }
    )
  })
})
