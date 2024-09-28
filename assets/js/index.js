
const nav_bar = document.querySelector(".nav-btns");

const nav_headers = document.querySelector(".header-top")

const toggleNav = () => {
  nav_headers.classList.toggle("actives")
}

nav_bar.addEventListener("click", () => toggleNav());


// header bottom
const mobile_nav = document.querySelector(".nav-btn");

const nav_header = document.querySelector(".header-bottom")

const toggleNavbar = () => {
  nav_header.classList.toggle("active")
}

mobile_nav.addEventListener("click", () => toggleNavbar());