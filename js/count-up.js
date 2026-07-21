/* The K-Square — count-up numbers.
 * Any element with data-countup="<number>" animates from 0 to that number
 * the first time it scrolls into view. Optional data-countup-prefix /
 * data-countup-suffix wrap the value (e.g. suffix "+" or "m").
 * These elements carry no data-i18n, so the digits are language-agnostic. */
(function () {
  'use strict';

  var els = document.querySelectorAll('[data-countup]');
  if (!els.length) return;

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function render(el, n) {
    var pre = el.getAttribute('data-countup-prefix') || '';
    var suf = el.getAttribute('data-countup-suffix') || '';
    el.textContent = pre + Math.round(n).toLocaleString('en-US') + suf;
  }

  function animate(el) {
    var target = parseFloat(el.getAttribute('data-countup')) || 0;
    if (reduce) { render(el, target); return; }
    var duration = 1600;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); /* easeOutCubic */
      render(el, target * eased);
      if (p < 1) requestAnimationFrame(step);
      else render(el, target);
    }
    requestAnimationFrame(step);
  }

  /* Start at zero so the count is visible from the beginning. */
  for (var i = 0; i < els.length; i++) render(els[i], 0);

  if (!('IntersectionObserver' in window)) {
    for (var j = 0; j < els.length; j++) animate(els[j]);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  for (var k = 0; k < els.length; k++) io.observe(els[k]);
})();
