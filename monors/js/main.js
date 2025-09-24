document.addEventListener('DOMContentLoaded', function () {
  // Reveal animations
  var observed = document.querySelectorAll('.reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  observed.forEach(function (el) { io.observe(el); });

  // Mobile menu toggle
  var mobileToggle = document.querySelector('.mobile-menu-toggle');
  var navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    var navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileToggle.contains(event.target) && !navMenu.contains(event.target)) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });

    // Close menu on window resize if screen becomes larger
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
});


