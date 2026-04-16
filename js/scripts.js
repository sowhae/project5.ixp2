/* ── MASCOT ANIMATION ── */
const mascot = document.querySelector('.logo__mascot');

if (mascot) {
  mascot.addEventListener('click', () => {
    if (mascot.classList.contains('is-rolling') || mascot.classList.contains('is-returning')) return;

    mascot.classList.remove('is-returning');
    mascot.classList.add('is-rolling');

    setTimeout(() => {
      mascot.classList.remove('is-rolling');
      mascot.classList.add('is-returning');
    }, 1400);

    setTimeout(() => {
      mascot.classList.remove('is-returning');
    }, 2800);
  });
}

/* ── BAGEL ENTRY ANIMATION ── */
const bagelImgs = document.querySelectorAll('.bagel-entry__img');

if (bagelImgs.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.closest('.bagel-entry').classList.add('is-visible');
      }
    });
  }, { threshold: 0.3 });

  bagelImgs.forEach(img => observer.observe(img));
}

/* homepage popups */
document.addEventListener('DOMContentLoaded', function() {

  var menuTrigger = document.querySelector('.js-menu-trigger');
  if (menuTrigger) {
    menuTrigger.addEventListener('click', function() {
      document.body.classList.toggle('show-menu');
    });
  }

  const pins = document.querySelectorAll('.map-pin');
  const card = document.getElementById('map-card');
  const cardImg1 = document.getElementById('map-card-img1');
  const cardImg2 = document.getElementById('map-card-img2');

  const pinData = [
    { img1: 'images/place1-title.png',  img2: 'images/place1-hand.png',  page: 'place1.html'  },
    { img1: 'images/place2-title.png',  img2: 'images/place2-hand.png',  page: 'place2.html'  },
    { img1: 'images/place3-title.png',  img2: 'images/place3-hand.png',  page: 'place3.html'  },
    { img1: 'images/place4-title.png',  img2: 'images/place4-hand.png',  page: 'place4.html'  },
    { img1: 'images/miopane-title.png', img2: 'images/miopane-hand.png', page: 'miopane.html' },
  ];

  pins.forEach((pin) => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const i = parseInt(pin.getAttribute('data-index'));
      cardImg1.src = pinData[i].img1;
      cardImg2.src = pinData[i].img2;
      card.href = pinData[i].page;

      const mapWrap = document.querySelector('.map-wrap');
      const mapRect = mapWrap.getBoundingClientRect();
      const pinRect = pin.getBoundingClientRect();

      const pinLeft = pinRect.left - mapRect.left;
      const pinTop = pinRect.top - mapRect.top;

      card.style.left = (pinLeft - 10) + 'px';
      card.style.top = (pinTop - card.offsetHeight - 10) + 'px';
      card.style.bottom = 'auto';

      card.classList.add('map-card--visible');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.map-card')) {
      card.classList.remove('map-card--visible');
    }
  });

  const mascot = document.querySelector('.logo__mascot');
  if (mascot) {
    mascot.addEventListener('click', () => {
      if (mascot.classList.contains('is-rolling') || mascot.classList.contains('is-returning')) return;
      mascot.classList.remove('is-returning');
      mascot.classList.add('is-rolling');
      setTimeout(() => {
        mascot.classList.remove('is-rolling');
        mascot.classList.add('is-returning');
      }, 1400);
      setTimeout(() => {
        mascot.classList.remove('is-returning');
      }, 2800);
    });
  }

  const bagelImgs = document.querySelectorAll('.bagel-entry__img');
  if (bagelImgs.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.closest('.bagel-entry').classList.add('is-visible');
        }
      });
    }, { threshold: 0.3 });
    bagelImgs.forEach(img => observer.observe(img));
  }

});