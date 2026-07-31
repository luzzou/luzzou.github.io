(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  const navItems = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const setActive = () => {
    const position = window.scrollY + 130;
    let current = sections[0]?.id;
    sections.forEach((section) => {
      if (position >= section.offsetTop) current = section.id;
    });
    navItems.forEach((item) => item.classList.toggle('active', item.getAttribute('href') === `#${current}`));
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  const moreNews = document.querySelector('#more-news');
  moreNews?.addEventListener('click', () => {
    const hiddenItems = [...document.querySelectorAll('.news-item.is-hidden')];
    const expanding = hiddenItems.some((item) => item.style.display !== 'grid');
    hiddenItems.forEach((item) => {
      item.style.display = expanding ? 'grid' : 'none';
    });
    moreNews.textContent = expanding ? 'Show less' : 'More news';
  });

  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const publications = [...document.querySelectorAll('.pub-card')];
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      publications.forEach((publication) => {
        publication.hidden = filter !== 'all' && publication.dataset.year !== filter;
      });
    });
  });
})();
