// Selecciona el botón de menú, el menú y los ítems del menú
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu li');

// Función para abrir y cerrar el menú
function toggleMenu() {
  menu.classList.toggle('menu-open');
  menu.classList.toggle('menu');
}

// Escucha el clic en el botón de menú
menuToggle.addEventListener('click', toggleMenu);

// Cierra el menú cuando se hace clic en un ítem del menú (solo en dispositivos móviles)

