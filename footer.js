document.addEventListener('DOMContentLoaded', () => {
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
  const copyrightText = '© 2024 Fernando Bordon. Todos los derechos reservados.';
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
}); 