async function loadComponent(url, targetId) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}`);
    const html = await response.text();
    document.getElementById(targetId).innerHTML = html;
  } catch (err) {
    console.warn(`Component load failed: ${url}`, err);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
    loadComponent('/components/nav.html', 'nav-placeholder'),
    loadComponent('/components/footer.html', 'footer-placeholder')
  ]);

  initNav();
  highlightCurrentPage();
  initScrollAnimations();
});
