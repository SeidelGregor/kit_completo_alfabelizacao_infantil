import './cards.css';
import '../texts/texts.css'
import { formatarNumero } from '../../utils'
function mensagemPromocaoCalculada(mensagem, valorInicial, valorFinal){
  return `
    <p class="letra-pequena texto-riscado">De R$ ${formatarNumero(valorInicial)}</p>
    <div class="price margem-minima">
      <span class="letra-pequena">R$</span>
      <span class="value">${formatarNumero(valorFinal)}</span>
    </div>
    <p class="letra-pequena">${mensagem}</p>
  `
}
export function Offer() {
  return `
    <div class="offer-card coluna margem-maxima" id="offer-card">
      <div class="offer-header">
        <h2 class="margem-minima">Oferta Especial Volta às Aulas</h2>
        <p>Acesso vitalício + Atualizações</p>
      </div>

      <div class="offer-body coluna">
        ${mensagemPromocaoCalculada('Promoção válida até dia 28 de Fevereiro', 89.9, 19.9)}

        <ul class="benefits margem-padrao">
          <li>📥 Material digital (PDF + Editável)</li>
          <li>🖨️ Imprima quantas vezes quiser</li>
          <li>✏️ Totalmente personalizável</li>
          <li>♾️ Acesso vitalício</li>
        </ul>

        <button class="btn-blue-semi-rounded margem-reduzida" id="btn-redireciona-venda">
          GARANTIR MEU KIT AGORA
        </button>

        <div class="offer-footer margem-reduzida">
          <span>🔒 Compra Segura</span>
          <span>💬 Suporte WhatsApp</span>
        </div>
      </div>
    </div>

  `;
}