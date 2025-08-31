// Smooth scroll for internal links (respects prefers-reduced-motion)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    history.pushState(null, '', `#${id}`);
  });
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle: toggles between light and dark; default follows system
(function themeToggle(){
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const root = document.documentElement;
  const meta = document.getElementById('meta-theme-color');
  const LIGHT = '#ffffff';
  const DARK = '#0b1220';

  const readStored = () => {
    try { return localStorage.getItem('theme') || 'auto'; } catch (e) { return 'auto'; }
  };
  const writeStored = (t) => { try { localStorage.setItem('theme', t); } catch (e) {} };

  const applyTheme = (t) => {
    if (t === 'light' || t === 'dark') {
      root.setAttribute('data-theme', t);
    } else {
      root.removeAttribute('data-theme'); // auto
    }
  };

  const labelFor = (t) => t === 'light' ? '☀️' : t === 'dark' ? '🌙' : '🌓';
  const titleFor = (t) => t === 'light' ? 'Theme: Light' : t === 'dark' ? 'Theme: Dark' : 'Theme: Auto';

  const setMetaTheme = (t) => {
    if (!meta) return;
    if (t === 'dark') meta.content = DARK;
    else if (t === 'light') meta.content = LIGHT;
    else meta.content = window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  };

  const setState = (t) => {
    writeStored(t);
    applyTheme(t);
    setMetaTheme(t);
    btn.textContent = labelFor(t);
    btn.title = titleFor(t);
    btn.setAttribute('aria-label', titleFor(t));
  };

  // Initialize
  setState(readStored());

  // Cycle Auto -> Light -> Dark -> Auto
  btn.addEventListener('click', () => {
    const current = readStored();
    const next = current === 'auto' ? 'light' : current === 'light' ? 'dark' : 'auto';
    setState(next);
  });

  // If in auto, reflect system preference changes without changing stored state
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const syncIfAuto = () => {
    if (readStored() === 'auto') {
      applyTheme('auto');
      setMetaTheme('auto');
    }
  };
  if (mql.addEventListener) mql.addEventListener('change', syncIfAuto);
  else if (mql.addListener) mql.addListener(syncIfAuto);
})();

// Mobile menu: simple sheet for small screens
(function mobileMenu(){
  const toggle = document.getElementById('mobile-toggle');
  const overlay = document.getElementById('mobile-overlay');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !overlay || !menu) return;

  const open = () => {
    overlay.hidden = false;
    overlay.setAttribute('data-state','opening');
    // Force reflow then start transition for Safari
    menu.getBoundingClientRect();
    overlay.setAttribute('data-state','open');
    toggle.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  };

  const hideOverlay = () => {
    overlay.hidden = true;
    overlay.removeAttribute('data-state');
    document.body.style.overflow = '';
  };

  const close = () => {
    overlay.setAttribute('data-state','closing');
    toggle.setAttribute('aria-expanded','false');
    let done = false;
    const finish = () => { if (done) return; done = true; hideOverlay(); };
    // Prefer transitionend on the sheet
    menu.addEventListener('transitionend', (e) => { if (e.propertyName === 'transform') finish(); }, { once: true });
    // Fallback timeout
    setTimeout(finish, 350);
  };

  toggle.addEventListener('click', () => {
    (overlay.hidden ? open : close)();
  });
  // Close on ESC
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  // Click backdrop or close button/link
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.matches('[data-close], a')) close();
  });
})();

// Language picker: dropdown menu for language selection
(function languagePicker(){
  const langToggle = document.getElementById('lang-toggle');
  const langMenu = document.getElementById('lang-menu');
  if (!langToggle || !langMenu) {
    console.log('Language picker elements not found:', {langToggle, langMenu});
    return;
  }

  // Initialize menu as closed
  langMenu.hidden = true;
  langToggle.setAttribute('aria-expanded', 'false');

  const openMenu = () => {
    langMenu.hidden = false;
    langToggle.setAttribute('aria-expanded', 'true');
    console.log('Language menu opened');
  };

  const closeMenu = () => {
    langMenu.hidden = true;
    langToggle.setAttribute('aria-expanded', 'false');
    console.log('Language menu closed');
  };

  // Toggle menu on button click
  langToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Language toggle clicked, menu hidden:', langMenu.hidden);
    if (langMenu.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Auto-redirect based on browser language
  (function autoLanguageDetect(){
    // Only run on index page and if no explicit language choice made
    if (window.location.pathname !== '/' || localStorage.getItem('lang-choice')) return;

    const browserLang = navigator.language || navigator.languages?.[0];
    if (!browserLang) return;

    const langCode = browserLang.split('-')[0].toLowerCase();
    if (langCode === 'sv') {
      // Mark that user has been auto-redirected
      localStorage.setItem('lang-choice', 'auto');
      window.location.href = '/sv';
    }
  })();

  // Mark manual language choice
  langMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      localStorage.setItem('lang-choice', 'manual');
    }
  });
})();
