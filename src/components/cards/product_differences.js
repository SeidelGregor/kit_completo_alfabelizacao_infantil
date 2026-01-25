import './cards.css';
import '../texts/texts.css'
import { CheckedIcon } from '../badges/checked'

function checkedCard(content, margin_class = 'padrao'){
  return `
    <div class="card linha margem-${margin_class}">
      <div class="icon-text">
        ${CheckedIcon()}
        <p class="texto-simples letra-clara">
          ${content}
        </p>
      </div>
    </div>
  `
}

export function ProductDifferences() {
  return `
    <div class="margem-maxima">
      <h2 class="titulo letra-clara margem-padrao">
        Por que este kit é diferente?
      <h2>
      ${checkedCard('Apoia a alfabetização de forma estruturada', 'aumentada')}
      ${checkedCard('Economiza tempo com material pronto')}
      ${checkedCard('Permite personalização total (versão editável)')}
      ${checkedCard('Estimula autonomia e confiança na escrita')}
      ${checkedCard('Uso imediato em casa ou na escola')}
    </div>
  `;
}