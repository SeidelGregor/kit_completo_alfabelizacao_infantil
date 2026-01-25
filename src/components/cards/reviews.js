import './cards.css';
import '../texts/texts.css'
import '../buttons/buttons.css'
import { StarIcon } from '../badges/star'

function reviewCard(content, author) {
  return `
    <div class="card margem-padrao">
      <div class="card-content">
        <div class="margem-padrao">
          ${StarIcon()}
        </div>
        <p class="texto-simples letra-clara margem-reduzida">
          ${content}
        </p>
        <p class="letra-pequena texto-em-destaque margem-minima">
          — ${author}
        </p>
      </div>
    </div>
  `
}
export function Reviews() {
  return `
    <div class="margem-maxima">
      <h2 class="titulo texto-centralizado letra-clara margem-padrao">
        Quem usa, recomenda!
      </h2>
      <p class=".letra-pequena texto-centralizado letra-clara margem-minima">
        <span class="texto-em-destaque">Mais de 800 famílias e educadores</span> já utilizam este material.
      </p>
      <div class="margem-padrao">
        ${reviewCard('Poder editar as atividades fez toda a diferença. Consigo adaptar exatamente para o que meu filho está aprendendo na escola.', 'Ana Paula, mãe')}
        ${reviewCard('Uso versões diferentes para cada turma. O material é muito completo e me poupa horas de planejamento.', 'Juliana, professora')}
      </div>
    </div>
  `;
}