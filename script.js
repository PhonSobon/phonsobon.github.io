(function(){
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const navAnchors = Array.from(links.querySelectorAll('a'));
  const sections = navAnchors.map(a => document.querySelector(a.getAttribute('href')));

  // fixed nav shadow on scroll
  function onScroll(){
    if(window.scrollY > 8){ nav.classList.add('scrolled'); }
    else{ nav.classList.remove('scrolled'); }
    updateActive();
  }

  // scrollspy
  function updateActive(){
    let current = sections[0];
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      if(sec && sec.offsetTop <= scrollPos){ current = sec; }
    });
    navAnchors.forEach(a => {
      const target = document.querySelector(a.getAttribute('href'));
      a.classList.toggle('active', target === current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu toggle
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navAnchors.forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
})();
