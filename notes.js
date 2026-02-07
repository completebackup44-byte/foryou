const NOTE_DATA = [
  {
    id: "sad",
    title: "sad",
    emoji: "🥺",
    tags: [],
    notes: [
      `im really glad you clicked this.
it means you trusted me with how youre feeling.

there is absolutely nothing wrong with being sad.
you never need to hide that from me.

if you had a bad day, please tell me about it.
i want to hear everything.

and if you clicked this because we have been fighting,
screenshot this and send it to me.
i love you too much to let you feel alone or unheard.
i promise i will do my best to make things better.`,
      
      `hey.
im here with you.
even if today feels heavy, you are not carrying it alone.
i love you and i always want to know how youre feeling.`,

      `bad days do not change how much i care about you.
not even a little.
you are loved exactly as you are right now.`,

      `you dont need to be okay for me.
you dont need to explain everything perfectly.
just being you is already enough for me.`,

      `if this sadness feels big, thats okay.
feel it.
rest.
and remember that i love you through all of it.`
    ]
  },

  {
    id: "anxious",
    title: "anxious",
    emoji: "🌧️",
    tags: [],
    notes: [
      `take a slow breath with me.
in through your nose.
out through your mouth.
nothing bad is happening right now.`,

      `this feeling is uncomfortable, but it is not dangerous.
it will pass.
i promise.`,

      `look around and name five things you can see.
you are here.
you are safe.
im right here with you.`,

      `you do not need to solve anything right now.
just breathe.
i believe in you so much.`,

      `even when your thoughts are loud,
my love for you is louder.`
    ]
  },

  {
    id: "miss",
    title: "miss you",
    emoji: "🫶",
    tags: [],
    notes: [
      `if i were with you right now,
i would pull you into the tightest hug
and not let go for a while.`,

      `i miss you too.
more than i ever know how to say.
but every second that passes brings us closer again.`,

      `think about the next time we see each other.
i already am.`,

      `distance doesnt change how real this is.
you are always with me.`,

      `no matter where we are,
we are still us.`
    ]
  },

  {
    id: "sleep",
    title: "can’t sleep",
    emoji: "🌙",
    tags: [],
    notes: [
      `you dont have to fall asleep right now.
just rest.
i wish i could be there with you.`,

      `nothing needs to be fixed tonight.
tomorrow you can handle tomorrow.
right now you can just breathe.`,

      `close your eyes and imagine me next to you.
safe.
quiet.
calm.`,

      `even if your mind is busy,
you are still allowed to rest.
i love you.`,

      `goodnight.
im always with you,
even when youre asleep.`
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
