import './cards.css';
import '../texts/texts.css'

function targetCard(title, description) {
  return `
    <div class="sub-card margem-padrao texto-centralizado">
      <h2 class="margem-minima">
        ${title}
      <h2>
      <p class="margem-minima">
        ${description}
      <p>
    </div>
  `
}
export function ProductTarget() {
  return `
    <div class="margem-aumentada">
      <div class="card coluna">
        <h2 class="titulo texto-centralizado letra-clara margem-padrao">
          Ideal para:
        </h2>
        <div class="card-content">
          ${targetCard('Profissionais da Educação', 'Do ensino Infantil aos anos iniciais do ensino fundamental, buscando adaptar atividades para diferentes níveis de alunos.')}
          ${targetCard('Pais e Familiares', 'Apoiando a alfabetização em casa com material de qualidade.')}
        </div>
      </div>
    </div>
  `;
}