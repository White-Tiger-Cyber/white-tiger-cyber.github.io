function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .scale-in');

  if (!animatedElements.length) return;

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animatedElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));

  // Stagger children in groups
  document.querySelectorAll('.stagger-group').forEach(group => {
    const children = group.querySelectorAll('.fade-up, .fade-in, .scale-in');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 100}ms`;
    });
  });
}
