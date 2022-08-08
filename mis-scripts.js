const nav = document.getElementById('menu');
const navButton = document.getElementById('toggle-menu');
const OFFSET = 150.0;
const blueButton = document.getElementById('blue-button');
const marcoIzquierdo = document.querySelector('.marco-izquierdo');
const marcoDerecho = document.querySelector('.marco-derecho');
const marcoInferior = document.querySelector('.marco-inferior');
const mostrar = document.getElementById('mostrar');

window.addEventListener('scroll', function () {
  const doc = document.documentElement;
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  if (top > OFFSET) {
    nav.classList.add('bg-white', 'text-gray-800');
    nav.classList.remove('translate-y-20', 'text-white');
    marcoIzquierdo.classList.remove('translate-x-6');
    marcoIzquierdo.classList.remove('mt-6', 'mb-6');
    marcoDerecho.classList.remove('-translate-x-6');
    marcoInferior.classList.remove('-translate-y-6');
    marcoInferior.classList.remove('ml-6', 'mr-6');
    navButton.classList.add('text-blue-300');
    mostrar.classList.add('lowercase');
  } else {
    nav.classList.remove('bg-white', 'text-gray-800');
    nav.classList.add('translate-y-20', 'text-black');
    marcoIzquierdo.classList.add('translate-x-6');
    marcoIzquierdo.classList.add('mt-6', 'mb-6');
    marcoDerecho.classList.add('-translate-x-6');
    marcoInferior.classList.add('-translate-y-6');
    marcoInferior.classList.add('ml-6', 'mr-6');
    logoColor.classList.add('hidden');
    logoTransparente.classList.remove('hidden');
  }
});

const menuOpen = document.getElementById('abierto');
const menuClosed = document.getElementById('cerrado');
const navResponsive = document.getElementById('nav-responsive');
navButton.addEventListener('click', function () {
  if (navResponsive.classList.contains('hidden')) {
    navResponsive.classList.remove('hidden');
    navResponsive.classList.add(
      'flex',
      'flex-col',
      'bg-white',
      'justify-start',
      'text-blue-700'
    );
    menuOpen.classList.add('hidden');
    menuClosed.classList.remove('hidden');
    nav.classList.add('pb-0');
  } else {
    navResponsive.classList.add('hidden');
    navResponsive.classList.remove(
      'flex',
      'flex-col',
      'bg-white',
      'justify-start',
      'text-blue-700'
    );
    menuOpen.classList.remove('hidden');
    menuClosed.classList.add('hidden');
    nav.classList.remove('pb-0');
  }
});
