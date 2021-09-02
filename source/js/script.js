'use strict';

var getNavJs = function () {
  var mainHeader = document.querySelector('.main-header');
  var mainNav = mainHeader.querySelector('.main-nav');
  var navToggle = mainNav.querySelector('.main-nav__toggle');

  mainHeader.classList.remove('main-header--no-js');
  mainNav.classList.add('main-nav--open');

  navToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('main-nav--close')) {
      mainNav.classList.remove('main-nav--close');
      mainNav.classList.add('main-nav--open');
    } else {
      mainNav.classList.add('main-nav--close');
      mainNav.classList.remove('main-nav--open');
    }
  });
};

var getSmoothLinks = function () {
  var smoothLinks = document.querySelectorAll('a[href^="#"]');

  smoothLinks.forEach(function (smoothLink) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      var id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
};

getNavJs();
getSmoothLinks();
