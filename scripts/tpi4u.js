const carrossel = document.querySelector('.body carrossel');
const imgs = carrossel.querySelectorAll('img');
let currentImg = 0;

function nextImage(){
    if (currentImg === imgs.length - 1) {
        currentImg = 0;
      } else {
        currentImg++;
      }
    setTransform();
}

function setTransform() {
    carrossel.style.transform = `translateX(-${currentImg * 100}%)`;
}
setInterval(nextImage, 2500);