function initMediaFallback(videoSelector, posterSrc) {
  const video = document.querySelector(videoSelector);
  if (!video) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isNarrowViewport = window.matchMedia('(max-width: 768px)').matches;

  if (prefersReducedMotion || isNarrowViewport) {
    const poster = document.createElement('img');
    poster.src = posterSrc;
    poster.alt = video.getAttribute('aria-label') || '';
    poster.className = video.className;
    video.replaceWith(poster);
  } else {
    video.play().catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initMediaFallback('#hero-video', 'assets/hero-render.png');
});
