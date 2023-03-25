const cards = [...document.querySelectorAll(".card-item")]
cards.map(card => {
    card.addEventListener("click", () => {
        cards.map(card => card.classList.remove("card-active"))
        card.classList.toggle("card-active")
    })
}) 


document.addEventListener('scroll', ( )=>{

  const header = document.querySelector('header')
   if (window.pageYOffset > 250) {
  header.style.background='rgb(15, 23, 42)'
  }
  else {
  header.removeAttribute('style')
  }
  })

  
  const menuButton = document.getElementById('burger-menu')
const mobileMenu = document.getElementById('mobile-menu')
let menuOpen = false

menuButton.addEventListener('click', () => {
  menuOpen = !menuOpen
  menuButton.classList.toggle('open')
  mobileMenu.classList.toggle('block')
  mobileMenu.classList.toggle('hidden')
})


 