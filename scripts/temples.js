// Populate Copyright Year
const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = new Date().getFullYear();

// Populate Last Modified Date
const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

// Hamburger Menu Toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
