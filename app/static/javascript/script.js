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
			year: "numeric"
		});
	}
});

function loginDivHeight() {
	const header = document.querySelector("header");
	let loginDivHeight = window.innerHeight - header.clientHeight -1;
	if (
		window.location.pathname.includes("/login") ||
		window.location.pathname.includes("/signup")
	) {
		document.getElementById(
			"login-signup"
		).style.height = `${loginDivHeight}px`;
	}
	if (window.location.pathname.includes("/create-post/")) {
		document.getElementById(
			"createPost"
		).style.height = `${loginDivHeight}px`;
	}
}

function observeBodyContentChanges(callback) {
	// Create a MutationObserver instance
	const observer = new MutationObserver(function (mutationsList, observer) {
		mutationsList.forEach(function (mutation) {
			if (mutation.type === "childList" || mutation.type === "subtree") {
				callback(mutation);
			}
		});
	});

	// Define the configuration for the observer
	const config = {
		childList: true, // Observe direct children
		subtree: true, // Observe the entire subtree
		attributes: false, // Ignore attribute changes
		characterData: true // Observe changes to text nodes
	};

	// Start observing the body element
	observer.observe(document.body, config);
}

function onBodyContentChange(mutation) {
		loginDivHeight();
}

// Start observing changes when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
	observeBodyContentChanges(onBodyContentChange);
	console.log("DOM content loaded");
});