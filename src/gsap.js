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

  const sections = [".home-container", ".about-container", ".skills-container"]

  sections.forEach((selector, i) => {
    const section = document.querySelector(selector)

    if (section) {
      section.style.zIndex = String(100 + i)
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
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    )
  })

  // Separate animation for Main-pfp-container
  gsap.fromTo(
    ".Header",
    { y: -50, opacity: 0, pointerEvents: "none" },
    {
      y: 0,
      opacity: 1,
      pointerEvents: "auto",
      scrollTrigger: {
        trigger: ".Main-pfp-container",
        start: "top top",
        end: "bottom top+=1",
        toggleActions: "play none none reverse",
      },
    }
  )

})
