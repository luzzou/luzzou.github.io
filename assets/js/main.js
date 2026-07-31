(() => {
  const sections = [...document.querySelectorAll('main section[id]')];
  const navItems = [...document.querySelectorAll('.side-nav a[href^="#"]')];

  const updateActiveSection = () => {
    const marker = window.scrollY + Math.min(180, window.innerHeight * 0.3);
    let current = sections[0]?.id;
    sections.forEach((section) => {
      if (marker >= section.offsetTop) current = section.id;
    });
    navItems.forEach((item) => {
      item.classList.toggle('active', item.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  window.addEventListener('resize', updateActiveSection);
  updateActiveSection();
})();
