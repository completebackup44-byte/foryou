const PHOTOS = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg",
  "images/image11.jpg",
  "images/image12.jpg",
  "images/image13.jpg",
  "images/image14.jpg",
  "images/image15.jpg",
  "images/image16.jpg",
  "images/image17.jpg",
  "images/image18.jpg",
  "images/image19.jpg",
  "images/image20.jpg",
  "images/image21.jpg",
  "images/image22.jpg",
  "images/image23.jpg",
  "images/image24.jpg",
  "images/image25.jpg",
  "images/image26.jpg",
  "images/image27.jpg",
  "images/image28.webp",
  "images/image29.jpg",
  "images/image30.jpg",
  "images/image31.jpg",
  "images/image32.jpg",
  "images/image33.jpg",
  "images/image34.jpg",
  "images/image35.jpg",
  "images/image36.jpg",
  "images/20240902_213948.jpg",
  "images/20240902_214650.jpg",
  "images/20240904_210503.jpg",
  "images/20240904_213221.jpg",
  "images/20240913_104952.jpg",
  "images/20240913_105149.jpg",
  "images/20241028_002118.jpg",
  "images/20250612_122703.jpg",
  "images/20250618_180623.jpg",
  "images/20250705_023735.jpg",
  "images/20250707_112127.jpg",
  "images/20250709_142145.jpg",
  "images/20250710_101128.jpg",
  "images/20250710_173849.jpg",
  "images/20250711_105129.jpg",
  "images/20250716_111308.jpg",
  "images/20250717_065740.jpg",
  "images/20250717_083918.jpg",
  "images/20250727_114125.jpg",
  "images/20250727_120935.jpg",
  "images/20250727_142516.jpg",
  "images/20250730_161426.jpg",
  "images/20250730_161428.jpg",
  "images/20250731_152915.jpg",
  "images/20250731_152946.jpg",
  "images/20250731_152951.jpg",
  "images/20251109_120823.jpg",
  "images/IMG_20240914_035842_723.webp",
  "images/IMG_20250731_235312_316.jpg",
  "images/Screenshot_20240712_111325_Instagram.jpg",
  "images/Screenshot_20240714_224956_Instagram.jpg",
]

function byId(id){
  return document.getElementById(id)
}

let currentIdx = 0

function renderGallery(){
  const grid = byId("galleryGrid")
  if (!grid) return

  const count = byId("photoCount")
  if (count) count.textContent = `${PHOTOS.length} photos`

  grid.innerHTML = ""

  PHOTOS.forEach((src, i) => {
    const card = document.createElement("div")
    card.className = "photo"

    const img = document.createElement("img")
    img.src = src
    img.alt = ""
    img.loading = "lazy"

    const overlay = document.createElement("div")
    overlay.className = "photo-overlay"
    overlay.innerHTML = "<span>🔍</span>"

    card.appendChild(img)
    card.appendChild(overlay)
    card.addEventListener("click", () => openImg(i))

    grid.appendChild(card)
  })
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
