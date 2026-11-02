document.addEventListener("DOMContentLoaded", function () {
    ["biography", "javascriptBiography"].forEach(function (panelId) {
        const panel = document.getElementById(panelId);
        if (!panel) return;

        const paragraph = document.createElement("p");
        paragraph.textContent = "This content was created by biography.js.";
        paragraph.style.color = "red";

        const image = document.createElement("img");
        image.src = "https://via.placeholder.com/300";
        image.alt = "Biography placeholder";
        image.style.width = "300px";
        image.style.height = "auto";

        panel.appendChild(paragraph);
        panel.appendChild(image);
    });
});
