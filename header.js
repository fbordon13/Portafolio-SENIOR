document.addEventListener('DOMContentLoaded', () => {
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
}); 