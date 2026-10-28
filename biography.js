// in this file, write some code that will diplay some text using a paragraph element. You can use JavaScript to create the paragraph and an image.
document.addEventListener("DOMContentLoaded", function() {
console.log("DOM fully loaded and parsed");
        var body = document.body;
    var p = document.createElement("p");

    var img = document.createElement("img");
    img.src = "https://via.placeholder.com/300";
    img.style.width = "300px";
    img.style.height = "auto";
        body.appendChild(p);
        body.appendChild(img);

    p.innerHTML = '<div style=color:red;">This is the context created by JavaScript.</div>';
});
