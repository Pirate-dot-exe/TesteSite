const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

console.log("home.js sucessfully loaded!")

menuButton.addEventListener('click', function() {
  console.log('menuButton okay!')
  menu.classList.toggle('hidden-menu');
});