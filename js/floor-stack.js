/* The K-Square — interactive floor stack.
 * Left-column floor buttons ([data-floor]) swap the visible detail panel
 * (.floor-detail[data-floor]) on the right. The floor CTA pre-selects the
 * matching option in the leasing inquiry form. */
(function () {
  'use strict';

  var nav = document.querySelector('.floor-stack__nav');
  if (!nav) return;

  var buttons = nav.querySelectorAll('.floor-btn');
  var panels = document.querySelectorAll('.floor-detail');

  function activate(floor) {
    for (var i = 0; i < buttons.length; i++) {
      var on = buttons[i].getAttribute('data-floor') === floor;
      buttons[i].classList.toggle('is-active', on);
      buttons[i].setAttribute('aria-selected', on ? 'true' : 'false');
    }
    for (var j = 0; j < panels.length; j++) {
      panels[j].hidden = panels[j].getAttribute('data-floor') !== floor;
    }
  }

  for (var b = 0; b < buttons.length; b++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        activate(btn.getAttribute('data-floor'));
      });
    })(buttons[b]);
  }

  /* Arrow-key navigation between floor tabs. */
  nav.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    var list = Array.prototype.slice.call(buttons);
    var idx = list.indexOf(document.activeElement);
    if (idx === -1) return;
    e.preventDefault();
    var next = e.key === 'ArrowDown'
      ? (idx + 1) % list.length
      : (idx - 1 + list.length) % list.length;
    list[next].focus();
    activate(list[next].getAttribute('data-floor'));
  });

  /* CTA scrolls to the inquiry form and pre-selects the floor. */
  var ctas = document.querySelectorAll('.floor-detail__cta');
  for (var c = 0; c < ctas.length; c++) {
    (function (cta) {
      cta.addEventListener('click', function () {
        var floor = cta.getAttribute('data-floor');
        var select = document.querySelector('#leasing-form select[name="floor"]');
        if (select) select.value = floor + 'f';
      });
    })(ctas[c]);
  }
})();
