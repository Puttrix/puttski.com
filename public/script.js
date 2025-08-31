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

  const setState = (t) => {
    writeStored(t);
    applyTheme(t);
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
  const syncIfAuto = () => { if (readStored() === 'auto') applyTheme('auto'); };
  mql.addEventListener?.('change', syncIfAuto);
})();
