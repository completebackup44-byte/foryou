const NOTE_DATA = [
  { id: "sad", title: "sad", emoji: "🥺", tags: [], notes: ["PASTE HERE", "PASTE HERE", "PASTE HERE", "PASTE HERE", "PASTE HERE"] },
  { id: "anxious", title: "anxious", emoji: "🌧️", tags: [], notes: ["PASTE HERE", "PASTE HERE", "PASTE HERE", "PASTE HERE", "PASTE HERE"] },
  { id: "miss", title: "miss you", emoji: "🫶", tags: [], notes: ["PASTE HERE", "PASTE HERE", "PASTE HERE", "PASTE HERE", "PASTE HERE"] },
  { id: "sleep", title: "can’t sleep", emoji: "🌙", tags: [], notes: ["PASTE HERE", "PASTE HERE", "PASTE HERE", "PASTE HERE", "PASTE HERE"] }
]

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

function clampIndex(i, len){
  if (len <= 0){
    return 0
  }

  while (i < 0){
    i = i + len
  }

  while (i >= len){
    i = i - len
  }

  return i
}

function createCard(item){
  const a = document.createElement("a")
  a.className = "tile"
  a.href = `#${item.id}`
  a.setAttribute("data-tilt", "")

  const emoji = document.createElement("div")
  emoji.className = "tile-emoji"
  emoji.textContent = item.emoji

  const title = document.createElement("div")
  title.className = "tile-title"
  title.textContent = item.title

  a.appendChild(emoji)
  a.appendChild(title)

  a.addEventListener("click", (e) => {
    e.preventDefault()
    openModal(item.id, 0)
    history.replaceState(null, "", `#${item.id}`)
  })

  return a
}

let currentCategory = null
let currentIndex = 0

function openModal(categoryId, noteIndex){
  const cat = NOTE_DATA.find(x => x.id === categoryId)
  if (!cat){
    return
  }

  currentCategory = cat
  currentIndex = clampIndex(noteIndex, cat.notes.length)

  const modal = byId("modal")
  byId("modalTitle").textContent = `${cat.emoji} ${cat.title}`
  byId("noteText").textContent = cat.notes[currentIndex]

  const pillRow = byId("pillRow")
  pillRow.innerHTML = ""

  modal.classList.add("show")
}

function renderGrid(filterText){
  const grid = byId("notesGrid")
  grid.innerHTML = ""

  const q = (filterText || "").trim().toLowerCase()

  for (const item of NOTE_DATA){
    const hay = `${item.title} ${item.id}`.toLowerCase()
    if (q.length > 0 && !hay.includes(q)){
      continue
    }

    grid.appendChild(createCard(item))
  }
}

function randomPick(){
  const cat = NOTE_DATA[Math.floor(Math.random() * NOTE_DATA.length)]
  const idx = Math.floor(Math.random() * cat.notes.length)
  openModal(cat.id, idx)
}

function init(){
  renderGrid("")

  byId("search").addEventListener("input", (e) => {
    renderGrid(e.target.value)
  })

  byId("randomBtn").addEventListener("click", () => {
    randomPick()
  })

  const modal = byId("modal")

  byId("closeModal").addEventListener("click", () => {
    modal.classList.remove("show")
  })

  modal.addEventListener("click", (e) => {
    if (e.target === modal){
      modal.classList.remove("show")
    }
  })

  byId("prevNote").addEventListener("click", () => {
    currentIndex = clampIndex(currentIndex - 1, currentCategory.notes.length)
    byId("noteText").textContent = currentCategory.notes[currentIndex]
  })

  byId("nextNote").addEventListener("click", () => {
    currentIndex = clampIndex(currentIndex + 1, currentCategory.notes.length)
    byId("noteText").textContent = currentCategory.notes[currentIndex]
  })

  byId("copyNote").addEventListener("click", async () => {
    const text = byId("noteText").textContent

    try{
      await navigator.clipboard.writeText(text)
      showToast("copied 💜")
    }catch{
      showToast("can’t copy")
    }
  })

  if (location.hash){
    const id = location.hash.replace("#", "")
    if (NOTE_DATA.some(x => x.id === id)){
      openModal(id, 0)
    }
  }
}

document.addEventListener("DOMContentLoaded", init)
