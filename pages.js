// ===== Ruler scroll percentages =====
function updateScroller() {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const top = Math.round((scrollY / (documentHeight - viewportHeight)) * 100);
  const bottom = Math.round(
    ((scrollY + viewportHeight - documentHeight) /
      (documentHeight - viewportHeight)) *
      100
  );

  const maskOne = document.querySelector(".mask.one");
  const maskTwo = document.querySelector(".mask.two");
  if (maskOne) maskOne.textContent = `${top}%`;
  if (maskTwo) maskTwo.textContent = `${bottom}%`;

  // Show scroll-to-top button after scrolling past 1.2× viewport
  const scrollBtn = document.querySelector(".scroll");
  if (scrollBtn) {
    scrollBtn.style.opacity = (viewportHeight + window.pageYOffset > 1.2 * viewportHeight) ? "1" : "0";
  }
}

window.addEventListener("scroll", updateScroller, { passive: true });
window.addEventListener("resize", updateScroller);
updateScroller();

// ===== Fade-in on scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("article p, article h2, article h3, .contact-block").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Class to reveal
document.addEventListener("DOMContentLoaded", () => {
  // Small delay to allow CSS to initialise
  requestAnimationFrame(() => {
    document.querySelectorAll("article p, article h2, article h3, .contact-block").forEach((el, i) => {
      el.style.transitionDelay = (i * 0.06) + "s";
    });
  });
});

// .visible sets opacity and transform
const style = document.createElement("style");
style.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// ===== Sci-Fi Sound System for Pages =====
const pageSounds = (() => {
  let ctx = null;
  const _lastPlay = {};

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function debounce(name, ms) {
    const now = Date.now();
    if (now - (_lastPlay[name] || 0) < ms) return false;
    _lastPlay[name] = now;
    return true;
  }

  return {
    navHover() {
      if (!debounce('navHover', 100)) return;
      const c = getCtx(), t = c.currentTime;
      const osc = c.createOscillator(), osc2 = c.createOscillator();
      const filter = c.createBiquadFilter(), gain = c.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, t);
      osc.frequency.exponentialRampToValueAtTime(900, t + 0.07);
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(2100, t);
      osc2.frequency.exponentialRampToValueAtTime(1350, t + 0.07);
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1800, t);
      filter.frequency.exponentialRampToValueAtTime(800, t + 0.08);
      filter.Q.value = 4;
      gain.gain.setValueAtTime(0.045, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
      osc.connect(filter); osc2.connect(filter);
      filter.connect(gain).connect(c.destination);
      osc.start(t); osc.stop(t + 0.09);
      osc2.start(t); osc2.stop(t + 0.09);
    },
    navClick() {
      if (!debounce('navClick', 200)) return;
      const c = getCtx(), t = c.currentTime;
      const osc1 = c.createOscillator(), osc2 = c.createOscillator(), gain = c.createGain();
      osc1.type = 'sine'; osc2.type = 'sine';
      osc1.frequency.setValueAtTime(800, t);
      osc1.frequency.exponentialRampToValueAtTime(1400, t + 0.08);
      osc2.frequency.setValueAtTime(1200, t + 0.06);
      osc2.frequency.exponentialRampToValueAtTime(1800, t + 0.14);
      gain.gain.setValueAtTime(0.09, t);
      gain.gain.linearRampToValueAtTime(0.12, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      osc1.connect(gain); osc2.connect(gain); gain.connect(c.destination);
      osc1.start(t); osc1.stop(t + 0.1);
      osc2.start(t + 0.06); osc2.stop(t + 0.18);
    },
    scrollClick() {
      if (!debounce('scrollClick', 300)) return;
      const c = getCtx(), t = c.currentTime;
      const osc = c.createOscillator(), gain = c.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1000, t);
      osc.frequency.exponentialRampToValueAtTime(600, t + 0.08);
      gain.gain.setValueAtTime(0.1, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      osc.connect(gain).connect(c.destination);
      osc.start(t); osc.stop(t + 0.1);
    },
    linkHover() {
      if (!debounce('linkHover', 120)) return;
      const c = getCtx(), t = c.currentTime;
      const osc = c.createOscillator(), osc2 = c.createOscillator();
      const filter = c.createBiquadFilter(), gain = c.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, t);
      osc.frequency.exponentialRampToValueAtTime(900, t + 0.07);
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(2100, t);
      osc2.frequency.exponentialRampToValueAtTime(1350, t + 0.07);
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1800, t);
      filter.frequency.exponentialRampToValueAtTime(800, t + 0.08);
      filter.Q.value = 4;
      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
      osc.connect(filter); osc2.connect(filter);
      filter.connect(gain).connect(c.destination);
      osc.start(t); osc.stop(t + 0.09);
      osc2.start(t); osc2.stop(t + 0.09);
    }
  };
})();

// Wire up sounds to page elements
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseenter', () => pageSounds.navHover());
  link.addEventListener('click', () => pageSounds.navClick());
});

const scrollBtn2 = document.querySelector('.scroll');
if (scrollBtn2) {
  scrollBtn2.addEventListener('mouseenter', () => pageSounds.navHover());
  scrollBtn2.addEventListener('click', () => pageSounds.scrollClick());
}

// Contact page links
document.querySelectorAll('.contact-link-big').forEach(link => {
  link.addEventListener('mouseenter', () => pageSounds.linkHover());
  link.addEventListener('click', () => pageSounds.navClick());
});
