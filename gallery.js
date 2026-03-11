const PHOTOS = Array.from({ length: 36 }, (_, i) => `images/image${i + 1}.jpg`)

let currentIdx = 0

function renderGallery(){
  const grid = byId("galleryGrid")
  if (!grid) return

  const count = byId("photoCount")
  if (count) count.textContent = `${PHOTOS.length} photos`

  grid.innerHTML = ""

  const frag = document.createDocumentFragment()

  PHOTOS.forEach((src, i) => {
    const card = document.createElement("div")
    card.className = "photo"

    const img = document.createElement("img")
    img.src = src
    img.alt = ""
    img.loading = "lazy"
    img.decoding = "async"

    const overlay = document.createElement("div")
    overlay.className = "photo-overlay"
    overlay.innerHTML = "<span>🔍</span>"

    card.appendChild(img)
    card.appendChild(overlay)
    card.addEventListener("click", () => openImg(i))

    frag.appendChild(card)
  })

  grid.appendChild(frag)
}

function openImg(idx){
  currentIdx = idx
  const modal = byId("imgModal")
  const zoomed = byId("zoomedImg")
  const src = PHOTOS[idx]

  zoomed.src = src
  zoomed.alt = ""

  byId("imgTitle").textContent = `photo ${idx + 1} of ${PHOTOS.length}`

  modal.classList.add("show")
}

function init(){
  renderGallery()

  const modal = byId("imgModal")

  byId("closeImg").addEventListener("click", () => {
    modal.classList.remove("show")
  })

  byId("imgPrev").addEventListener("click", () => {
    openImg((currentIdx - 1 + PHOTOS.length) % PHOTOS.length)
  })

  byId("imgNext").addEventListener("click", () => {
    openImg((currentIdx + 1) % PHOTOS.length)
  })

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show")
  })

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("show")) return
    if (e.key === "ArrowRight") openImg((currentIdx + 1) % PHOTOS.length)
    if (e.key === "ArrowLeft") openImg((currentIdx - 1 + PHOTOS.length) % PHOTOS.length)
    if (e.key === "Escape") modal.classList.remove("show")
  })
}

document.addEventListener("DOMContentLoaded", init)
