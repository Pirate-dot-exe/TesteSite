const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', function() {
  console.log('menuButton okay!')
  menu.classList.toggle('hidden-menu');
});