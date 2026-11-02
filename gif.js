let leftPosition = 0;
let topPosition = 0;

function moveRight() {
  leftPosition += 10;
  getImages().forEach(function (image) {
    image.style.left = leftPosition + 'px';
  });
}

function moveLeft() {
  leftPosition -= 10;
  getImages().forEach(function (image) {
    image.style.left = leftPosition + 'px';
  });
}

function moveUp() {
  topPosition -= 10;
  getImages().forEach(function (image) {
    image.style.top = topPosition + 'px';
  });
}

function moveDown() {
  topPosition += 10;
  getImages().forEach(function (image) {
    image.style.top = topPosition + 'px';
  });
}

function getImages() {
  return document.querySelectorAll('.moving-gif');
}

function createGifForm(panelId) {
  const panel = document.getElementById(panelId);
  if (!panel) return;

  const form = document.createElement('form');

  const image = document.createElement('img');
  image.className = 'moving-gif';
  image.src = '/images/html.gif';
  image.alt = 'HTML moving GIF';
  image.style.position = 'relative';
  image.style.left = '0px';
  image.style.top = '0px';

  const description = document.createElement('p');
  description.textContent = 'Click a button or use the arrow keys to move the image.';

  const actions = [
    ['right', moveRight],
    ['left', moveLeft],
    ['up', moveUp],
    ['down', moveDown]
  ];

  actions.forEach(function (action) {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = action[0];
    button.addEventListener('click', action[1]);
    form.appendChild(button);
  });

  form.prepend(description);
  form.prepend(image);
  panel.appendChild(form);
}

document.addEventListener('DOMContentLoaded', function () {
  createGifForm('gifFormPanel');
  createGifForm('javascriptGifPanel');
});

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowLeft':
      moveLeft();
      break;
    case 'ArrowUp':
      moveUp();
      break;
    case 'ArrowRight':
      moveRight();
      break;
    case 'ArrowDown':
      moveDown();
      break;
  }
});
