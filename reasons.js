const BASE = [
  "I love the way you cling to me when I'm about to leave.",
  "I love that you call me darling.",
  "I love hearing you say \"ummm\" when you mishear me.",
  "I love how cute you look when you're confused.",
  "I love that you bought me three bags of my favorite honey butter chips.",
  "I love how you pay attention to the small things I like.",
  "I love that you remember my favorite snacks.",
  "I love how thoughtful you are.",
  "I love how natural your beauty is.",
  "I love that you don't need makeup to be stunning.",
  "I love your smile.",
  "I love your face.",
  "I love your natural black hair.",
  "I love how soft you feel when we cuddle.",
  "I love how comfortable it feels when we hold each other.",
  "I love every moment we spend cuddling.",
  "I love how warm you feel next to me.",
  "I love how close you like to be to me.",
  "I love that you cling to me because you don't want me to go.",
  "I love that you care about being close to me.",
  "I love how short and adorable you are.",
  "I love your figure.",
  "I love how attractive you are without even trying.",
  "I love that you're naturally beautiful.",
  "I love how your presence makes everything feel calm.",
  "I love how gentle you are.",
  "I love that you're quiet but expressive in your own way.",
  "I love that you listen carefully when I talk.",
  "I love how interested you are in learning about me.",
  "I love that you explore my interests with me.",
  "I love that you watch the things I want to watch.",
  "I love that you spend time doing the things I like.",
  "I love that you say you enjoy it too.",
  "I love how supportive you are.",
  "I love how you try to understand me.",
  "I love that you're willing to grow together.",
  "I love that you're curious about the things I care about.",
  "I love that you trust me enough to open up.",
  "I love the way you look at me sometimes.",
  "I love how happy you make me feel.",
  "I love the little photos you send me.",
  "I love when you send me pictures of your face.",
  "I love when I get random messages from you.",
  "I love that you share parts of your day with me.",
  "I love that you want me to see you.",
  "I love that you're comfortable being yourself with me.",
  "I love how playful our relationship is.",
  "I love that we can joke around together.",
  "I love how natural everything feels with you.",
  "I love how easy it is to be with you.",
  "I love how you make ordinary moments feel special.",
  "I love how you brighten my mood.",
  "I love how cute you are without even trying.",
  "I love that you're a little shy.",
  "I love your quiet personality.",
  "I love that you're gentle and soft-spoken.",
  "I love that you're different from everyone else.",
  "I love how unique you are.",
  "I love that you're obsessed with animals.",
  "I love that you love arctic foxes.",
  "I love hearing you talk about animals you like.",
  "I love how excited you get about things you care about.",
  "I love the calm energy you bring.",
  "I love that you make me feel wanted.",
  "I love that you make me feel important.",
  "I love that you think about me when I'm not there.",
  "I love that you miss me when I leave.",
  "I love that you hold onto me a little longer sometimes.",
  "I love that you make it hard to leave.",
  "I love that you make me want to stay longer.",
  "I love how we can just exist together quietly.",
  "I love how peaceful it feels when we're together.",
  "I love that I can be myself around you.",
  "I love how you accept me the way I am.",
  "I love how genuine you are.",
  "I love how kind your heart is.",
  "I love how you care about the little details.",
  "I love how thoughtful you are with small gestures.",
  "I love how affectionate you are.",
  "I love the way you hug me.",
  "I love the way you lean into me.",
  "I love the way you look when you're comfortable with me.",
  "I love that we share private moments together.",
  "I love the chemistry between us.",
  "I love that we can be playful and intimate.",
  "I love that our relationship feels natural.",
  "I love that you trust me.",
  "I love that we're building something together.",
  "I love that you're part of my life.",
  "I love the memories we've already made.",
  "I love thinking about the memories we'll make.",
  "I love that you make my days better.",
  "I love how my mood changes when I see you.",
  "I love how my heart feels when I think about you.",
  "I love that you make life more exciting.",
  "I love that you make small moments meaningful.",
  "I love that you're my person.",
  "I love that you feel like home to me.",
  "I love that being with you just feels right.",
  "I love you simply because you're you.",
  "I love the rare moments when you smile even though you're shy about it.",
  "I love that you think your smile makes your face look fat when it actually makes you look even cuter.",
  "I love that your smile feels special because you don't show it to everyone.",
  "I love how soft your heart is for animals.",
  "I love that you care about animals so much you're studying animal care.",
  "I love how gentle you are with living things.",
  "I love that you see kindness in places I sometimes miss.",
  "I love that you check up on me when I'm not feeling okay.",
  "I love that you can't sleep when we're fighting because you care that much.",
  "I love that our problems matter to you.",
  "I love that you want things between us to be okay.",
  "I love that you try to make sure I'm alright.",
  "I love remembering our dates together.",
  "I love going places with you like the aquarium.",
  "I love that we can just hang out and it still feels special.",
  "I love watching shows together with you.",
  "I love that you love Mikasa.",
  "I love hearing you talk about the characters you like.",
  "I love sharing stories and shows with you.",
  "I love that we create memories doing simple things.",
  "I love that you don't need makeup to look beautiful.",
  "I love how naturally attractive you are.",
  "I love that you're effortlessly pretty.",
  "I love the confidence you show just being yourself.",
  "I love how real you are.",
  "I love that your beauty feels genuine.",
  "I love that you don't hide behind anything fake.",
  "I love how sensitive you are.",
  "I love that you feel things deeply.",
  "I love that your heart reacts to things so strongly.",
  "I love that you care so much about people.",
  "I love that you're emotionally aware.",
  "I love that you understand feelings better than I do.",
  "I love that you help me learn empathy.",
  "I love that you teach me things about emotions.",
  "I love that you balance me out.",
  "I love that you make me a better person.",
  "I love that you're patient with me when I'm still learning.",
  "I love how peaceful it is when we're on call together.",
  "I love that you stay on call with me when I'm gaming.",
  "I love that you fall asleep listening to me.",
  "I love that my voice comforts you.",
  "I love that you say I'm soothing.",
  "I love hearing your sleepy voice.",
  "I love knowing you're there even when we're both quiet.",
  "I love how comfortable silence feels with you.",
  "I love that we can just exist together.",
  "I love the late nights we spend talking or doing nothing.",
  "I love that you stay even when you're tired.",
  "I love that you want to spend that time with me.",
  "I love how calm your presence is.",
  "I love the softness in your personality.",
  "I love the gentle way you react to things.",
  "I love how caring you are toward others.",
  "I love that you feel deeply about the world around you.",
  "I love that you notice emotions others might ignore.",
  "I love that you try to understand people.",
  "I love how kind your heart is.",
  "I love that you value connection.",
  "I love that you think about our relationship seriously.",
  "I love that you care enough to worry about us.",
  "I love that you want us to work through problems.",
  "I love how safe I feel around you.",
  "I love how comfortable I am being myself with you.",
  "I love that you accept my weirdness.",
  "I love that you stay patient with me.",
  "I love how naturally we fit together.",
  "I love that we balance each other out.",
  "I love that you understand parts of me others don't.",
  "I love that we share quiet moments that mean a lot.",
  "I love the memories we've built already.",
  "I love the feeling of being close to you.",
  "I love the way you look at me sometimes.",
  "I love that you care about my wellbeing.",
  "I love how loyal you are.",
  "I love that you stay even when things aren't perfect.",
  "I love that you're willing to grow with me.",
  "I love that you believe in us.",
  "I love that you give your heart fully.",
  "I love that you're genuine with your feelings.",
  "I love that you're honest about who you are.",
  "I love that you don't pretend to be someone else.",
  "I love that you show your real self to me.",
  "I love how rare and special that is.",
  "I love how important you've become to me.",
  "I love how you changed my life just by being in it.",
  "I love that our relationship feels real.",
  "I love that you make my days better just by existing.",
  "I love the way my heart feels when I think about you.",
  "I love the way our story is unfolding.",
  "I love that I get to experience life with you.",
  "I love imagining our future together.",
  "I love thinking about growing old with you.",
  "I love the idea of building a life together.",
  "I love the idea of sharing everything with you.",
  "I love that you're someone I want forever with.",
  "I love the idea of calling you my wife someday.",
  "I love the future I imagine with you in it.",
  "I love that you feel like my partner in life.",
  "I love you because you're the person I want to marry.",
]

const STARTERS = [
  "how you",
  "how softly you",
  "how deeply you",
  "how much you",
  "how you always",
  "how you quietly",
  "how we",
  "how natural it feels when you",
  "how my heart feels when you",
  "how safe it feels when you",
  "that you",
  "that you always",
  "that we",
  "that being with you",
  "that just existing with you",
]

const ACTIONS = [
  "cling to me when i'm about to leave",
  "make ordinary moments feel special",
  "make everything feel calm just by being there",
  "make small moments feel meaningful",
  "make my mood completely change when i see you",
  "make life feel softer and less scary",
  "make even quiet time together feel important",
  "make me want to stay longer every single time",
  "turn simple days into memories i keep thinking about",
  "turn late-night calls into some of my favorite moments",
  "hold onto me like you never want me to go",
  "miss me when i leave and tell me you do",
  "stay close to me even when we're not doing anything",
  "listen so carefully when i talk about the things i care about",
  "remember the little details about what i like",
  "care so much about the things and people you love",
  "get excited about animals and the things that make you happy",
  "look at me like i'm important to you",
  "make me feel wanted in a way no one else does",
  "make me feel like i matter to you",
  "worry about us because you care that much",
  "stay even when things aren't perfect between us",
  "are willing to work through problems with me instead of running away",
  "trust me enough to be yourself completely",
  "trust me enough to be soft and vulnerable with me",
  "reach for me when you're tired instead of pulling away",
  "fall asleep on call with me because my voice makes you feel safe",
  "just exist beside me in silence and somehow say everything",
  "fit next to me so perfectly when we cuddle",
  "hold me like i'm something you don't want to lose",
  "keep choosing me on quiet, normal days",
  "care about animals so much that you're building your life around them",
  "notice emotions other people would probably miss",
  "feel things so deeply even when it's hard",
  "check on me when i'm not okay without me having to ask",
  "can't sleep when we're fighting because you want us to be okay",
  "look at our relationship like something real and worth protecting",
  "make our little dates feel like core memories",
  "make watching shows or doing nothing still feel like time well spent",
  "make the future feel less scary because you're in it",
  "make me want to be a softer, better version of myself",
  "teach me about feelings and empathy just by being you",
  "balance out my rough edges without ever making me feel wrong",
  "accept my weirdness and still stay",
  "make me feel like you're my home",
  "make forever with you sound like something gentle and real",
  "make the idea of calling you my wife feel natural instead of scary",
  "make me believe we're really building a life together",
]

const TOTAL_COMBOS = STARTERS.length * ACTIONS.length

function getReason(n) {
  if (n < BASE.length) return BASE[n]

  const i = n - BASE.length
  const pos = i % TOTAL_COMBOS
  const starterIdx = pos % STARTERS.length
  const actionIdx = Math.floor(pos / STARTERS.length)

  const sentence = "i love " + STARTERS[starterIdx] + " " + ACTIONS[actionIdx]
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + "."
}

const BATCH = 10
let nextIndex = 0
let maxVisible = 0

const list = document.getElementById("reasonsList")
const loader = document.getElementById("reasonsLoader")
const counterEl = document.getElementById("counterNum")
let counterBumpTimeout = null

function updateCounter(n) {
  if (n > maxVisible) {
    maxVisible = n
    counterEl.textContent = maxVisible

    counterEl.classList.remove("bump")
    if (counterBumpTimeout !== null) {
      clearTimeout(counterBumpTimeout)
    }
    // allow reflow so the animation retriggers
    counterBumpTimeout = setTimeout(() => {
      counterEl.classList.add("bump")
    }, 0)
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

const sentinelObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      appendBatch()
      break
    }
  }
}, { rootMargin: "200px 0px 400px 0px" })

sentinelObserver.observe(loader)

appendBatch()
