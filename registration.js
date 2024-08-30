// ================= Retrieve elements ================= //
const form = document.querySelector(".registerForm");
const registerName = document.getElementById("register-name");
const radios = form.querySelectorAll('input[type="radio"]');
const radioItems = document.querySelectorAll(".radio-item");

const registerBtn = document.querySelector(".btn-register");

const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const closePopup = document.querySelector(".close-btn");

/**
 * Plays a sound effect when called.
 * @description Creates a new Audio object with the specified sound file and plays it.
 * @param none
 */
function playMusic() {
	const music = new Audio("meow.wav");
	music.play();
}

/**
 * Sets the focus to the user's active choice by checking the specified radio button and focusing on it.
 * @param {string} optionId - The ID of the radio button element to select and focus.
 */
function selectOption(optionId) {
	const radio = document.getElementById(optionId);
	radio.checked = true;
	radio.focus();
}

/**
 * Adds keyboard accessibility to elements with the class "radio-item".
 * This allows users to activate the element by pressing the "Enter"  or the "Space" key.
 */
radioItems.forEach((item) => {
	item.addEventListener("keydown", function (e) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			this.click();
		}
	});
});

//=======================================================//
// Handles the functionality of the registration button.//
//======================================================//

registerBtn.addEventListener("click", function (e) {
	e.preventDefault();
	//Retrieve username value
	let username = document.getElementById("catName").value;
	// Display username in the <span> element inside the pop-up
	registerName.innerHTML = username;

	// Reset radio button selections
	document.getElementById("catName").value = "";

	// Clear radio button selections
	radios.forEach((radio) => {
		radio.checked = false;
	});
	// Open the pop-up window and activate the overlay effect
	popup.classList.add("active");
	overlay.classList.add("active");
	playMusic(); // Play a sound effect to confirm the action
});

//=======================================================//
// Handles the functionality of the pop-up window.//
//=======================================================//

// Close the pop-up window when the close button is clicked
closePopup.addEventListener("click", function (e) {
	e.preventDefault();
	popup.classList.remove("active");
	overlay.classList.remove("active");
	playMusic(); // Play a sound effect to confirm the action
});

// Close the pop-up window if the overlay is clicked.
overlay.addEventListener("click", function (e) {
	e.preventDefault();
	popup.classList.remove("active");
	overlay.classList.remove("active");
});
