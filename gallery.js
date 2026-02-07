const PHOTOS = []

for (let i = 1; i <= 31; i++){
  PHOTOS.push({
    src: `images/image${i}.jpg`,
    title: "us",
    caption: ""
  })
}

function byId(id){
  return document.getElementById(id)
}

function renderGallery(){
  const grid = byId("galleryGrid")
  if (!grid){
    return
  }

  grid.innerHTML = ""

  for (const p of PHOTOS){
    const card = document.createElement("div")
    card.className = "photo"

    const img = document.createElement("img")
    img.src = p.src
    img.alt = p.title

    const cap = document.createElement("div")
    cap.className = "cap"
    cap.textContent = p.caption ? `${p.title} — ${p.caption}` : p.title

    card.appendChild(img)
    card.appendChild(cap)

    card.addEventListener("click", () => {
      openImg(p)
    })

    grid.appendChild(card)
  }
}

function openImg(p){
  const modal = byId("imgModal")
  const zoomed = byId("zoomedImg")

  zoomed.src = p.src
  zoomed.alt = p.title

  byId("imgTitle").textContent = p.title
  byId("imgCaption").textContent = p.caption || ""

  modal.classList.add("show")
}

function init(){
  renderGallery()

  const modal = byId("imgModal")

  byId("closeImg").addEventListener("click", () => {
    modal.classList.remove("show")
  })

  modal.addEventListener("click", (e) => {
    if (e.target === modal){
      modal.classList.remove("show")
    }
  })
}

document.addEventListener("DOMContentLoaded", init)
