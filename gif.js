const images = document.querySelectorAll('.moving-gif');
let leftPosition = 0;
let topPosition = 0;

images.forEach(function (image) {
    image.style.position = 'relative';
    image.style.left = '0px';
    image.style.top = '0px';
});

function moveRight() {
  leftPosition += 10;
  images.forEach(function (image) {
    image.style.left = leftPosition + 'px';
  });
}

function moveLeft() {
  leftPosition -= 10;
  images.forEach(function (image) {
    image.style.left = leftPosition + 'px';
  });
}

function moveUp() {
  topPosition -= 10;
  images.forEach(function (image) {
    image.style.top = topPosition + 'px';
  });
}

function moveDown() {
  topPosition += 10;
  images.forEach(function (image) {
    image.style.top = topPosition + 'px';
  });
}

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
