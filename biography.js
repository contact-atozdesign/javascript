document.addEventListener("DOMContentLoaded", function () {
    const biographyPanel = document.getElementById("biography");

    const paragraph = document.createElement("p");
    paragraph.textContent = "This content was created by biography.js.";
    paragraph.style.color = "red";

    const image = document.createElement("img");
    image.src = "https://via.placeholder.com/300";
    image.alt = "Biography placeholder";
    image.style.width = "300px";
    image.style.height = "auto";

    biographyPanel.appendChild(paragraph);
    biographyPanel.appendChild(image);
});
