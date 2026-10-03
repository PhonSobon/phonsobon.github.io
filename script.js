(function(){
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const navAnchors = Array.from(links.querySelectorAll('a'));
  // scrollspy only applies to in-page links (#section); other pages set .active in HTML
  const spyAnchors = navAnchors.filter(a => a.getAttribute('href').startsWith('#'));
  const sections = spyAnchors.map(a => document.querySelector(a.getAttribute('href')));

  // while a clicked link is smooth-scrolling, keep its underline instead of following the scroll
  let lockedAnchor = null;
  let unlockTimer = null;

  function setActive(anchor){
    spyAnchors.forEach(a => a.classList.toggle('active', a === anchor));
  }

  // fixed nav shadow on scroll
  function onScroll(){
    if(window.scrollY > 8){ nav.classList.add('scrolled'); }
    else{ nav.classList.remove('scrolled'); }

    if(lockedAnchor){
      // release the lock once scrolling stops
      clearTimeout(unlockTimer);
      unlockTimer = setTimeout(() => { lockedAnchor = null; }, 150);
      return;
    }
    updateActive();
  }

  // scrollspy
  function updateActive(){
    if(!spyAnchors.length) return;
    let current = 0;
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if(atBottom){
      // short sections at the end can never reach the top, so the last one wins
      current = sections.length - 1;
    }else{
      const scrollPos = window.scrollY + 120;
      sections.forEach((sec, i) => {
        if(sec && sec.offsetTop <= scrollPos){ current = i; }
      });
    }
    setActive(spyAnchors[current]);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  // honour a #hash on load (e.g. coming back from projects.html)
  const hashAnchor = spyAnchors.find(a => a.getAttribute('href') === location.hash);
  if(hashAnchor){ setActive(hashAnchor); }

  // mobile menu toggle
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navAnchors.forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    if(spyAnchors.includes(a)){
      setActive(a);
      lockedAnchor = a;
      clearTimeout(unlockTimer);
      unlockTimer = setTimeout(() => { lockedAnchor = null; }, 1000);
    }
  }));
})();
