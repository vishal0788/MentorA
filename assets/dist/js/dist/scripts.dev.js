"use strict";

window.addEventListener('DOMContentLoaded', function (event) {
  // Navbar shrink function
  var navbarShrink = function navbarShrink() {
    var navbarCollapsible = document.body.querySelector('#mainNav');

    if (!navbarCollapsible) {
      return;
    }

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  }; // Shrink the navbar 


  navbarShrink(); // Shrink the navbar when page is scrolled

  document.addEventListener('scroll', navbarShrink); // Activate Bootstrap scrollspy on the main nav element

  var mainNav = document.body.querySelector('#mainNav');

  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74
    });
  }

  ; // Collapse responsive navbar when toggler is visible

  var navbarToggler = document.body.querySelector('.navbar-toggler');
  var responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', function () {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});