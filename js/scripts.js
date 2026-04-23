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
    { img1: 'images/einstein-title.png',  img2: 'images/einstein-hand.png',  page: 'einstein.html'  },
    { img1: 'images/bageloo-title.png',   img2: 'images/bageloo-hand.png',   page: 'bageloo.html'   },
    { img1: 'images/winchells-title.png', img2: 'images/winchells-hand.png', page: 'winchells.html' },
    { img1: 'images/phills-title.png',    img2: 'images/phills-hand.png',    page: 'phills.html'    },
    { img1: 'images/miopane-title.png',   img2: 'images/miopane-hand.png',   page: 'miopane.html'   },
  ];

  pins.forEach((pin) => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const i = parseInt(pin.getAttribute('data-index'));
      cardImg1.src = pinData[i].img1;
      cardImg2.src = pinData[i].img2;
      card.href = pinData[i].page;

      card.classList.add('map-card--visible');

      const mapWrap = document.querySelector('.map-wrap');
      const mapRect = mapWrap.getBoundingClientRect();
      const pinRect = pin.getBoundingClientRect();

      const pinLeft = pinRect.left - mapRect.left;
      const pinTop = pinRect.top - mapRect.top;

      const cardWidth = 160;
      const cardHeight = 240;;

      let left = pinLeft - cardWidth / 2;
      let top = pinTop - cardHeight - 8;

      if (left < 0) left = 4;
      if (left + cardWidth > mapRect.width) left = mapRect.width - cardWidth - 4;
      if (top < 0) top = pinTop + 32;

      card.style.left = left + 'px';
      card.style.top = top + 'px';
      card.style.bottom = 'auto';
    });
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

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.map-card')) {
      card.classList.remove('map-card--visible');
    }
  });

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