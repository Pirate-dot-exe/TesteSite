const carrossel = document.querySelector('.carrossel');
const images = carrossel.querySelectorAll('img');
let currentIndex = 0;
function nextImage() {
  images[currentIndex].addEventListener('transitionend', () => {
    images[currentIndex].classList.remove('active');
  });
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
  carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextImage, 2500);