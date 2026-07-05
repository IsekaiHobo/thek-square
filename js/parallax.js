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

// Some browsers block muted autoplay until a gesture. Force play across every
// media-ready event and the next frame, and fall back to the first user
// interaction, so the hero video always loops instead of freezing on a frame.
function initHeroVideo() {
  const video = document.querySelector('video.hero__media');
  if (!video) return;

  // Guarantee the element is muted + inline so browsers permit autoplay.
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  let playing = false;
  function attempt() {
    if (playing) return;
    video.muted = true;
    const p = video.play();
    if (p && typeof p.then === 'function') {
      p.then(function () { playing = true; teardown(); }).catch(function () {});
    }
  }

  const mediaEvents = ['loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough'];
  const gestureEvents = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'wheel'];
  function onGesture() { attempt(); }
  function teardown() {
    mediaEvents.forEach(function (e) { video.removeEventListener(e, attempt); });
    gestureEvents.forEach(function (e) { window.removeEventListener(e, onGesture); });
  }

  mediaEvents.forEach(function (e) { video.addEventListener(e, attempt); });
  gestureEvents.forEach(function (e) { window.addEventListener(e, onGesture, { passive: true }); });

  attempt();
  if (typeof requestAnimationFrame === 'function') requestAnimationFrame(attempt);
}

document.addEventListener('DOMContentLoaded', function () {
  initParallax();
  initHeroVideo();
});
