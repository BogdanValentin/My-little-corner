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
