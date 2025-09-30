window.onload = function () {
	let slides_parent = document.querySelector(".slides");
	console.log(slides_parent);
	if (
		window.getComputedStyle(slides_parent).getProperty("transform") ==
		"translateX(0)"
	) {
		console.log("0 spotted");
	}
};
