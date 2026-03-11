const BASE = [
  "the way your eyes crinkle when you smile for real",
  "how you laugh at your own jokes before you even finish them",
  "the sound of your voice first thing in the morning",
  "how genuinely kind you are to everyone around you",
  "the way you always make space for people's feelings",
  "how you notice the little things and actually remember them",
  "your laugh — the real one, not the polite one",
  "the way you say my name",
  "how you get excited over things most people overlook",
  "the warmth you carry with you everywhere you go",
  "how you give the best hugs without even trying",
  "the way your face changes when you're thinking hard",
  "how softly you love the people in your life",
  "that you always check in on people without being asked",
  "the way you look when you're listening — really listening",
  "how honest you are even when it's hard",
  "the way you make ordinary moments feel like something worth keeping",
  "how you always find something good even in bad days",
  "your voice when you're telling a story you love",
  "the way you see people — actually, genuinely see them",
  "how patient you are, even when you don't have to be",
  "how you apologize and actually mean it",
  "that you remember small things i said months ago",
  "the way you exist so unapologetically",
  "how you manage to make me feel calm when everything isn't",
  "the way you get sleepy and try to fight it",
  "how deeply you care about things",
  "your sense of humor — genuinely the best",
  "the way you make me want to be better",
  "how you light up around the people you love",
  "the way you hold yourself when you're confident",
  "how you're soft and strong at the exact same time",
  "the way you look when something makes you really happy",
  "how you make everything feel warmer",
  "that you're brave in ways you don't even notice",
  "the way you love things fully and without embarrassment",
  "how you make other people feel heard",
  "your face when you're concentrating",
  "the way you get quiet when something means a lot to you",
  "how you show up — even when it's hard",
  "the little things you do without thinking",
  "how you make me feel like i belong",
  "the way you say things like you mean every single word",
  "how you look when you're proud of something",
  "the way your voice changes when you're being sincere",
  "how you always manage to find the right thing to say",
  "that you love with your whole heart",
  "the way you exist in this world so fully",
  "how you make the people around you feel safe",
  "the way you smile when you think no one's looking",
  "how you get nervous about things you care about",
  "your eyes when you're smiling for real",
  "how completely yourself you are",
  "the way you trust people",
  "how you remember to ask how things went",
  "the way your face looks when you first wake up",
  "how you process things out loud",
  "the way you hold space without even trying",
  "how you make hard things feel smaller",
  "your enthusiasm — it's genuinely contagious",
  "the way you're thoughtful in the smallest ways",
  "how you never make me feel like too much",
  "the way you look at me sometimes",
  "how you make everything an inside joke",
  "that you keep showing up, every time",
  "the way you love quietly and deeply",
  "how your whole face changes when you laugh",
  "the way you exist in my life like you were always supposed to be here",
  "how you're still you, no matter what",
  "the way you make me feel understood without saying much",
  "how you carry people's secrets so gently",
  "the way you let yourself be loved",
  "how you make ordinary tuesday nights feel like a memory worth keeping",
  "the way you always know when something is wrong",
  "how you stay soft in a world that makes that hard",
  "the way you love me back",
  "how you make even the boring parts of life feel good",
  "the way you text back",
  "how you make me feel like the luckiest person",
  "just you — all of you — always",
]

const STARTERS = [
  "the way you",
  "how you",
  "i love that you",
  "the fact that you",
  "whenever you",
  "the part where you",
  "how softly you",
  "every time you",
  "just how you",
  "i keep thinking about how you",
  "i love when you",
  "something about how you",
  "the way you always",
  "honestly, how you",
  "i could watch you",
]

const ACTIONS = [
  "make me feel at home wherever we are",
  "stay yourself no matter what",
  "love people so completely",
  "show up even when it's hard",
  "make even small moments feel worth keeping",
  "carry warmth everywhere you go",
  "hold space without even trying",
  "make hard things feel smaller",
  "remember the things that matter",
  "turn ordinary days into something i want to remember",
  "exist so fully in the world",
  "love things without embarrassment",
  "find the good in people",
  "make people feel heard",
  "stay gentle in a world that makes that difficult",
  "notice the small things everyone else misses",
  "choose kindness like it's automatic",
  "know exactly when someone needs you",
  "say things and mean every single word",
  "make the people around you feel safe",
  "get excited about things you love",
  "hold people so gently",
  "care about things so deeply",
  "believe in people the way you do",
  "make even silence feel comfortable",
  "put people at ease without trying",
  "give without keeping score",
  "see people the way you do — really see them",
  "make me want to be a better person",
  "love with your whole heart",
  "stay brave even when it's scary",
  "make the world better just by being in it",
  "hold onto the things that matter",
  "make me feel like i belong",
  "laugh like that — completely",
  "keep showing up, every single time",
  "look at people like they matter",
  "carry yourself the way you do",
  "make everything feel a little more okay",
  "exist in my life like you were always supposed to",
  "make small things feel like something beautiful",
  "love so openly and without hesitation",
  "remember how everyone takes their coffee",
  "get that look on your face when something excites you",
  "check in without being asked",
  "find something to love in everything",
  "make me feel like the luckiest person in the world",
  "exist and somehow make everything around you warmer",
  "say my name exactly the way you do",
  "stay present even when it would be easier not to",
]

const PREFIXES = [
  "",
  "and ",
  "oh, and ",
  "also — ",
  "i keep forgetting to say: ",
  "did i mention ",
  "and also: ",
  "still: ",
  "always: ",
  "not to mention ",
  "plus ",
  "and of course ",
  "i almost forgot — ",
  "oh and another thing: ",
  "endlessly: ",
]

const TOTAL_COMBOS = STARTERS.length * ACTIONS.length

function getReason(n) {
  if (n < BASE.length) return BASE[n]

  const i = n - BASE.length
  const cycle = Math.floor(i / TOTAL_COMBOS)
  const pos = i % TOTAL_COMBOS
  const starterIdx = pos % STARTERS.length
  const actionIdx = Math.floor(pos / STARTERS.length)
  const prefix = PREFIXES[cycle % PREFIXES.length]

  return prefix + STARTERS[starterIdx] + " " + ACTIONS[actionIdx]
}

const BATCH = 10
let nextIndex = 0
let maxVisible = 0

const list = document.getElementById("reasonsList")
const loader = document.getElementById("reasonsLoader")
const counterEl = document.getElementById("counterNum")

function updateCounter(n) {
  if (n > maxVisible) {
    maxVisible = n
    counterEl.textContent = maxVisible
  }
}

const itemObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
      const n = parseInt(entry.target.dataset.n, 10)
      updateCounter(n)
      itemObserver.unobserve(entry.target)
    }
  }
}, { rootMargin: "0px 0px -40px 0px" })

function appendBatch() {
  const frag = document.createDocumentFragment()
  for (let k = 0; k < BATCH; k++) {
    const n = nextIndex + 1
    const li = document.createElement("li")
    li.className = "reason-item"
    li.dataset.n = n
    li.innerHTML = `<span class="reason-num">${n}</span><span class="reason-text">${getReason(nextIndex)}</span>`
    frag.appendChild(li)
    nextIndex++
  }
  list.appendChild(frag)

  for (const item of list.querySelectorAll(".reason-item:not(.visible)")) {
    itemObserver.observe(item)
  }
}

const sentinel = document.createElement("div")
sentinel.className = "reasons-sentinel"
loader.before(sentinel)

const sentinelObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    appendBatch()
  }
}, { rootMargin: "200px" })

sentinelObserver.observe(sentinel)

appendBatch()
