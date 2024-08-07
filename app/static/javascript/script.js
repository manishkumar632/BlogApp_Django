document.body.addEventListener("click", function (event) {
	const isUserIcon = event.target.classList.contains("bxs-user");
	const isMenuElement = event.target.closest("#menu");

	if (isUserIcon) {
		document.getElementById("menu").classList.toggle("hidden");
	} else if (!isMenuElement) {
		document.getElementById("menu").classList.add("hidden");
	}
});

// call after login page loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
});