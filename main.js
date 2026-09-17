/* ==========================================================================
   AKSHAYA VAJPEYARR — MAIN INTERACTIVITY & ANIMATIONS SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. NEURAL NODE CANVAS BACKGROUND
  initNeuralCanvas();

  // 2. HEADER SCROLL & NAV LINK HIGHLIGHTER
  initHeaderAndNav();

  // 3. INTERSECTION OBSERVERS FOR SECTIONS
  initScrollObservers();

  // 4. CERTIFICATION CARD 3D TILT EFFECT & MODAL (IMAGE + PDF SUPPORT)
  initCertificatesAndModal();

  // 5. CONTACT FORM HANDLER
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. NEURAL NODE CANVAS BACKGROUND
   -------------------------------------------------------------------------- */
function initNeuralCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const nodeCount = Math.floor((width * height) / 22000);
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw lines between close nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const lineAlpha = (1 - dist / 130) * 0.15;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(255, 200, 87, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 200, 87, ${node.alpha})`;
      ctx.fill();

      // Move nodes
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* --------------------------------------------------------------------------
   2. HEADER SCROLL & NAV LINK HIGHLIGHTER
   -------------------------------------------------------------------------- */
function initHeaderAndNav() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-links');

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
  }

  window.addEventListener('scroll', () => {
    // Header shadow background
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active Section Highlight
    let currentSection = 'landing';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. INTERSECTION OBSERVERS FOR SECTIONS & ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollObservers() {
  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');

        // Trigger Stat Counters Animation
        if (entry.target.classList.contains('achievements-section')) {
          animateStatCounters();
        }
      }
    });
  }, observerOptions);

  // Observe Cards & Sections
  const elementsToObserve = document.querySelectorAll(`
    .exp-card,
    .edu-card,
    .project-card,
    .toolkit-card,
    .skills-section,
    .cert-card,
    .beyond-flip-card,
    .beyond-section,
    .achievement-card,
    .achievements-section
  `);

  elementsToObserve.forEach(el => observer.observe(el));
}

// Animate Stat Counters in Achievements
let statsAnimated = false;
function animateStatCounters() {
  if (statsAnimated) return;
  statsAnimated = true;

  const statNumbers = document.querySelectorAll('.stat-number');

  statNumbers.forEach(statEl => {
    const target = parseInt(statEl.getAttribute('data-count'), 10);
    let current = 0;
    const increment = Math.ceil(target / 40);

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      statEl.textContent = current;
    }, 40);
  });
}

/* --------------------------------------------------------------------------
   4. CERTIFICATION CARD 3D TILT EFFECT & MODAL (IMAGE + PDF SUPPORT)
   -------------------------------------------------------------------------- */
function initCertificatesAndModal() {
  const certCards = document.querySelectorAll('.cert-card');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalImg = document.getElementById('modal-img');
  const modalIframe = document.getElementById('modal-iframe');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');

  // Helper to open modal for both PDF and Images
  function openModal(filePath, titleText) {
    if (!filePath || !modalOverlay) return;

    modalCaption.textContent = titleText;

    const isPdf = filePath.toLowerCase().endsWith('.pdf');

    if (isPdf) {
      if (modalImg) modalImg.style.display = 'none';
      if (modalIframe) {
        modalIframe.src = filePath;
        modalIframe.style.display = 'block';
      }
    } else {
      if (modalIframe) {
        modalIframe.style.display = 'none';
        modalIframe.src = '';
      }
      if (modalImg) {
        modalImg.src = filePath;
        modalImg.style.display = 'block';
      }
    }

    modalOverlay.classList.add('active');
  }

  // Mouse-Follow 3D Tilt & Click Handler for Cert Cards
  certCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-y / rect.height) * 12;
      const rotateY = (x / rect.width) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });

    card.addEventListener('click', () => {
      const filePath = card.getAttribute('data-img');
      const title = card.querySelector('.cert-title')?.textContent || 'Certificate Preview';
      openModal(filePath, title);
    });
  });

  // Click Handler for Achievement Cards
  document.querySelectorAll('.achievement-card').forEach(achCard => {
    achCard.addEventListener('click', () => {
      const filePath = achCard.getAttribute('data-img');
      const title = achCard.querySelector('.ach-title')?.textContent || 'Achievement Details';
      openModal(filePath, title);
    });
  });

  // Modal Close Handlers
  if (modalClose && modalOverlay) {
    const closeModal = () => {
      modalOverlay.classList.remove('active');
      if (modalIframe) modalIframe.src = '';
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}

/* --------------------------------------------------------------------------
   5. CONTACT FORM HANDLER & SEQUENTIAL UNDERLINE
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const inputGroups = document.querySelectorAll('.input-group');

  if (!form) return;

  // Draw underlines sequentially on load/scroll
  const formObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        inputGroups.forEach((group, index) => {
          setTimeout(() => {
            const underline = group.querySelector('.underline');
            if (underline) {
              underline.style.width = '30%';
              setTimeout(() => { underline.style.width = '0%'; }, 400);
            }
          }, index * 200);
        });
      }
    });
  }, { threshold: 0.3 });

  formObserver.observe(form);

  // Form Submit Handler
  form.addEventListener('submit', (e) => {
    const sendBtn = document.getElementById('send-btn');
    if (sendBtn) {
      sendBtn.style.transform = 'scale(0.95)';
      setTimeout(() => sendBtn.style.transform = 'scale(1)', 200);
    }
  });
}
