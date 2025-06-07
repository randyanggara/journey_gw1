// Hamburger menu
const hamburger = document.getElementById('hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero .content');

if (hamburger && navbarNav && hero && heroContent) {
  hamburger.addEventListener('click', function () {
    navbarNav.classList.toggle('active');
    hero.classList.toggle('slide-hero');
    heroContent.classList.toggle('slide-hero');
  });

  document.addEventListener('click', function(e) {
    if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
      navbarNav.classList.remove('active');
      hero.classList.remove('slide-hero');
      heroContent.classList.remove('slide-hero');
    }
  });
}

// Typewriter effect
window.addEventListener('DOMContentLoaded', function() {
  var el = document.getElementById('typewriter');
  if (el) {
    var text = "journey gw";
    var i = 0;
    function type() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i++);
        setTimeout(type, 120);
      }
    }
    type();
  }
});

// Hero particles
window.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 1,
      d: Math.random() * 0.8 + 0.2,
      a: Math.random() * Math.PI * 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.shadowColor = '#e0b07b';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
      p.x += Math.cos(p.a) * p.d * 0.3;
      p.y += Math.sin(p.a) * p.d * 0.3;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    }
    requestAnimationFrame(draw);
  }
  draw();
});

// HAPUS kode lightbox galeri
// HAPUS kode ScrollReveal galeri

// Scroll Reveal Animations (hanya hero)
ScrollReveal().reveal('.hero .content', {
  delay: 200,
  distance: '40px',
  origin: 'bottom',
  duration: 800,
  easing: 'ease',
  reset: false
});

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', function() {
  if (window.scrollY > 5) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
scrollBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});