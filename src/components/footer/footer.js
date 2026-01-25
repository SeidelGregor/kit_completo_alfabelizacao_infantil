import './footer.css';
import '../texts/texts.css'

export function Footer() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <h3 class="titulo">Kit Alfabetização</h3>

        <p class="footer-text letra-pequena">
          Apoiando famílias e educadores na jornada da alfabetização
          com materiais de qualidade e afeto.
        </p>

        <div class="footer-divider"></div>

        <p class="letra-muito-pequena">
          © 2026 Kit Alfabetização Infantil. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  `;
}