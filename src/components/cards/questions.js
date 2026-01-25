import './cards.css';
import '../texts/texts.css'

function questionCard(question, answer) {
  return `
    <div class="card margem-padrao">
       <button class="faq-header">
        <span>${question}</span>
        <span class="faq-icon">⌄</span>
      </button>
      <div class="faq-content">
        <p class="letra-muito-pequena letra-clara">
          ${answer}
        </p>
      </div>
    </div>
  `
}
export function Questions() {
  return `
    <div class="margem-maxima">
      <h2 class="titulo texto-centralizado letra-clara margem-padrao">
        Perguntas Frequentes
      </h2>
     ${questionCard('É físico ou digital?', '100% digital. Você recebe o PDF e a versão editável com acesso imediato no seu e-mail.')}
     ${questionCard('Posso editar como quiser?', 'Sim! A versão editável permite personalizar conteúdos, nomes e cores conforme sua necessidade.')}
     ${questionCard('Serve para qual idade?', 'Ideal para Educação Infantil e início do Ensino Fundamental (fase de alfabetização).')}
     ${questionCard('Quando recebo o acesso?', 'Imediatamente após a confirmação da compra você receberá um e-mail com os dados de acesso.')}
    </div>
  `;
}