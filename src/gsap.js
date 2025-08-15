import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initHeaderAnimation() {
  const header = document.querySelector(".Header")
  const pfp = document.querySelector(".Main-pfp-container")
  const headerTitle = document.querySelector(".Header-title")
  const headerOtherStuff = document.querySelectorAll(".Header .Header-a") // change selector for your other elements

  if (!header || !pfp || !headerTitle) return

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pfp,
      start: "bottom top", // start animation after profile picture
      toggleActions: "play none none reverse",
    },
  })

  tl.fromTo(
    header,
    { y: -50, opacity: 0, pointerEvents: "none" },
    { y: 0, opacity: 1, pointerEvents: "auto", duration: 0.5 }
  )
    .fromTo(
      headerTitle,
      { opacity: 0, x: 100 }, // start slightly right & hidden
      { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
    )
    .fromTo(
      headerTitle,
      { opacity: 0, x: 100 }, // start slightly right & hidden
      { opacity: 0, x: 0, duration: 0.1, ease: "power2.out" }
    )
    .fromTo(
      headerOtherStuff,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
      "+=0.2" // slight pause after title slides in
    )
}
