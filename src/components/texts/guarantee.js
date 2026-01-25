import './texts.css';
import { SecurityIcon } from '../badges/security';

export function GuaranteeText() {
  return `
    <div class="margem-maxima centralizado">
      ${SecurityIcon()}
    </div>
    <h2 class="titulo letra-clara margem-reduzida texto-centralizado">
      Garantia Incondicional de 7 Dias
    <h2>
    <p class="letra-pequena letra-clara margem-minima texto-centralizado">
      Se você não gostar do material por qualquer motivo, basta enviar uma mensagem e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
    <h1>
  `;
}