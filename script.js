let display_letter = () => {
	let root = document.documentElement;

	root.style.setProperty("--page-height", "200px");
	document.querySelector("#content").style.display = "block";
	document.querySelector("#base").classList.remove("increment");
};