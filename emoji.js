const canvas = document.getElementById('emojiCanvas');
const ctx = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.lineWidth = 2;
ctx.strokeStyle = 'grey';
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(centerX - 30, centerY - 30, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(centerX + 30, centerY - 30, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(centerX, centerY + 30, 30, 0, Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.stroke();
