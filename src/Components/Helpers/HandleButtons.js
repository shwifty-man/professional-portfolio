function HandleLetsTalk() {
  const input = document.querySelector(".top-input")
  if (!input) return

  const top =
    input.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2

  window.scrollTo({
    top: top,
    behavior: "smooth",
  })

  setTimeout(() => input.focus(), 500) // focus after scroll
}

export default HandleLetsTalk
