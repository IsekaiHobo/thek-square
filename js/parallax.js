function initParallax() {
  const nav = document.querySelector('.nav');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Single-column below this breakpoint: vertical parallax would overlap stacked content.
  const desktop = window.matchMedia('(min-width: 769px)');
  const items = prefersReduced ? [] : Array.from(document.querySelectorAll('[data-parallax]'));
  let ticking = false;

  function update() {
    const y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle('nav--solid', y > 40);
    const active = desktop.matches;
    items.forEach((el) => {
      if (!active) { el.style.transform = ''; return; }
      const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.15;
      el.style.transform = 'translate3d(0,' + (y * speed * -1) + 'px,0)';
    });
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

document.addEventListener('DOMContentLoaded', initParallax);
