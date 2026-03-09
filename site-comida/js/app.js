const cards = document.querySelectorAll(".card")
const modal = document.getElementById("foodModal")
const title = document.getElementById("foodTitle")
const image = document.getElementById("foodImage")
const desc = document.getElementById("foodDescription")
const close = document.querySelector(".close")

cards.forEach(card => {

  card.addEventListener("click", () => {

    title.innerText = card.dataset.title
    image.src = card.dataset.img
    desc.innerText = card.dataset.desc

    modal.style.display = "flex"

  })

})

close.addEventListener("click", () => {
  modal.style.display = "none"
})

window.addEventListener("click", (e) => {

  if (e.target === modal) {
    modal.style.display = "none"
  }

})