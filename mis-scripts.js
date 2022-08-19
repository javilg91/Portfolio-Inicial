AOS.init();

const nav = document.getElementById('menu');
const OFFSET = 150.0;
const blueButton = document.getElementById('blue-button');
const marcoIzquierdo = document.querySelector('.marco-izquierdo');
const marcoDerecho = document.querySelector('.marco-derecho');
const marcoInferior = document.querySelector('.marco-inferior');
const mostrar = document.getElementById('mostrar');
const menuOpen = document.getElementById('abierto');
const menuClosed = document.getElementById('cerrado');
const navResponsive = document.getElementById('nav-responsive');
const navButton = document.getElementById('toggle-menu');
const texto = document.querySelectorAll('.texto');
const proyectos = document.querySelectorAll('.proyecto');
const secondNav = document.getElementById('second-nav');
const modal = document.getElementById('modal');
const modalBg = document.querySelector('.modal-bg');

for (const proyecto of proyectos) {
  const target = proyecto.getAttribute('data-target');
  const collapse = document.getElementById(target);

  proyecto.addEventListener('click', function () {
    modalBg.classList.remove('hidden');
    modalBg.classList.add('flex');
    modal.innerHTML = collapse.innerHTML;
  });
}
const hideModal = () => modalBg.classList.add('hidden');
modalBg.addEventListener('click', hideModal);

window.addEventListener('scroll', function () {
  const doc = document.documentElement;
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  if (top > OFFSET) {
    nav.classList.remove('mt-20', 'text-white');
    nav.classList.add('bg-white', 'text-blue-900', 'shadow-lg');
    menuOpen.classList.remove('text-blue-200');
    menuOpen.classList.add('text-blue-900');
    secondNav.classList.add('bg-white', 'text-blue-900');
    secondNav.classList.remove('text-blue-200');
    marcoIzquierdo.classList.remove('translate-x-6');
    marcoIzquierdo.classList.remove('mt-6', 'mb-6');
    marcoDerecho.classList.remove('-translate-x-6');
    marcoInferior.classList.remove('-translate-y-6');
    marcoInferior.classList.remove('ml-6', 'mr-6');
    navButton.classList.add('text-blue-300');
    mostrar.classList.add('lowercase');
  } else {
    nav.classList.remove('bg-white', 'text-blue-900', 'shadow-lg');
    menuOpen.classList.add('text-blue-200');
    menuOpen.classList.remove('text-blue-900');
    secondNav.classList.remove('bg-white', 'text-blue-900');
    secondNav.classList.add('text-blue-200');
    nav.classList.add('mt-20', 'text-white');
    marcoIzquierdo.classList.add('translate-x-6');
    marcoIzquierdo.classList.add('mt-6', 'mb-6');
    marcoDerecho.classList.add('-translate-x-6');
    marcoInferior.classList.add('-translate-y-6');
    marcoInferior.classList.add('ml-6', 'mr-6');
  }
});

navButton.addEventListener('click', function () {
  if (navResponsive.classList.contains('hidden')) {
    console.log('funciona');
    navResponsive.classList.remove('hidden');
    navResponsive.classList.add('bg-white', 'justify-start', 'text-blue-700');
    menuOpen.classList.add('hidden');
    menuClosed.classList.remove('hidden');
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
  }
});

const leftButtonResponsive = document.getElementById('left-button-responsive');
const rightButtonResponsive = document.getElementById(
  'right-button-responsive'
);
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const sliderFotos = tns({
  container: '.slider-fotos',
  items: 1,
  controls: false,
  nav: false,
  mouseDrag: true,
  mode: 'carousel',
  responsive: {
    1024: {
      items: 3,
    },
  },
});

leftButton.addEventListener('click', function () {
  sliderFotos.goTo('next');
});

rightButton.addEventListener('click', function () {
  sliderFotos.goTo('prev');
});

leftButtonResponsive.addEventListener('click', function () {
  sliderFotos.goTo('next');
});

rightButtonResponsive.addEventListener('click', function () {
  sliderFotos.goTo('prev');
});
