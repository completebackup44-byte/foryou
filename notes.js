const NOTE_DATA = [
  {
    id: "sad",
    title: "sad",
    emoji: "🥺",
    tags: [],
    notes: [
      `
      i often regret how little i talk to you when times are tough and i imagine that you are opening this during one of these times. I know when
      i get stressed im not the kindest person nor the most sociable nor the easiest. I often worry that you do not know how much i appreciate you.
      when i get overwhelmed i tend to withdraw and sometimes i even take out my stress on you when you voice your concerns. but even though i seem
      cold and dismissive and i know that you could easily find others who are much better than me, you stay by my side and even though i suck at showing
      it i am grateful. i love you
      `,

      `
      i know youd rather talk to me in person and i know i would too but for now i hope this short letter is enough. i hope you don't just read them all in one day
      and truly savour these. as writing lots of short letters isn't an easy feat lol. if you're reading this when you are genuinely sad then i have a video that might
      cheer you up https://www.youtube.com/watch?v=ur48jVNNlKk
      `,

      `
      im going to try write a love letter and it may or may not be cringe and a little jarring. i know you arent thrilled that you're not my first so i
      decided to write a bittersweet letter about it
      
      you weren’t my first choice.
      i would never say that to you. it’s hard to imagine making my choice again.
      
      fate brought you to me randomly, and somehow the stars had me in your home. after a day of cuddling, i did my usual pathetic, awkward attempt for a kiss.
      
      so then i tried again, and after a week (it must have been), by holding your hand and smiling, i knew you were something special.
      
      i’ve hit my usual bumps these last few months. you’ve seen every woe i’ve thrown, but where others left and said goodbye, you stayed with me time and time again.
      
      there’s another world, i’m sure, with tiny waists and bigger breasts, but pity them all. for me, you beat the rest.
      
      so while it’s true you weren’t my first,
      
      you were the best choice of my life <3

      i love you
      `,

      `
      you don’t have to be cheerful to be loved. you don’t have to be productive to be worth it. you don’t have to look perfect to be wanted. 
      you’re allowed to be a mess in my arms. you’re allowed to cry and not explain it properly. you’re allowed to have heavy days.
      i still want you on the heavy days.
      i want a life with you that’s soft and real. mornings where you’re sleepy, afternoons where we do nothing important, nights where i get to hold you until your breathing changes and i can feel you calm down.
      and when you’re sad i want you to remember this part the most
      i’m not going anywhere. i’m yours. even when you don’t feel like yourself. even when you don’t feel pretty. even when you don’t feel lovable.
      especially then.
      `,

      `
      if you’re reading this while you’re sad or doubting yourself, i need you to listen to me for a second
      you don’t get to talk about yourself like you’re not stunning. not when i’ve seen you. not when you do that thing where you’re just existing and somehow it’s the hottest thing in the room.
      i don’t care what your brain is trying to tell you right now. my body reacts to you before my thoughts even catch up. you could be in the most simple outfit, hair not done, no makeup, and i’d still look at you and immediately want to pull you into me.
      and i mean want
      i mean i want to pin you to my attention. i want you close enough that you can feel how serious i am about you. i want to kiss you slow at first, just to make you stop thinking, just to make you remember you’re not hard to love.
      then i want to kiss you like i’ve been behaving all day and i’m finally alone with the only person i actually want. i want my hands on you, not in a rushed way, in a “i’m taking my time because i’m obsessed” way. i want you to feel wanted so clearly that you don’t have room left for insecurity.
      if you were here, i’d hold your face and make you look at me and i’d tell you, quiet and close, that you’re not allowed to hide from me. not emotionally, not physically. i’d remind you that you’re mine in the way that feels safe, the way that makes your shoulders drop, the way that makes you exhale.
      and i’d be gentle with your heart the whole time
      because that’s the point. i don’t just want your body. i want you. all of you. even the parts that get insecure, even the parts that overthink, even the parts that feel like they need to prove something.
      you don’t need to prove anything to me.
      you are already the girl i crave. the girl i think about when i’m bored. the girl i miss when i’m stressed. the girl i want to come home to, and the girl i want to keep close when the world gets heavy.
      so read this again if you need to
      you’re beautiful. you’re sexy and i love you.
      (wtf did i just write)
      `
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

  const modal = byId("modal")
  const modalTitle = byId("modalTitle")
  const noteText = byId("noteText")
  const pillRow = byId("pillRow")

  if (!modal || !modalTitle || !noteText){
    return
  }

  currentCategory = cat
  currentIndex = clampIndex(noteIndex, cat.notes.length)

  modalTitle.textContent = `${cat.emoji} ${cat.title}`
  noteText.textContent = cat.notes[currentIndex]

  if (pillRow){
    pillRow.innerHTML = ""
  }

  modal.classList.add("show")
}

function renderGrid(filterText){
  const grid = byId("notesGrid")
  if (!grid){
    return
  }

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

  const search = byId("search")
  if (search){
    search.addEventListener("input", (e) => {
      renderGrid(e.target.value)
    })
  }

  const randomBtn = byId("randomBtn")
  if (randomBtn){
    randomBtn.addEventListener("click", () => {
      randomPick()
    })
  }

  const modal = byId("modal")
  const closeModal = byId("closeModal")

  if (closeModal && modal){
    closeModal.addEventListener("click", () => {
      modal.classList.remove("show")
    })
  }

  if (modal){
    modal.addEventListener("click", (e) => {
      if (e.target === modal){
        modal.classList.remove("show")
      }
    })
  }

  const prev = byId("prevNote")
  if (prev){
    prev.addEventListener("click", () => {
      if (!currentCategory){
        return
      }

      currentIndex = clampIndex(currentIndex - 1, currentCategory.notes.length)
      const noteText = byId("noteText")
      if (noteText){
        noteText.textContent = currentCategory.notes[currentIndex]
      }
    })
  }

  const next = byId("nextNote")
  if (next){
    next.addEventListener("click", () => {
      if (!currentCategory){
        return
      }

      currentIndex = clampIndex(currentIndex + 1, currentCategory.notes.length)
      const noteText = byId("noteText")
      if (noteText){
        noteText.textContent = currentCategory.notes[currentIndex]
      }
    })
  }

  const copy = byId("copyNote")
  if (copy){
    copy.addEventListener("click", async () => {
      const noteText = byId("noteText")
      if (!noteText){
        return
      }

      try{
        await navigator.clipboard.writeText(noteText.textContent)
        showToast("copied 💜")
      }catch{
        showToast("can’t copy")
      }
    })
  }

  if (location.hash){
    const id = location.hash.replace("#", "")
    if (NOTE_DATA.some(x => x.id === id)){
      openModal(id, 0)
    }
  }
}

document.addEventListener("DOMContentLoaded", init)
