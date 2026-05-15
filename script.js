//plan: two images, curr_slide and next_slide. next slide is off screen.
// at designated intervals, apply translation to slides and end with popping up a new next slide off screen
// cycle
/*
let slides = [
	"./assets/carousel/img-1.jpg",
	"./assets/carousel/img-2.jpg",
	"./assets/carousel/img-3.jpg",
	"./assets/carousel/img-4.jpg",
];

let curr_slide = document.querySelector(".slides img:nth-child(1)"); //get current slide
let next_slide = document.querySelector(".slides img:nth-child(2)"); //get next slide
let carousel = document.querySelector(".slides");

let slide = document.querySelector(".slides img");


slide.addEventListener("animationend", () => {
	// JavaScript code to execute after the animation ends
	console.log("CSS animation finished!");
	carousel.removeChild(curr_slide);
	next_slide = createSlide(slides.indexOf(curr_slide.getAttribute("src")) + 2);
	carousel.appendChild(next_slide);
	// For example, remove the animation class to reset or trigger another action
	//element.classList.remove('animate-class');
});

function createSlide(index) {
	let newSlide = document.createElement("img");
	newSlide.classList.add("slide"); //might be an unnecessary class
	newSlide.setAttribute("src", slides[index]);
	newSlide.setAttribute("alt", "Image of person skydiving");
	newSlide.setAttribute("width", "500px");
	return newSlide;
}*/
