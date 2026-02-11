/**
* Template Name: Style
* Template URL: https://bootstrapmade.com/style-bootstrap-portfolio-template/
* Updated: Jul 02 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox !== 'undefined') {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Init isotope layout and filters
   */
  if (typeof Isotope !== 'undefined' && typeof imagesLoaded !== 'undefined') {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });

    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (typeof Swiper !== 'undefined') {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Add publications function
   */
  function Publications() {
    // Publications data - Replace with your actual publications from Google Scholar
    const publications = [
      {
        id: 1,
        title: "TBX3 is essential for establishment of the posterior boundary of anterior genes and upregulation of posterior genes together with HAND2 during the onset of limb bud development",
        journal: "Development",
        year: 2024,
        authors: "Soussi G, Girdziusaite A, Jhanwar S, Palacio V, Notaro M, Sheth R, Zeller R and Zuniga A.",
        link: "https://doi.org/10.1242/dev.202722",
        imageUrl: "assets/img/publications/tbx3.png"
      },
      {
        id: 2,
        title: "PDP1 is a key metabolic gatekeeper and modulator of drug resistance in FLT3-ITD-positive acute myeloid leukemia",
        journal: "Leukemia",
        year: 2023,
        authors: "Alshamleh I, Kurrle N, ..., Notaro M, Comoglio F, ..., Schwalbe H and Serve S",
        link: "https://doi.org/10.1038/s41375-023-02041-5",
        imageUrl: "assets/img/publications/pdp1.png"
      },
      {
        id: 3,
        title: "HEMDAG: a family of modular and scalable hierarchical ensemble methods to improve Gene Ontology term prediction",
        journal: "Bioinformatics",
        year: 2021,
        authors: "Notaro M, Frasca M, Petrini A, Gliozzo J, Casiraghi E, Robinson PN and Valentini G",
        link: "https://doi.org/10.1093/bioinformatics/btab485",
        imageUrl: "assets/img/publications/hemdag-go.png"
      },
      {
        id: 4,
        title: "FZD6 triggers Wnt-signalling driven by WNT10BIVS1 expression and highlights new targets in T cell acute lymphoblastic leukemia",
        journal: "Hematological Oncology",
        year: 2021,
        authors: "Cassaro A, Grillo G, Notaro M, Gliozzo J, Cairoli R and Beghini A.",
        link: "https://doi.org/10.1002/hon.2840",
        imageUrl: "assets/img/publications/wnt.png"
      },
      {
        id: 5,
        title: "Prediction of Human Phenotype Ontology terms by means of hierarchical ensemble methods",
        journal: "BMC Bioinformatics",
        year: 2017,
        authors: "Notaro M, Schubach M, Robinson PN and Valentini G",
        link: "https://doi.org/10.1186/s12859-017-1854-y",
        imageUrl: "assets/img/publications/hemdag-hpo.png"
      },
      {
        id: 6,
        title: "In vivo CRISPR screening identifies NF1/RASA1/TP53 co-mutations and downstream MEK signaling as a common key mechanism of sinonasal tumorigenesis",
        journal: "bioRxiv",
        year: 2025,
        authors: "Vu  K, Gunti S, ..., Notaro M, Comoglio F, ..., Chari R, London RN",
        link: "https://doi.org/10.1101/2025.05.19.654661",
        imageUrl: "assets/img/publications/crisper-screen.png"
      },
    ];

    const publicationsGrid = document.getElementById('publications-grid');
    const sortNewest = document.getElementById('sort-newest');
    const sortOldest = document.getElementById('sort-oldest');

    if (!publicationsGrid || !sortNewest || !sortOldest) return;

    let currentSort = 'desc'; // 'desc' for newest first, 'asc' for oldest first

    function renderPublications(pubs) {
      publicationsGrid.innerHTML = '';

      pubs.forEach((pub, index) => {
        const publicationCard = document.createElement('div');
        publicationCard.className = 'publication-card';
        publicationCard.setAttribute('data-aos', 'fade-up');
        publicationCard.setAttribute('data-aos-delay', (index * 100 + 100).toString());

        publicationCard.innerHTML = `
          <a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="publication-image-link">
            <div class="publication-image" ${pub.imageUrl ? `style="background-image: url('${pub.imageUrl}')"` : ''}>
              ${pub.imageUrl ? '' : '<i class="bi bi-file-earmark-text"></i>'}
            </div>
          </a>
          <div class="publication-info">
            <div class="publication-year">${pub.year}</div>
            <h3  class="publication-title">${pub.title}</h3>
            <div class="publication-journal">${pub.journal}</div>
            <div class="publication-authors">${pub.authors}</div>
            <a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="publication-link">
              Read Publication <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        `;

        publicationsGrid.appendChild(publicationCard);
      });
    }

    function sortPublications(direction) {
      const sortedPubs = [...publications].sort((a, b) => {
        if (direction === 'desc') {
          return b.year - a.year; // Newest first
        } else {
          return a.year - b.year; // Oldest first
        }
      });

      renderPublications(sortedPubs);

      // Update button states
      sortNewest.classList.toggle('active', direction === 'desc');
      sortOldest.classList.toggle('active', direction === 'asc');

      currentSort = direction;
    }

    // Event listeners for sort buttons
    sortNewest.addEventListener('click', () => {
      if (currentSort !== 'desc') {
        sortPublications('desc');
      }
    });

    sortOldest.addEventListener('click', () => {
      if (currentSort !== 'asc') {
        sortPublications('asc');
      }
    });

    // Initial render
    sortPublications('desc');
  }

  // Initialize publications when DOM is loaded
  document.addEventListener('DOMContentLoaded', Publications);

})();