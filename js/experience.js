/* The K-Square — Experience: interactive bento gallery (vanilla port of the
 * InteractiveBentoGallery component). Supports images AND videos, staggered
 * fade-in on scroll, hover captions, click-to-expand lightbox, and a thumbnail
 * dock to rotate through items. Replace the FILLER items below with real media. */
(function () {
  'use strict';

  /* ---- Media data ------------------------------------------------------
   * type: 'image' | 'video'
   * span: 'lg' (2x2) | 'wide' (2x1) | 'tall' (1x2) | 'sm' (1x1)
   * title  = the label shown on hover / in the lightbox (matches the filename).
   * span   = box shape, matched to the file's orientation:
   *          landscape -> 'lg' (2x2) / 'wide' (2x1) / 'sm' (1x1)
   *          portrait  -> 'tall' (1x2)
   *          square    -> 'sm' (1x1)
   * pos    = optional focal point for the tile crop (CSS object-position),
   *          e.g. 'center top' keeps faces in frame on a tall subject.
   * desc   = optional one-line subtitle under the title (omit to show name only).
   * To add/replace media: drop a file in assets/experience/ and edit a line below.
   * Note: URLs are percent-encoded because the filenames contain spaces. */
  var MEDIA = [
    { id: 1,  type: 'video', title: 'Seoul In Motion',   url: 'assets/experience/Seoul%20In%20Motion.mp4',   span: 'lg'   }, // landscape
    { id: 2,  type: 'image', title: 'Amuse',             url: 'assets/experience/Amuse.jpg',                 span: 'tall' }, // portrait
    { id: 3,  type: 'image', title: 'Beauty of Joseon',  url: 'assets/experience/Beauty%20of%20Joseon.jpg',  span: 'sm'   }, // landscape
    { id: 4,  type: 'image', title: 'BTS',               url: 'assets/experience/BTS.jpg',                   span: 'sm',   pos: 'center top' }, // square — crop from the top so faces stay in frame
    { id: 5,  type: 'video', title: 'Korean Beauty',     url: 'assets/experience/Korean%20Beauty.mp4',       span: 'tall' }, // portrait
    { id: 6,  type: 'video', title: 'Budae jjigae',      url: 'assets/experience/Budae%20jjigae.mp4',        span: 'wide' }, // landscape
    { id: 7,  type: 'image', title: 'Massage',           url: 'assets/experience/Massage.jpg',               span: 'sm'   }, // landscape
    { id: 8,  type: 'image', title: 'Black Pink',        url: 'assets/experience/Black%20Pink.jpg',          span: 'tall' }, // portrait
    { id: 9,  type: 'video', title: 'Bibimbap',          url: 'assets/experience/Bibimbap.mp4',              span: 'lg'   }, // landscape
    { id: 10, type: 'image', title: 'Global Icons',      url: 'assets/experience/Global%20Icons.jpg',        span: 'sm'   }, // landscape
    { id: 11, type: 'video', title: 'Korean Market',     url: 'assets/experience/Korean%20Market.mp4',       span: 'sm'   }, // landscape
    { id: 12, type: 'image', title: 'Crane Game',        url: 'assets/experience/Crane%20Game.jpg',          span: 'sm'   }, // landscape
    { id: 13, type: 'video', title: 'KBBQ',              url: 'assets/experience/KBBQ.mp4',                  span: 'wide' }, // landscape
    { id: 14, type: 'image', title: '4 Cut Photos',      url: 'assets/experience/4%20Cut%20Photos.png',      span: 'sm'   }, // square
    { id: 15, type: 'video', title: 'The Palace',        url: 'assets/experience/The%20Palace.mp4',          span: 'sm'   }, // landscape
    { id: 16, type: 'image', title: 'Korean Food',       url: 'assets/experience/Korean%20Food.jpg',         span: 'sm'   }  // landscape
  ];

  var gallery = document.getElementById('experience-gallery');
  if (!gallery) return;

  /* ---- Video autoplay when in view ------------------------------------ */
  var videoObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var v = entry.target;
          if (entry.isIntersecting) { v.play().catch(function () {}); }
          else { v.pause(); }
        });
      }, { rootMargin: '50px', threshold: 0.1 })
    : null;

  /* Build an <img> or <video> for a media item. */
  function buildMedia(item, className) {
    var el;
    if (item.type === 'video') {
      el = document.createElement('video');
      el.src = item.url;
      el.muted = true;
      el.loop = true;
      el.playsInline = true;
      el.setAttribute('playsinline', '');
      el.setAttribute('muted', '');
      el.preload = 'metadata';
      if (videoObserver) videoObserver.observe(el);
    } else {
      el = document.createElement('img');
      el.src = item.url;
      el.alt = item.title;
      el.loading = 'lazy';
      el.decoding = 'async';
    }
    el.className = className || '';
    return el;
  }

  /* ---- Grid ------------------------------------------------------------ */
  /* Own reveal observer: the tiles are built after scroll-reveal.js has already
   * scanned the page, so we fade them in ourselves as they scroll into view. */
  var ioFired = false;
  var revealObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { ioFired = true; e.target.classList.add('reveal--visible'); revealObserver.unobserve(e.target); }
        });
      }, { threshold: 0.12 })
    : null;

  MEDIA.forEach(function (item, i) {
    var tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'exp-tile exp-tile--' + item.span + ' reveal';
    tile.style.transitionDelay = (i * 0.05) + 's';
    tile.setAttribute('aria-label', 'Open ' + item.title);

    var tileMedia = buildMedia(item, 'exp-tile__media');
    if (item.pos) tileMedia.style.objectPosition = item.pos;  // focal point for the crop
    tile.appendChild(tileMedia);

    var cap = document.createElement('div');
    cap.className = 'exp-tile__caption';
    var capH = document.createElement('h3');
    capH.textContent = item.title;
    cap.appendChild(capH);
    if (item.desc) {
      var capP = document.createElement('p');
      capP.textContent = item.desc;
      cap.appendChild(capP);
    }
    tile.appendChild(cap);

    tile.addEventListener('click', function () { openLightbox(i); });
    gallery.appendChild(tile);

    if (revealObserver) revealObserver.observe(tile);
    else tile.classList.add('reveal--visible');
  });

  /* Safety net: if IntersectionObserver never fires (some embedded webviews),
   * reveal everything after a short delay so the gallery is never left blank. */
  if (revealObserver) {
    setTimeout(function () {
      if (!ioFired) {
        gallery.querySelectorAll('.exp-tile').forEach(function (t) { t.classList.add('reveal--visible'); });
      }
    }, 1600);
  }

  /* ---- Lightbox / modal ------------------------------------------------ */
  var current = 0;
  var lb = document.createElement('div');
  lb.className = 'exp-lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.hidden = true;
  lb.innerHTML =
    '<div class="exp-lightbox__backdrop" data-close></div>' +
    '<button class="exp-lightbox__close" type="button" aria-label="Close">&times;</button>' +
    '<figure class="exp-lightbox__stage">' +
      '<div class="exp-lightbox__media"></div>' +
      '<figcaption class="exp-lightbox__caption"><h3></h3><p></p></figcaption>' +
    '</figure>' +
    '<div class="exp-dock" aria-label="Switch media"></div>';
  document.body.appendChild(lb);

  var stageMedia = lb.querySelector('.exp-lightbox__media');
  var capTitle = lb.querySelector('.exp-lightbox__caption h3');
  var capDesc = lb.querySelector('.exp-lightbox__caption p');
  var dock = lb.querySelector('.exp-dock');

  /* Build the thumbnail dock once. */
  MEDIA.forEach(function (item, i) {
    var thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'exp-dock__thumb';
    thumb.setAttribute('aria-label', item.title);
    thumb.appendChild(buildMedia(item, 'exp-dock__media'));
    thumb.addEventListener('click', function (e) { e.stopPropagation(); showItem(i); });
    dock.appendChild(thumb);
  });
  var thumbs = Array.prototype.slice.call(dock.children);

  function showItem(i) {
    current = i;
    var item = MEDIA[i];
    // rebuild the stage media (fresh element each time so videos restart cleanly)
    stageMedia.innerHTML = '';
    var media = buildMedia(item, 'exp-lightbox__mediaEl');
    if (item.type === 'video') { media.controls = true; media.autoplay = true; }
    stageMedia.appendChild(media);
    capTitle.textContent = item.title;
    capDesc.textContent = item.desc || '';
    thumbs.forEach(function (t, ti) { t.classList.toggle('is-active', ti === i); });
    // trigger the stage animation
    stageMedia.classList.remove('exp-lightbox__media--in');
    void stageMedia.offsetWidth;
    stageMedia.classList.add('exp-lightbox__media--in');
  }

  function openLightbox(i) {
    lb.hidden = false;
    document.body.classList.add('exp-noscroll');
    showItem(i);
    document.addEventListener('keydown', onKey);
  }

  function closeLightbox() {
    lb.hidden = true;
    document.body.classList.remove('exp-noscroll');
    stageMedia.innerHTML = '';
    document.removeEventListener('keydown', onKey);
  }

  function onKey(e) {
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') showItem((current + 1) % MEDIA.length);
    else if (e.key === 'ArrowLeft') showItem((current - 1 + MEDIA.length) % MEDIA.length);
  }

  lb.querySelector('.exp-lightbox__close').addEventListener('click', closeLightbox);
  lb.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', closeLightbox);
  });
})();
