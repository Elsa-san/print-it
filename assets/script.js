/* Const arrows */

const leftArrow = document.querySelector('.arrow_left')
const rightArrow = document.querySelector('.arrow_right')

/* Const dots */

const dots = document.querySelectorAll(".dot");

/* Const slides */

const bannerSlide = document.getElementById("banner-slide");
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentSlide = 0; /* The currentSlide variable is used to track the current slide index. */
updateActiveDot() /* Selects the first bullet point when we arrives on the page */


/* Functions */

/* To update active dot */
function updateActiveDot() {
	dots.forEach((dot, index) => {
		dot.classList.remove("dot_selected");
		if (index === currentSlide) {
			dot.classList.add("dot_selected");
		}
	});
}
/* forEach go through each bullet point and remove the "dot_selected" class
"dot_selected" class only to the bullet point corresponding to the current slide/*


/* To show next slide */
function showNextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	updateActiveDot();

}

/* To show the previous slide */
function showPreviousSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	bannerSlide.src = "../assets/images/slideshow/" + slides[currentSlide].image;
	updateActiveDot();

}

/* EventListener on arrows */

leftArrow.addEventListener('click', showPreviousSlide)
rightArrow.addEventListener('click', showNextSlide)
