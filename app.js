function byId(id){
  return document.getElementById(id)
}

function pad2(n){
  return String(n).padStart(2, "0")
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

const TOGETHER_START = new Date(2025, 10, 2, 20, 0, 0)

function updateTogetherTimer(){
  const el = byId("timerText")
  if (!el){
    return
  }

  const now = new Date()
  let diffMs = now.getTime() - TOGETHER_START.getTime()

  if (diffMs < 0){
    diffMs = 0
  }

  const totalSeconds = Math.floor(diffMs / 1000)

  const days = Math.floor(totalSeconds / (24 * 60 * 60))
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
  const seconds = totalSeconds % 60

  el.textContent = `${days} days ${pad2(hours)} hours ${pad2(minutes)} minutes ${pad2(seconds)} seconds`
}

function startTogetherTimer(){
  updateTogetherTimer()
  setInterval(updateTogetherTimer, 1000)
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

function initHome(){
  const homePhoto = byId("homePhoto")
  if (homePhoto){
    homePhoto.style.backgroundImage = "url('images/image1.jpg')"
  }

  const dailyLine = byId("dailyLine")
  if (dailyLine){
    const lines = ["you’re loved.", "i’m proud of you.", "i miss you.", "you’re my favourite."]
    dailyLine.textContent = lines[Math.floor(Math.random() * lines.length)]
  }

  const sparkleBtn = byId("sparkleBtn")
  if (sparkleBtn){
    sparkleBtn.addEventListener("click", () => {
      showToast("💜")
      burstSparkles(12)
    })
  }

  startTogetherTimer()
}

document.addEventListener("DOMContentLoaded", () => {
  addTilt()
  initHome()
})
