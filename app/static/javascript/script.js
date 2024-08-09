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
	if (window.location.pathname.includes("/dashboard/")) {
		document.body.querySelector("header").style.display = "none";
		document.body.style.backgroundColor = "#F7F8FA";
		const todayDate = document.getElementById("today-date");
		todayDate.textContent = new Date().toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	}
});