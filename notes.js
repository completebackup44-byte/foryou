const NOTE_DATA = [
  {
    id: "sad",
    title: "I’m sad",
    emoji: "🥺",
    tags: ["comfort", "soft"],
    notes: [
      "PLACEHOLDER NOTE 1 — paste your message here.",
      "PLACEHOLDER NOTE 2 — paste your message here.",
      "PLACEHOLDER NOTE 3 — paste your message here.",
      "PLACEHOLDER NOTE 4 — paste your message here.",
      "PLACEHOLDER NOTE 5 — paste your message here."
    ]
  },
  {
    id: "happy",
    title: "I’m happy",
    emoji: "🌷",
    tags: ["celebrate", "sweet"],
    notes: [
      "PLACEHOLDER NOTE 1",
      "PLACEHOLDER NOTE 2",
      "PLACEHOLDER NOTE 3",
      "PLACEHOLDER NOTE 4",
      "PLACEHOLDER NOTE 5"
    ]
  },
  {
    id: "lonely",
    title: "I’m lonely",
    emoji: "🫧",
    tags: ["close", "warm"],
    notes: [
      "PLACEHOLDER NOTE 1",
      "PLACEHOLDER NOTE 2",
      "PLACEHOLDER NOTE 3",
      "PLACEHOLDER NOTE 4",
      "PLACEHOLDER NOTE 5"
    ]
  },
  {
    id: "miss",
    title: "I miss you",
    emoji: "🫶",
    tags: ["us", "clingy"],
    notes: [
      "PLACEHOLDER NOTE 1",
      "PLACEHOLDER NOTE 2",
      "PLACEHOLDER NOTE 3",
      "PLACEHOLDER NOTE 4",
      "PLACEHOLDER NOTE 5"
    ]
  },
  {
    id: "anxious",
    title: "I’m anxious",
    emoji: "🌧️",
    tags: ["breathe", "slow"],
    notes: [
      "PLACEHOLDER NOTE 1",
      "PLACEHOLDER NOTE 2",
      "PLACEHOLDER NOTE 3",
      "PLACEHOLDER NOTE 4",
      "PLACEHOLDER NOTE 5"
    ]
  },
  {
    id: "sleep",
    title: "I can’t sleep",
    emoji: "🌙",
    tags: ["calm", "night"],
    notes: [
      "PLACEHOLDER NOTE 1",
      "PLACEHOLDER NOTE 2",
      "PLACEHOLDER NOTE 3",
      "PLACEHOLDER NOTE 4",
      "PLACEHOLDER NOTE 5"
    ]
  },
  {
    id: "overwhelmed",
    title: "I’m overwhelmed",
    emoji: "🌊",
    tags: ["one step", "ground"],
    notes: [
      "PLACEHOLDER NOTE 1",
      "PLACEHOLDER NOTE 2",
      "PLACEHOLDER NOTE 3",
      "PLACEHOLDER NOTE 4",
      "PLACEHOLDER NOTE 5"
    ]
  },
  {
    id: "idk",
    title: "I don’t know what I feel",
    emoji: "🫠",
    tags: ["gentle", "reset"],
    notes: [
      "PLACEHOLDER NOTE 1",
      "PLACEHOLDER NOTE 2",
      "PLACEHOLDER NOTE 3",
      "PLACEHOLDER NOTE 4",
      "PLACEHOLDER NOTE 5"
    ]
  }
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

  const sub = document.createElement("div")
  sub.className = "tile-sub"
  sub.textContent = item.tags.join(" • ")

  a.appendChild(emoji)
  a.appendChild(title)
  a.appendChild(sub)

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
  const title = byId("modalTitle")
  const noteText = byId("noteText")
  const pillRow = byId("pillRow")

  title.textContent = `${cat.emoji} ${cat.title}`
  noteText.textContent = cat.notes[currentIndex]

  pillRow.innerHTML = ""
  for (const t of cat.tags){
    const pill = document.createElement("div")
    pill.className = "pill"
    pill.textContent = t
    pillRow.appendChild(pill)
  }

  modal.classList.add("show")
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

function renderGrid(filterText){
  const grid = byId("notesGrid")
  grid.innerHTML = ""

  const q = (filterText || "").trim().toLowerCase()

  for (const item of NOTE_DATA){
    const hay = `${item.title} ${item.tags.join(" ")} ${item.id}`.toLowerCase()

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

  const search = byId("search")
  search.addEventListener("input", () => {
    renderGrid(search.value)
  })

  const randomBtn = byId("randomBtn")
  randomBtn.addEventListener("click", () => {
    randomPick()
  })

  const modal = byId("modal")
  const closeModal = byId("closeModal")

  closeModal.addEventListener("click", () => {
    modal.classList.remove("show")
  })

  modal.addEventListener("click", (e) => {
    if (e.target === modal){
      modal.classList.remove("show")
    }
  })

  const prev = byId("prevNote")
  const next = byId("nextNote")
  const copy = byId("copyNote")

  prev.addEventListener("click", () => {
    currentIndex = clampIndex(currentIndex - 1, currentCategory.notes.length)
    byId("noteText").textContent = currentCategory.notes[currentIndex]
  })

  next.addEventListener("click", () => {
    currentIndex = clampIndex(currentIndex + 1, currentCategory.notes.length)
    byId("noteText").textContent = currentCategory.notes[currentIndex]
  })

  copy.addEventListener("click", async () => {
    const text = byId("noteText").textContent

    try{
      await navigator.clipboard.writeText(text)
      showToast("Copied 💜")
    }catch{
      showToast("Couldn’t copy (browser blocked)")
    }
  })

  if (location.hash){
    const id = location.hash.replace("#", "")
    const exists = NOTE_DATA.some(x => x.id === id)
    if (exists){
      openModal(id, 0)
    }
  }
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

document.addEventListener("DOMContentLoaded", init)
