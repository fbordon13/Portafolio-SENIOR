// Galería de portafolio dinámica
const portfolioProjects = [
  {
    title: 'Landing Page Creativa',
    img: 'portfolio1.jpg',
    desc: 'Landing page moderna y responsiva para una startup innovadora.',
    link: '#'
  },
  {
    title: 'Dashboard Interactivo',
    img: 'portfolio2.jpg',
    desc: 'Dashboard con visualizaciones y animaciones para gestión de datos.',
    link: '#'
  },
  {
    title: 'E-commerce Elegante',
    img: 'portfolio3.jpg',
    desc: 'Tienda online con experiencia de usuario optimizada y diseño elegante.',
    link: '#'
  }
];

function renderPortfolio() {
  const gallery = document.getElementById('portfolio-gallery');
  gallery.innerHTML = portfolioProjects.map(project => `
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <img src="${project.img}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.desc}</p>
          <a href="${project.link}" class="btn btn-dark" target="_blank">Ver proyecto</a>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();

  // Fondo SVG animado en el header
  const headerBg = document.querySelector('.header-bg-animated');
  if (headerBg) {
    headerBg.innerHTML = `
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z" fill="#00c3ff" fill-opacity="0.18">
          <animate attributeName="d" dur="6s" repeatCount="indefinite"
            values="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z;
                    M0,60 C400,120 1040,40 1440,60 L1440,120 L0,120 Z;
                    M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z" />
        </path>
      </svg>
    `;
  }

  // Animación de saludo (texto dinámico)
  const greetings = [
    'Fernando Bordon',
    '¡Bienvenido!',
    'Desarrollador Web',
    'UI/UX & Frontend',
    '¡Conoce mi trabajo!'
  ];
  let greetIndex = 0;
  const greetEl = document.getElementById('greeting');
  if (greetEl) {
    setInterval(() => {
      greetIndex = (greetIndex + 1) % greetings.length;
      greetEl.textContent = greetings[greetIndex];
    }, 2200);
  }

  // Cambio de tema claro/oscuro
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('theme-dark');
      const icon = themeToggle.querySelector('i');
      if (body.classList.contains('theme-dark')) {
        icon.classList.remove('bi-moon-stars');
        icon.classList.add('bi-sun');
      } else {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon-stars');
      }
    });
  }

  // Animación de scroll suave para navegación
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Validación y feedback del formulario de contacto
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alertBox.innerHTML = '<div class="alert alert-danger">Por favor, completa todos los campos.</div>';
      return;
    }
    // Simulación de envío exitoso
    alertBox.innerHTML = '<div class="alert alert-success">¡Gracias por tu mensaje! Te responderé pronto.</div>';
    form.reset();
  });

  // Fondo SVG animado en el footer
  const footerBg = document.querySelector('.footer-bg-animated');
  if (footerBg) {
    footerBg.innerHTML = `
      <svg viewBox=\"0 0 1440 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
        <path d=\"M0,40 C400,120 1040,0 1440,40 L1440,120 L0,120 Z\" fill=\"#00c3ff\" fill-opacity=\"0.18\">
          <animate attributeName=\"d\" dur=\"7s\" repeatCount=\"indefinite\"
            values=\"M0,40 C400,120 1040,0 1440,40 L1440,120 L0,120 Z;
                    M0,60 C360,80 1080,120 1440,60 L1440,120 L0,120 Z;
                    M0,40 C400,120 1040,0 1440,40 L1440,120 L0,120 Z\" />
        </path>
      </svg>
    `;
  }

  // Efecto de escritura en el copyright
  const copyrightText = '© 2025 Hecho por Fernando Bordón.';
  const copyrightEl = document.getElementById('footerCopyright');
  if (copyrightEl) {
    let i = 0;
    function typeWriter() {
      if (i <= copyrightText.length) {
        copyrightEl.textContent = copyrightText.slice(0, i);
        i++;
        setTimeout(typeWriter, 40);
      }
    }
    typeWriter();
  }

  // Animaciones de entrada para secciones
  document.querySelectorAll('section, .dynamic-footer').forEach(sec => {
    sec.classList.add('section-animate');
  });
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.section-animate').forEach(sec => observer.observe(sec));
}); 