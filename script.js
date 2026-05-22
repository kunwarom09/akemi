// ── Nav scroll ──
(function () {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
})();

// ── Hamburger / mobile menu ──
(function () {
  var btn = document.getElementById('hamburger');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('.mobile-link').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.classList.remove('open');
    });
  });
})();

// ── FAQ accordion ──
(function () {
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-question');
    if (!q) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });
})();

// ── Fade-up on scroll ──
(function () {
  var els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach(function (el) { obs.observe(el); });
})();

// ── Sticky Buy Button (mobile) ──
(function () {
  var btn = document.getElementById('stickyBuyBtn');
  var hero = document.querySelector('.hero');
  if (!btn || !hero) return;

  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          btn.classList.add('visible');
        } else {
          btn.classList.remove('visible');
        }
      });
    },
    { threshold: 0.15 }
  );
  obs.observe(hero);
})();