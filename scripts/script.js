// JavaScript Document
console.log("wazaa");

/* Menu */
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('#mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});


// carousel knoppen marketplace pagina:

// car1
const MarktCar = document.querySelector('#carousel');
const KnopL = document.querySelector('#carousel_knopL');
const KnopR = document.querySelector('#carousel_knopR');

// car2
const MarktCar2 = document.querySelector('#carousel2');
const KnopL2 = document.querySelector('#carousel_knopL2');
const KnopR2 = document.querySelector('#carousel_knopR2');

// car3
const MarktCar3 = document.querySelector('#carousel3');
const KnopL3 = document.querySelector('#carousel_knopL3');
const KnopR3 = document.querySelector('#carousel_knopR3');

// car4
const MarktCar4 = document.querySelector('#carousel4');
const KnopL4 = document.querySelector('#carousel_knopL4');
const KnopR4 = document.querySelector('#carousel_knopR4');

// car5
const MarktCar5 = document.querySelector('#carousel5');
const KnopL5 = document.querySelector('#carousel_knopL5');
const KnopR5 = document.querySelector('#carousel_knopR5');

// car6
const MarktCar6 = document.querySelector('#carousel6');
const KnopL6 = document.querySelector('#carousel_knopL6');
const KnopR6 = document.querySelector('#carousel_knopR6');

// car7
const MarktCar7 = document.querySelector('#carousel7');
const KnopL7 = document.querySelector('#carousel_knopL7');
const KnopR7 = document.querySelector('#carousel_knopR7');

// car8
const MarktCar8 = document.querySelector('#carousel8');
const KnopL8 = document.querySelector('#carousel_knopL8');
const KnopR8 = document.querySelector('#carousel_knopR8');

// hetzelfde voor alle carousels
const item = document.querySelector('.carouselitem');
const itemWidth = item.offsetWidth + 16;

// car 1
KnopR.addEventListener('click', () => {
  MarktCar.scrollBy({ left: itemWidth, behavior: 'smooth' });
  console.log("rechts");
});
KnopL.addEventListener('click', () => {
  MarktCar.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  console.log("links");
});

// car 2
KnopR2.addEventListener('click', () => {
  MarktCar2.scrollBy({ left: itemWidth, behavior: 'smooth' });
  console.log("rechts");
});
KnopL2.addEventListener('click', () => {
  MarktCar2.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  console.log("links");
});

// car 3
KnopR3.addEventListener('click', () => {
  MarktCar3.scrollBy({ left: itemWidth, behavior: 'smooth' });
  console.log("rechts");
});
KnopL3.addEventListener('click', () => {
  MarktCar3.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  console.log("links");
});

// car 4
KnopR4.addEventListener('click', () => {
  MarktCar4.scrollBy({ left: itemWidth, behavior: 'smooth' });
  console.log("rechts");
});
KnopL4.addEventListener('click', () => {
  MarktCar4.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  console.log("links");
});

// car 5
KnopR5.addEventListener('click', () => {
  MarktCar5.scrollBy({ left: itemWidth, behavior: 'smooth' });
  console.log("rechts");
});
KnopL5.addEventListener('click', () => {
  MarktCar5.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  console.log("links");
});

// car 6
KnopR6.addEventListener('click', () => {
  MarktCar6.scrollBy({ left: itemWidth, behavior: 'smooth' });
  console.log("rechts");
});
KnopL6.addEventListener('click', () => {
  MarktCar6.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  console.log("links");
});

// car 7
KnopR7.addEventListener('click', () => {
  MarktCar7.scrollBy({ left: itemWidth, behavior: 'smooth' });
  console.log("rechts");
});
KnopL7.addEventListener('click', () => {
  MarktCar7.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  console.log("links");
});

// car 8
KnopR8.addEventListener('click', () => {
  MarktCar8.scrollBy({ left: itemWidth, behavior: 'smooth' });
  console.log("rechts");
});
KnopL8.addEventListener('click', () => {
  MarktCar8.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  console.log("links");
});