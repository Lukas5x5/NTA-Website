// Mobile-Hamburger-Menü für die Landingpage (≤860px).
(function () {
  'use strict';

  var LINKS = [
    { href: '#story', label: 'Story' },
    { href: '#fahrten', label: 'Fahrten' },
    { href: '#features', label: 'Features' },
    { href: '#partner', label: 'Partner' },
    { href: '#preise', label: 'Preise' },
    { href: 'roadmap.html', label: 'Roadmap' },
    { href: 'feedback.html', label: 'Feedback' }
  ];

  var overlay = null;
  var burger = null;

  function injectStyles() {
    var st = document.createElement('style');
    st.textContent =
      '[data-burger]{display:none;cursor:pointer;background:transparent;border:1px solid rgba(237,241,247,.3);border-radius:10px;padding:9px 10px;line-height:0;flex-shrink:0}' +
      '[data-burger] span{display:block;width:18px;height:2px;background:#EDF1F7;border-radius:2px;margin:4px 0;transition:transform .3s ease,opacity .3s ease}' +
      '@media (max-width: 860px){[data-burger]{display:inline-block}}' +
      '@media (max-width: 420px){header nav a[data-magnetic]{display:none !important}}' +
      '[data-mobile-menu]{position:fixed;inset:0;z-index:300;background:rgba(7,11,22,.97);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);display:flex;flex-direction:column;padding:24px 28px 40px;opacity:0;pointer-events:none;transition:opacity .3s ease}' +
      '[data-mobile-menu].open{opacity:1;pointer-events:auto}' +
      '[data-mobile-menu] nav{display:flex;flex-direction:column;gap:4px;margin-top:30px;flex:1}' +
      '[data-mobile-menu] nav a{font-family:"Archivo Black",sans-serif;font-size:clamp(28px,7.5vw,40px);line-height:1.35;text-transform:uppercase;letter-spacing:-.01em;color:#EDF1F7;text-decoration:none}' +
      '[data-mobile-menu] nav a:active{color:#FFA500}' +
      '[data-menu-cta]{display:block;text-align:center;background:#FFA500;color:#070b16;font-family:Rajdhani,sans-serif;font-weight:700;font-size:16px;letter-spacing:.12em;text-transform:uppercase;padding:16px 20px;border-radius:999px;text-decoration:none;margin-top:18px}' +
      '[data-menu-close]{cursor:pointer;align-self:flex-end;background:transparent;border:1px solid rgba(237,241,247,.3);border-radius:50%;width:44px;height:44px;color:#EDF1F7;font-size:22px;line-height:1}';
    document.head.appendChild(st);
  }

  function buildOverlay() {
    overlay = document.createElement('div');
    overlay.setAttribute('data-mobile-menu', '');
    var close = document.createElement('button');
    close.setAttribute('data-menu-close', '');
    close.setAttribute('aria-label', 'Menü schließen');
    close.textContent = '✕';
    close.addEventListener('click', toggle);
    overlay.appendChild(close);

    var nav = document.createElement('nav');
    LINKS.forEach(function (l) {
      var a = document.createElement('a');
      a.href = l.href;
      a.textContent = l.label;
      a.addEventListener('click', function () { toggle(false); });
      nav.appendChild(a);
    });
    overlay.appendChild(nav);

    var cta = document.createElement('a');
    cta.setAttribute('data-menu-cta', '');
    cta.href = '#abheben';
    cta.textContent = 'App holen';
    cta.addEventListener('click', function () { toggle(false); });
    overlay.appendChild(cta);

    document.body.appendChild(overlay);
  }

  function toggle(force) {
    if (!overlay) buildOverlay();
    var open = typeof force === 'boolean' ? force : !overlay.classList.contains('open');
    // Overlay erst kurz nach dem Einfügen öffnen, damit die Transition greift
    requestAnimationFrame(function () {
      overlay.classList.toggle('open', open);
    });
    document.body.style.overflow = open ? 'hidden' : '';
  }

  function init() {
    var tries = 0;
    var iv = setInterval(function () {
      var anchor = document.querySelector('header nav a[data-magnetic]');
      if (anchor) {
        clearInterval(iv);
        injectStyles();
        burger = document.createElement('button');
        burger.setAttribute('data-burger', '');
        burger.setAttribute('aria-label', 'Menü öffnen');
        burger.innerHTML = '<span></span><span></span><span></span>';
        burger.addEventListener('click', function () { toggle(); });
        anchor.parentNode.appendChild(burger);
      } else if (++tries > 150) {
        clearInterval(iv);
      }
    }, 100);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
