let originalSidebarContent;

document.addEventListener(
	"DOMContentLoaded",
	function() {
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
	document.getElementById("post-content").appendChild(titleDiv);
}

function addTextToPost() {
	const textDiv = document.createElement("div");
	textDiv.classList.add("textDiv");
	textDiv.contentEditable = true;
	textDiv.style.fontSize = "1rem";
	textDiv.style.textAlign = "justify";
	textDiv.style.maxHeight = "max-content";
	textDiv.textContent = "Your Post Content";
	textDiv.addEventListener("focus", editText);
	textDiv.addEventListener("blur", onBlur);

	document.getElementById("post-content").appendChild(textDiv);
}

function editText(event) {
	event.target.classList.add("active");
	let content = document.getElementById("editText");
	document.getElementById("createPostSidebar").innerHTML = content.innerHTML;
}

function onBlur(event) {
	if (event.target.id === "createPostSidebar" || event.target.parentElement.id === "createPostSidebar") {
		console.log("Blur");
		return;
	}
	document.getElementById(
		"createPostSidebar"
	).innerHTML = originalSidebarContent;
}

function deleteActiveElement(event) {
	document.querySelector(".active").remove;
}

function active() {
	console.log("active");
	document.getElementById("createPostSidebar").click();
	return
}