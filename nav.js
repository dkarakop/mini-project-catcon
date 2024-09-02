// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
	const burger = document.getElementById("burger");
	const dropdownContent = document.querySelector(".burger-dropdown-content");

	// Add a click event listener to the burger menu icon
	burger.addEventListener("click", function () {
		burger.classList.toggle("active");
		dropdownContent.classList.toggle("active");
	});
	// Add a click event listener to the dropdown content
	dropdownContent.addEventListener("click", function () {
		burger.classList.remove("active");
		dropdownContent.classList.remove("active");
	});
});
