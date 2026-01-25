import './cards.css';
import '../texts/texts.css'

import dinoImage from '../../../images/dinossaurinho.png';
import editImage from '../../../images/caderno.png';
import giftImage from '../../../images/presente.png';

export function ProductValues() {
  return `
    <div class="margem-aumentada">
      <div class="card coluna">
        <div class="card-header margem-reduzida">
          <img src="${dinoImage}">
        </div>
        <div class="card-content margem-padrao">
          <h1 class="titulo-pequeno texto-em-destaque">
            Atividades Progressivas
          <h1>
          <p class="letra-pequena letra-clara margem-padrao">
            Alfabeto ilustrado, traçado, coordenação e formação de palavras. Tudo estruturado para respeitar o ritmo da criança.
          <p>
        </div>
      </div>
    </div>
    <div class="margem-padrao">
      <div class="card coluna">
        <div class="card-header margem-reduzida">
          <img src="${editImage}">
        </div>
        <div class="card-content margem-padrao">
          <h1 class="titulo-pequeno letra-escura">
            100% Editável
          <h1>
          <p class="letra-pequena letra-clara margem-padrao">
            Personalize nomes, níveis, cores ou atividades conforme a necessidade. Adapte para a realidade do seu aluno ou filho.
          <p>
        </div>
      </div>
    </div>
    <div class="margem-padrao">
      <div class="card coluna">
        <div class="card-header margem-reduzida">
          <img src="${giftImage}">
        </div>
        <div class="card-content margem-padrao">
          <h1 class="titulo-pequeno letra-escura">
            Bônus Exclusivos
          <h1>
          <p class="letra-pequena letra-clara margem-padrao">
            Matemática básica, atividades extras para educação infantil e muito mais para enriquecer o aprendizado.
          <p>
        </div>
      </div>
    </div>
  `;
}