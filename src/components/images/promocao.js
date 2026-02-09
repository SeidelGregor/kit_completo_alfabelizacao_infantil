import './image_styles.css';
import promoImage from '../../../images/material.png';
// import { BadgeDesconto } from '../badges/desconto'

export function PromoImage() {
  return `
    <div class="promo margem-aumentada">
      <img src="${promoImage}">
    </div>
  `;
}