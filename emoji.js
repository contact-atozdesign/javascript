//create canvas
function createEmoji(canvasId) {
    canvas = document.getElementById(canvasId);
    ctx = canvas.getContext('2d');
    xOrigin = canvas.width / 2;
    yOrigin = canvas.height / 2;
    let xDiff = 0;
    let yDiff = 0;
    drawEmoji(xDiff, yDiff);

    interval = setInterval(function () {
        clearEmoji();
        xDiff += 10;
        yDiff += 10;
        drawEmoji(xDiff, yDiff);
    }, 1000);
}

//define location and time
let xOrigin;
let yOrigin;
let interval = null;

const radius = 100;

function drawEmoji(xDiff, yDiff) {
    ctx.beginPath();
    ctx.arc(xOrigin + xDiff, yOrigin + yDiff, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'grey';
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();

    //draw ctx eyes
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(xOrigin + xDiff - 30, yOrigin + yDiff - 30, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(xOrigin + xDiff + 30, yOrigin + yDiff - 30, 10, 0, 2 * Math.PI);
    ctx.fill();

    //draw ctx smile
    ctx.beginPath();
    ctx.arc(xOrigin + xDiff, yOrigin + yDiff + 30, 30, 0, Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function clearEmoji() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
let canvas = null;
let ctx = null;
document.addEventListener('DOMContentLoaded', function () {

    createEmoji('emojiCanvas');
    createEmoji('javascriptEmojiCanvas');
});
