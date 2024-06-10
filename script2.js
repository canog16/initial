var toggler = document.getElementsByClassName("toggler")[0]
var navLinks = document.getElementsByClassName('nav-buttons')[0]

toggler.addEventListener("click", () => {
	navLinks.classList.toggle("active")


})