document.body.addEventListener("click", function(event) {
	const isUserIcon = event.target.classList.contains("bxs-user");
	const isMenuElement = event.target.closest("#menu");

	if (isUserIcon) {
		document.getElementById("menu").classList.toggle("hidden");
	} else if (!isMenuElement) {
		document.getElementById("menu").classList.add("hidden");
	}
});

document.addEventListener("DOMContentLoaded", function() {
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
	let loginDivHeight = window.innerHeight - header.clientHeight - 1;
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
window.addEventListener("load", loginDivHeight);
window.addEventListener("resize", loginDivHeight);
const config = {
	childList: true,
	subtree: true,
	attributes: true,
	characterData: true
};
const createPostDivObserver = new MutationObserver(function(
	createPostDivObserver
) {
	onChange();
});
window.addEventListener("load", () => {
	if (window.location.pathname.includes("/create-post/")) {
		let data = localStorage.getItem("post-content");
		if (data) {
			document.getElementById("post-content").innerHTML = data;
			document.querySelectorAll(".titleDiv, .textDiv").forEach(div => {
				div.addEventListener("focus", editText);
			});
		}
		const node = document.getElementById("post-content");
		createPostDivObserver.observe(node, config);
	}
});

function onChange() {
	let element = document.getElementById("post-content").innerHTML;
	localStorage.setItem("post-content", element);
}

let originalSidebarContent;
document.addEventListener(
	"DOMContentLoaded",
	function() {
		if (window.location.pathname.includes("/create-post/")) {
			const sidebar = document.getElementById("createPostSidebar");
			originalSidebarContent = sidebar.innerHTML; // Store the original HTML
		}
	},
	{ once: true }
);

function addTitleToPost() {
	const titleDiv = document.createElement("div");
	titleDiv.classList.add("titleDiv");
	titleDiv.contentEditable = true;
	titleDiv.style.fontSize = "2rem";
	titleDiv.textContent = "Your Post Title";
	titleDiv.addEventListener("focus", editText);
	document.getElementById("post-content").appendChild(titleDiv);
}

function addTextToPost() {
	const textDiv = document.createElement("div");
	textDiv.classList.add("textDiv");
	textDiv.contentEditable = true;
	textDiv.style.fontSize = "1rem";
	textDiv.style.textAlign = "justify";
	textDiv.style.maxHeight = "max-content";
	textDiv.draggable = true;
	textDiv.textContent = "Your Post Content";
	textDiv.addEventListener("focus", editText);
	document.getElementById("post-content").appendChild(textDiv);
}

function editText(event) {
	document.querySelectorAll(".active").forEach(function(element) {
		element.classList.remove("active");
	});
	event.target.classList.add("active");
	let content = document.getElementById("editText");
	document.getElementById("createPostSidebar").innerHTML = content.innerHTML;
	document.getElementById("align-content").value =
		event.target.style.textAlign;
}

function deleteActiveElement(event) {
	const postContainer = document.getElementById("post-content");
	postContainer.getElementsByClassName("active")[0].remove();
	document.getElementById(
		"createPostSidebar"
	).innerHTML = originalSidebarContent;
}

function sidebarMainOptions() {
	document.getElementById(
		"createPostSidebar"
	).innerHTML = originalSidebarContent;
}

function alignItems() {
	const element = document.getElementsByClassName("active")[0];
	const alignment = document.getElementById("align-content").value;
	element.style.textAlign = alignment;
}
