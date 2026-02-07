function byId(id){
  return document.getElementById(id)
}

function showToast(text){
  const toast = byId("toast")
  if (!toast){
    return
  }

  toast.textContent = text
  toast.classList.add("show")

  clearTimeout(window.__toastTimer)
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("show")
  }, 1400)
}

function clamp(v, a, b){
  if (v < a){
    return a
  }

  if (v > b){
    return b
  }

  return v
}

function addTilt(){
  const tiles = document.querySelectorAll("[data-tilt]")
  for (const tile of tiles){
    tile.addEventListener("mousemove", (e) => {
      const rect = tile.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const rx = (0.5 - y) * 6
      const ry = (x - 0.5) * 8

      tile.style.transform = `translateY(-2px) rotateX(${rx}deg) rotateY(${ry}deg)`
    })

    tile.addEventListener("mouseleave", () => {
      tile.style.transform = ""
    })
  }
}

function initHome(){
  const homePhoto = byId("homePhoto")
  if (homePhoto){
    homePhoto.style.backgroundImage = "url('images/photo1.jpg')"
  }

  const lines = [
    "You’re loved. A lot.",
    "I’m proud of you, always.",
    "You’re my favourite person.",
    "Even on bad days, I’m with you.",
    "Soft reminder: you matter."
  ]

  const dailyLine = byId("dailyLine")
  if (dailyLine){
    const i = Math.floor(Math.random() * lines.length)
    dailyLine.textContent = lines[i]
  }

  const sparkleBtn = byId("sparkleBtn")
  if (sparkleBtn){
    sparkleBtn.addEventListener("click", () => {
      showToast("✨ hi pretty")
      burstSparkles(14)
    })
  }
}

function burstSparkles(count){
  for (let i = 0; i < count; i++){
    const s = document.createElement("div")
    s.textContent = ["✨","💜","✦","⋆"][Math.floor(Math.random() * 4)]
    s.style.position = "fixed"
    s.style.left = `${Math.random() * 100}%`
    s.style.top = `${Math.random() * 100}%`
    s.style.fontSize = `${12 + Math.random() * 16}px`
    s.style.opacity = "0"
    s.style.transform = "translateY(6px) scale(0.9)"
    s.style.transition = "opacity 220ms ease, transform 520ms ease"
    s.style.pointerEvents = "none"
    s.style.zIndex = "70"

    document.body.appendChild(s)

    requestAnimationFrame(() => {
      s.style.opacity = "1"
      s.style.transform = `translateY(-10px) scale(1)`
    })

    setTimeout(() => {
      s.style.opacity = "0"
      s.style.transform = `translateY(-24px) scale(0.9)`
    }, 400)

    setTimeout(() => {
      s.remove()
    }, 900)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  addTilt()
  initHome()
})
