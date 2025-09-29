// // JavaScript Document-oud
// console.log("wazaa");


// /* Menu */
// const menuBtn = document.querySelector('.menu-btn');
// const mobileMenu = document.querySelector('#mobileMenu');

// menuBtn.addEventListener('click', () => {
//   mobileMenu.classList.toggle('show');
// });

// // hetzelfde voor alle carousels
// const item = document.querySelector('.carouselitem');
// const itemWidth = item.offsetWidth + 16;


// // carousel knoppen marketplace pagina:

// // car1
// const MarktCar = document.querySelector('#carousel');
// const KnopL = document.querySelector('#carousel_knopL');
// const KnopR = document.querySelector('#carousel_knopR');

// // car2
// const MarktCar2 = document.querySelector('#carousel2');
// const KnopL2 = document.querySelector('#carousel_knopL2');
// const KnopR2 = document.querySelector('#carousel_knopR2');

// // car3
// const MarktCar3 = document.querySelector('#carousel3');
// const KnopL3 = document.querySelector('#carousel_knopL3');
// const KnopR3 = document.querySelector('#carousel_knopR3');

// // car4
// const MarktCar4 = document.querySelector('#carousel4');
// const KnopL4 = document.querySelector('#carousel_knopL4');
// const KnopR4 = document.querySelector('#carousel_knopR4');

// // car5
// const MarktCar5 = document.querySelector('#carousel5');
// const KnopL5 = document.querySelector('#carousel_knopL5');
// const KnopR5 = document.querySelector('#carousel_knopR5');

// // car6
// const MarktCar6 = document.querySelector('#carousel6');
// const KnopL6 = document.querySelector('#carousel_knopL6');
// const KnopR6 = document.querySelector('#carousel_knopR6');

// // car7
// const MarktCar7 = document.querySelector('#carousel7');
// const KnopL7 = document.querySelector('#carousel_knopL7');
// const KnopR7 = document.querySelector('#carousel_knopR7');

// // car8
// const MarktCar8 = document.querySelector('#carousel8');
// const KnopL8 = document.querySelector('#carousel_knopL8');
// const KnopR8 = document.querySelector('#carousel_knopR8');

// //-------------------------index pagina
// const indCar1 = document.querySelector('.carousel_discover_the_world');
// const IknopL1 = document.querySelector('#discover_carousel_knopL');
// const IknopR1 = document.querySelector('#discover_carousel_knopR');


// //-------------------------markt carousels
// // // car 1
// // KnopR.addEventListener('click', () => {
// //   MarktCar.scrollBy({ left: itemWidth, behavior: 'smooth' });
// //   console.log("rechts");
// // });
// // KnopL.addEventListener('click', () => {
// //   MarktCar.scrollBy({ left: -itemWidth, behavior: 'smooth' });
// //   console.log("links");
// // });

// // // car 2
// KnopR2.addEventListener('click', () => {
//   MarktCar2.scrollBy({ left: itemWidth, behavior: 'smooth' });
//   console.log("rechts");
// });
// KnopL2.addEventListener('click', () => {
//   MarktCar2.scrollBy({ left: -itemWidth, behavior: 'smooth' });
//   console.log("links");
// });

// // car 3
// KnopR3.addEventListener('click', () => {
//   MarktCar3.scrollBy({ left: itemWidth, behavior: 'smooth' });
//   console.log("rechts");
// });
// KnopL3.addEventListener('click', () => {
//   MarktCar3.scrollBy({ left: -itemWidth, behavior: 'smooth' });
//   console.log("links");
// });

// // car 4
// KnopR4.addEventListener('click', () => {
//   MarktCar4.scrollBy({ left: itemWidth, behavior: 'smooth' });
//   console.log("rechts");
// });
// KnopL4.addEventListener('click', () => {
//   MarktCar4.scrollBy({ left: -itemWidth, behavior: 'smooth' });
//   console.log("links");
// });

// // car 5
// KnopR5.addEventListener('click', () => {
//   MarktCar5.scrollBy({ left: itemWidth, behavior: 'smooth' });
//   console.log("rechts");
// });
// KnopL5.addEventListener('click', () => {
//   MarktCar5.scrollBy({ left: -itemWidth, behavior: 'smooth' });
//   console.log("links");
// });

// // car 6
// KnopR6.addEventListener('click', () => {
//   MarktCar6.scrollBy({ left: itemWidth, behavior: 'smooth' });
//   console.log("rechts");
// });
// KnopL6.addEventListener('click', () => {
//   MarktCar6.scrollBy({ left: -itemWidth, behavior: 'smooth' });
//   console.log("links");
// });

// // car 7
// KnopR7.addEventListener('click', () => {
//   MarktCar7.scrollBy({ left: itemWidth, behavior: 'smooth' });
//   console.log("rechts");
// });
// KnopL7.addEventListener('click', () => {
//   MarktCar7.scrollBy({ left: -itemWidth, behavior: 'smooth' });
//   console.log("links");
// });

// // car 8
// KnopR8.addEventListener('click', () => {
//   MarktCar8.scrollBy({ left: itemWidth, behavior: 'smooth' });
//   console.log("rechts");
// });
// KnopL8.addEventListener('click', () => {
//   MarktCar8.scrollBy({ left: -itemWidth, behavior: 'smooth' });
//   console.log("links");
// });


// //-------------------------index pagina carousels
// // car
// IknopR1.addEventListener('click', () => {
//   indCar1.scrollBy({ left: itemWidth, behavior: 'smooth' });
//   console.log("rechts index");
// });
// IknopL1.addEventListener('click', () => {
//   indCar1.scrollBy({ left: -itemWidth, behavior: 'smooth' });
//   console.log("links index ");
// });

// console.log("itemWidth:", itemWidth);



// JavaScript Document


console.log("wazaa");

document.addEventListener('DOMContentLoaded', () => {

  /* Menu */
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('#mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });
  }

  // Functie om carousel scroll knoppen niet de markt page te laten crashen..
  function setupCarousel(carouselId, knopLId, knopRId) {
    const carousel = document.querySelector(carouselId);
    const knopL = document.querySelector(knopLId);
    const knopR = document.querySelector(knopRId);
    const item = carousel ? carousel.querySelector('.carouselitem') : null;

    if (carousel && knopL && knopR && item) {
      const itemWidth = item.offsetWidth + 16; // 16px gap

      knopR.addEventListener('click', () => {
        carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
        console.log(`rechts ${carouselId}`);
      });

      knopL.addEventListener('click', () => {
        carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        console.log(`links ${carouselId}`);
      });
    }
  }

  // marketplace carousels
  setupCarousel('#carousel', '#carousel_knopL', '#carousel_knopR');
  setupCarousel('#carousel2', '#carousel_knopL2', '#carousel_knopR2');
  setupCarousel('#carousel3', '#carousel_knopL3', '#carousel_knopR3');
  setupCarousel('#carousel4', '#carousel_knopL4', '#carousel_knopR4');
  setupCarousel('#carousel5', '#carousel_knopL5', '#carousel_knopR5');
  setupCarousel('#carousel6', '#carousel_knopL6', '#carousel_knopR6');
  setupCarousel('#carousel7', '#carousel_knopL7', '#carousel_knopR7');
  setupCarousel('#carousel8', '#carousel_knopL8', '#carousel_knopR8');

  // index pagina carousels
  const indCar1 = document.querySelector('.carousel_discover_the_world');
  const IknopL1 = document.querySelector('#discover_carousel_knopL');
  const IknopR1 = document.querySelector('#discover_carousel_knopR');
  const indItem = indCar1 ? indCar1.querySelector('.carouselitem') : null;

  const indCar2 = document.querySelector('.carousel_explore_gamemodes');
  const IknopL2 = document.querySelector('#gamemode_carousel_knopL');
  const IknopR2 = document.querySelector('#gamemode_carousel_knopR');
  const ind2Item = indCar2 ? indCar2.querySelector('.carouselitem2') : null;

  const indCar3 = document.querySelector('.carousel_updates');
  const IknopL3 = document.querySelector('#updates_carousel_knopL');
  const IknopR3 = document.querySelector('#updates_carousel_knopR');
  const ind3Item = indCar3 ? indCar3.querySelector('.carouselitem3') : null;

  const indCar4 = document.querySelector('.whats_new_carousel');
  const IknopL4 = document.querySelector('#news_carousel_knopL');
  const IknopR4 = document.querySelector('#news_carousel_knopR');
  const ind4Item = indCar4 ? indCar4.querySelector('.carouselitem4') : null;

  if (indCar1 && IknopL1 && IknopR1 && indItem) {
    const itemWidth = indItem.offsetWidth + 16;

    IknopR1.addEventListener('click', () => {
      indCar1.scrollBy({ left: itemWidth, behavior: 'smooth' });
      console.log("rechts index");
    });

    IknopL1.addEventListener('click', () => {
      indCar1.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      console.log("links index");
    });
  }

  if (indCar2 && IknopL2 && IknopR2 && ind2Item) {
    const item2Width = ind2Item.offsetWidth + 16;

    IknopR2.addEventListener('click', () => {
      indCar2.scrollBy({ left: item2Width, behavior: 'smooth' });
      console.log("rechts index 2");
    });

    IknopL2.addEventListener('click', () => {
      indCar2.scrollBy({ left: -item2Width, behavior: 'smooth' });
      console.log("links index 2");
    });
  }

  if (indCar3 && IknopL3 && IknopR3 && ind3Item) {
    const item3Width = ind3Item.offsetWidth + 16;

    IknopR3.addEventListener('click', () => {
      indCar3.scrollBy({ left: item3Width, behavior: 'smooth' });
      console.log("rechts index 3");
    });

    IknopL3.addEventListener('click', () => {
      indCar3.scrollBy({ left: -item3Width, behavior: 'smooth' });
      console.log("links index 3");
    });
  }

  if (indCar4 && IknopL4 && IknopR4 && ind4Item) {
    const item4Width = ind4Item.offsetWidth + 16;

    IknopR4.addEventListener('click', () => {
      indCar4.scrollBy({ left: item4Width, behavior: 'smooth' });
      console.log("rechts index 4");
    });

    IknopL4.addEventListener('click', () => {
      indCar4.scrollBy({ left: -item4Width, behavior: 'smooth' });
      console.log("links index 4");
    });
  }

});

// martk carousel
function markActiveIndexItem() {
  const carousel = document.querySelector('.carousel_discover_the_world');
  if (!carousel) return;

  const items = carousel.querySelectorAll('.carouselitem');
  const carouselRect = carousel.getBoundingClientRect();
  const carouselMiddle = carouselRect.left + carouselRect.width / 2;

  let closestItem = null;
  let closestDistance = Infinity;

  items.forEach(item => {
    const itemRect = item.getBoundingClientRect();
    const itemMiddle = itemRect.left + itemRect.width / 2;
    const distance = Math.abs(carouselMiddle - itemMiddle);

    item.classList.remove('active');
    if (distance < closestDistance) {
      closestDistance = distance;
      closestItem = item;
    }
  });

  if (closestItem) {
    closestItem.classList.add('active');
  }
}

// Alleen uitvoeren voor de index carousel
const indCar1 = document.querySelector('.carousel_discover_the_world');
if (indCar1) {
  indCar1.addEventListener('scroll', () => {
    markActiveIndexItem();
  });
  markActiveIndexItem(); // initial check
}
