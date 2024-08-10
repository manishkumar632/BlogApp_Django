let originalSidebarContent;

document.addEventListener(
	"DOMContentLoaded",
	function () {
		const sidebar = document.getElementById("createPostSidebar");
		originalSidebarContent = sidebar.innerHTML; // Store the original HTML
	},
	{ once: true }
);

function addTitleToPost() {
	const titleDiv = document.createElement("div");
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
}

function deleteActiveElement(event) {
	const postContainer = document.getElementById("post-content");
	postContainer.getElementsByClassName("active")[0].remove();
	document.getElementById("createPostSidebar").innerHTML = originalSidebarContent;
}

function sidebarMainOptions() {
	document.getElementById("createPostSidebar").innerHTML = originalSidebarContent;
}