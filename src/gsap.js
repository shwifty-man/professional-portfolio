import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initHeaderAnimation() {
  const header = document.querySelector(".Header")
  const pfp = document.querySelector(".Main-pfp-container")

  if (!header || !pfp) return

  gsap.fromTo(
    header,
    { y: -50, opacity: 0, pointerEvents: 'none' },
    {
      y: 0,
      opacity: 1,
      pointerEvents: 'auto',
      scrollTrigger: {
        trigger: pfp,
        start: "top top", // adjust where the animation starts
        toggleActions: "play none none reverse",
      },
    }
  )
}
