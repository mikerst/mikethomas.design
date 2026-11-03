// Reveal .stagger elements as they scroll into view. The animation itself is
// a CSS transition (see .stagger in styles.css); this only adds .is-visible.
// Elements entering together are staggered by 0.1s each.
(function() {
  const items = document.querySelectorAll('.stagger');

  if (!('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(function(entries, self) {
    entries
      .filter(entry => entry.isIntersecting)
      .forEach(function(entry, i) {
        entry.target.style.transitionDelay = (i * 0.1) + 's';
        entry.target.classList.add('is-visible');
        self.unobserve(entry.target);
      });
  }, { threshold: 0.4 });

  items.forEach(item => observer.observe(item));
})();
