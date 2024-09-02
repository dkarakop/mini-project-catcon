document.addEventListener("DOMContentLoaded", function () {
	const burger = document.getElementById("burger");
	const dropdownContent = document.querySelector(".burger-dropdown-content");

	burger.addEventListener("click", function () {
		// Toggle the active class on the burger menu
		burger.classList.toggle("active");

		// Toggle the dropdown visibility
		dropdownContent.classList.toggle("active");
	});

	// Optionally close the menu when a link is clicked
	dropdownContent.addEventListener("click", function () {
		burger.classList.remove("active");
		dropdownContent.classList.remove("active");
	});
});
