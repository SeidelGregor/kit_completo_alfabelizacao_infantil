import './footer.css';
import '../texts/texts.css'

function divisorFooter(){
  return `<div class="footer-divider"></div>`
}

function adicionarContatoEmail(email){
  return `
    <div class="contato-item centralizado margem-minima">
      <svg class="icon-contato" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217L8 8.083.002 4.217V4z"/>
        <path d="M0 5.383v6.734A2 2 0 0 0 2 14h12a2 2 0 0 0 2-2V5.383l-7.565 4.53a1 1 0 0 1-1.07 0L0 5.383z"/>
      </svg>

      <spanclass="letra-muito-pequeno">c${email}</span>
    </div>
  `
}

function formatarTelefone(numero) {
  const limpo = numero.replace(/\D/g, '');
  const semPais = limpo.startsWith('55') ? limpo.slice(2) : limpo;
  const ddd = semPais.slice(0, 2);
  const numeroPrincipal = semPais.slice(2);
  if (numeroPrincipal.length === 9) {
    return `(${ddd}) ${numeroPrincipal.slice(0, 5)}-${numeroPrincipal.slice(5)}`;
  }
  return `(${ddd}) ${numeroPrincipal.slice(0, 4)}-${numeroPrincipal.slice(4)}`;
}


function adicionarCOntatoWhatsapp(numero) {
  return `
    <a href="https://wa.me/${numero}?text=Quero%20saber%20mais%20sobre%20o%20kit" target="_blank" rel="noopener" class="contato-item centralizado margem-minima">
        <svg class="icon-contato" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.63 0 .063 3.567.063 7.93c0 1.398.366 2.765 1.064 3.97L0 16l4.207-1.104a7.93 7.93 0 0 0 3.787.965h.003c4.364 0 7.93-3.567 7.93-7.93a7.854 7.854 0 0 0-2.326-5.605z"/>
          <path d="M11.07 9.518c-.27-.135-1.596-.787-1.843-.877-.246-.09-.425-.135-.605.135-.18.27-.697.877-.854 1.057-.157.18-.315.202-.585.067-.27-.135-1.14-.42-2.17-1.337-.802-.715-1.344-1.597-1.5-1.867-.157-.27-.017-.416.118-.551.122-.121.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.022-.472-.067-.135-.605-1.46-.83-2.003-.218-.525-.44-.454-.605-.463l-.515-.009c-.18 0-.472.067-.72.337-.247.27-.945.922-.945 2.25 0 1.327.967 2.607 1.102 2.787.135.18 1.903 2.907 4.61 4.075.644.278 1.146.444 1.538.568.646.206 1.234.177 1.697.107.518-.077 1.596-.652 1.82-1.282.225-.63.225-1.17.157-1.282-.067-.112-.247-.18-.518-.315z"/>
        </svg>

        <span class="letra-muito-pequeno">${formatarTelefone(numero)}</span>
    </a>
  `
}

export function Footer() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <h3 class="titulo">Alfabetizando</h3>

        <p class="footer-text letra-pequena">
          Apoiando famílias e educadores na jornada da alfabetização
          com materiais de qualidade e afeto.
        </p>
        ${divisorFooter()}
        <h3 class="titulo-pequeno">Contato Suporte</h3>
        ${adicionarContatoEmail('suporte.alfabetizando@gmail.com')}
        ${adicionarCOntatoWhatsapp('5545920022629')}
        ${divisorFooter()}
        <p class="letra-muito-pequena">
          © 2026 Alfabetizando. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  `;
}