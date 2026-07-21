/* The K-Square — monthly fixed rent simulator.
 * Rent = per-m² standard rate (floor midpoint) × chosen area.
 * The ₩ line is an approximate reference for Korean investors
 * (≈25 KRW per PHP). Language-aware strings re-render on ksq:langchange. */
(function () {
  'use strict';

  var root = document.getElementById('rent-simulator');
  if (!root) return;

  /* area = usable m²; rate = midpoint of the published per-m² range. */
  var FLOORS = {
    '1': { area: 465, rate: 900 },
    '2': { area: 592, rate: 550 },
    '3': { area: 595, rate: 600 },
    '4': { area: 498, rate: 400 }
  };
  var KRW_PER_PHP = 25;
  var MIN_AREA = 15;
  var STEP = 5;

  var buttons = root.querySelectorAll('.sim-floor');
  var slider = document.getElementById('sim-slider');
  var badge = document.getElementById('sim-area-badge');
  var maxLabel = document.getElementById('sim-max-label');
  var amountEl = document.getElementById('sim-amount');
  var subEl = document.getElementById('sim-sub');
  var current = '1';

  function t(key) {
    return (window.ksqI18n && window.ksqI18n.t) ? window.ksqI18n.t(key) : key;
  }
  function isKo() {
    return (document.documentElement.getAttribute('lang') || 'en') === 'ko';
  }
  function fmt(n) {
    return Math.round(n).toLocaleString('en-US');
  }

  function render() {
    var f = FLOORS[current];
    var area = parseInt(slider.value, 10);

    /* filled portion of the track (relative to the slider's reachable max) */
    var sliderMax = parseInt(slider.max, 10);
    var pct = sliderMax > MIN_AREA ? ((area - MIN_AREA) / (sliderMax - MIN_AREA)) * 100 : 0;
    slider.style.setProperty('--sim-fill', pct + '%');

    /* area badge — secondary unit differs by language (평 vs ft²) */
    if (isKo()) {
      badge.textContent = area + ' m² (약 ' + Math.round(area / 3.3058) + '평)';
    } else {
      badge.textContent = area + ' m² (~' + fmt(area * 10.7639) + ' ft²)';
    }

    /* max-side scale label */
    maxLabel.textContent = t('sim.max') + ' (' + f.area + ' m²)';

    /* result */
    var rent = area * f.rate;
    amountEl.textContent = fmt(rent) + ' PHP';
    var won = rent * KRW_PER_PHP;
    if (isKo()) {
      subEl.textContent = '약 ' + fmt(won / 10000) + '만 원 / 월 고정';
    } else {
      subEl.textContent = '≈ ₩' + fmt(won) + ' / month';
    }
  }

  function selectFloor(floor) {
    current = floor;
    var f = FLOORS[floor];
    for (var i = 0; i < buttons.length; i++) {
      var on = buttons[i].getAttribute('data-floor') === floor;
      buttons[i].classList.toggle('is-active', on);
      buttons[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    /* Step in 5 m² increments; the largest reachable value is the last
       step at or below the floor's usable area (e.g. 592 → 590, 498 → 495). */
    var maxSel = MIN_AREA + Math.floor((f.area - MIN_AREA) / STEP) * STEP;
    slider.step = STEP;
    slider.max = maxSel;
    if (parseInt(slider.value, 10) > maxSel) slider.value = maxSel;
    render();
  }

  for (var b = 0; b < buttons.length; b++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        selectFloor(btn.getAttribute('data-floor'));
      });
    })(buttons[b]);
  }
  slider.addEventListener('input', render);
  document.addEventListener('ksq:langchange', render);

  selectFloor('1');
})();
