//create canvas
function createEmoji(tab) {
    const canvas = document.getElementById(tab);
    const ctx = canvas.getContext('2d');

//define location and time
    const xOrigin = canvas.width / 2;
    const yOrigin = canvas.height / 2;
    let xDiff = 0;
    let yDiff = 0;
    drawEmoji(ctx, xOrigin, yOrigin, xDiff, yDiff);

    setInterval(function () {
        clearEmoji(ctx, canvas);
        xDiff += 10;
        yDiff += 10;
        drawEmoji(ctx, xOrigin, yOrigin, xDiff, yDiff);
    }, 1000);
}

const radius = 100;

function drawEmoji(ctx, xOrigin, yOrigin, xDiff, yDiff) {
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

function clearEmoji(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('DOMContentLoaded', function () {

    createEmoji('emojitab');
    createEmoji('javascripttabEmoji');
});
