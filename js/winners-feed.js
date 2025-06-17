document.addEventListener('DOMContentLoaded', () => {
  const winners = [
    { id: '..0a2x', name: '$Slayz', amount: '1,203', link: 'assets/link-kcon.png', alt: 'link-kcon' },
    { id: '..1b3y', name: '$Slayz', amount: '1,150', link: 'assets/link-kcon.png', alt: 'link-kcon' },
    { id: '..4e6v', name: '$Slayz', amount: '1,300', link: 'assets/link-kcon.png', alt: 'link-kcon' },
    { id: '..4e6v', name: '$Slayz', amount: '1,300', link: 'assets/link-kcon.png', alt: 'link-kcon' },
    { id: '..2c4z', name: '$Slayz', amount: '980', link: 'assets/link-kcon.png', alt: 'link-kcon' },
    { id: '..3d5w', name: '$Slayz', amount: '1,050', link: 'assets/link-kcon.png', alt: 'link-kcon' },
    { id: '..4e6v', name: '$Slayz', amount: '1,300', link: 'assets/link-kcon.png', alt: 'link-kcon' },
    { id: '..4e6v', name: '$Slayz', amount: '1,300', link: 'assets/link-kcon.png', alt: 'link-kcon' },
    { id: '..4e6v', name: '$Slayz', amount: '1,300', link: 'assets/link-kcon.png', alt: 'link-kcon' },
    { id: '..5f7u', name: '$Slayz', amount: '1,203', link: 'assets/link-kcon.png', alt: 'link-kcon' }
  ];

  const container = document.querySelector('.winners-feed-inner');

  winners.forEach(winner => {
    const h4 = document.createElement('h4');
    h4.innerHTML = `[${winner.id} +&nbsp;<span>${winner.name} <b>${winner.amount}</b> <a href="#"><img src="${winner.link}" alt="${winner.alt}"></a></span>&nbsp;]`;
    container.appendChild(h4);
  });

  let scrollAmount = 0;
  const scrollStep = 1;
  const scrollIntervalTime = 20;
  let isPaused = false;

  function autoScroll() {
    if (!isPaused) {
      if (container.scrollWidth > container.clientWidth) {
        scrollAmount += scrollStep;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      } else {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }
    }
  }

  const intervalId = setInterval(autoScroll, scrollIntervalTime);

  container.addEventListener('mouseenter', () => { isPaused = true; });
  container.addEventListener('mouseleave', () => { isPaused = false; });
  container.addEventListener('focus', () => { isPaused = true; });
  container.addEventListener('blur', () => { isPaused = false; });

  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    e.preventDefault();
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1;
    container.scrollLeft = scrollLeft - walk;
  });

  // Script about Winnersfeed sticky
  const winnersFeed = document.querySelector('.winners-feed');
  const desktopStickyScrollY = 810;
  const mubilStickyScrollY = 1460;

  window.addEventListener('scroll', () => {
    const screenWidth = window.innerWidth;

    if (window.scrollY > desktopStickyScrollY && screenWidth > 771 ||
      window.scrollY > mubilStickyScrollY && screenWidth < 771) {
      winnersFeed.classList.add('sticky');
    } else {
      winnersFeed.classList.remove('sticky');
    }
  });
});
