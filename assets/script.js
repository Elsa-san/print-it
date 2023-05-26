
/* Const arrows */

const leftArrow = document.querySelector('.arrow_left')
const rightArrow = document.querySelector('.arrow_right')

/* EventListener */

leftArrow.addEventListener('click', function () { console.log("left") })
rightArrow.addEventListener('click', function () { console.log("right") })

/* Const dots */

const dots = document.getElementsByClassName(".dot");

/* Const slides */

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


const bannerSlide = document.getElementById("banner-slide");
let currentSlide = 0; /* The currentSlide variable is used to track the current slide index. */
const slideTagLine = document.querySelector("#banner > p");



/* Functions */

/* To show next slide */
function showNextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
}

/* To show the previous slide */

function showPreviousSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	bannerSlide.src = "../assets/images/slideshow/" + slides[currentSlide].image;

}

/* EventListener */

leftArrow.addEventListener('click', showPreviousSlide)
rightArrow.addEventListener('click', showNextSlide)
