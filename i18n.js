// i18n.js – Language detection & switching for NTA SkyNav website
(function() {
  // Detect language: saved preference > browser language > default 'de'
  function getLanguage() {
    const saved = localStorage.getItem('nta-lang');
    if (saved && (saved === 'de' || saved === 'en')) return saved;
    const browser = (navigator.language || navigator.userLanguage || 'de').slice(0, 2).toLowerCase();
    return browser === 'en' ? 'en' : 'de';
  }

  function setLanguage(lang) {
    localStorage.setItem('nta-lang', lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateToggle(lang);
    if (typeof loadHeroSpots === 'function') loadHeroSpots();
  }

  function applyTranslations(lang) {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        // Check for data-i18n-attr (e.g., placeholder)
        var attr = el.getAttribute('data-i18n-attr');
        if (attr) {
          el.setAttribute(attr, translations[key][lang]);
        } else {
          el.innerHTML = translations[key][lang];
        }
      }
    });

    // Update page title based on lang
    var titleEl = document.querySelector('title');
    if (titleEl) {
      var titleMap = {
        'index.html': { de: 'NTA SkyNav – Die Navigations-App für Ballonpiloten', en: 'NTA SkyNav – The Navigation App for Balloon Pilots' },
        'features.html': { de: 'Features – NTA SkyNav', en: 'Features – NTA SkyNav' },
        'pricing.html': { de: 'Preise – NTA SkyNav', en: 'Pricing – NTA SkyNav' },
        'beta.html': { de: 'Beta & Download – NTA SkyNav', en: 'Beta & Download – NTA SkyNav' },
        'about.html': { de: 'Über uns – NTA SkyNav', en: 'About – NTA SkyNav' },
        'datenschutz.html': { de: 'Datenschutzerklärung – NTA SkyNav', en: 'Privacy Policy – NTA SkyNav' },
        'impressum.html': { de: 'Impressum – NTA SkyNav', en: 'Imprint – NTA SkyNav' },
        'agb.html': { de: 'AGB – NTA SkyNav', en: 'Terms – NTA SkyNav' },
        'beta-access.html': { de: 'Beta Zugang – NTA SkyNav', en: 'Beta Access – NTA SkyNav' },
        'updates.html': { de: 'Updates & Patches – NTA SkyNav', en: 'Updates & Patches – NTA SkyNav' },
        'briefing.html': { de: 'Weather Briefing Feedback – NTA SkyNav', en: 'Weather Briefing Feedback – NTA SkyNav' },
      };
      var page = window.location.pathname.split('/').pop() || 'index.html';
      if (titleMap[page] && titleMap[page][lang]) {
        titleEl.textContent = titleMap[page][lang];
      }
    }
  }

  function updateToggle(lang) {
    document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  // Initialize when DOM is ready
  function init() {
    var lang = getLanguage();
    document.documentElement.lang = lang;

    // Apply translations after a tiny delay to ensure translations.js is loaded
    applyTranslations(lang);
    updateToggle(lang);

    // Bind toggle buttons
    document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        setLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for programmatic use
  window.ntaSetLanguage = setLanguage;
  window.ntaGetLanguage = getLanguage;
})();
