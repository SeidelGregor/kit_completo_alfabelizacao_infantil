import './body_styles.css';
import { BadgeVoltaAsAulas } from '../badges/volta_as_aulas';
import { Headline } from '../texts/headline';
import { Description } from '../texts/product_description';
import { CallText } from '../texts/call';
import { BtnQueroKit } from '../buttons/quero_kit';
import { PromoImage } from '../images/promocao';
import { ProductValues } from '../cards/product_values';
import { ProductDifferences } from '../cards/product_differences';
import { ProductTarget } from '../cards/product_target';
import { Reviews } from '../cards/reviews';
import { Offer } from '../cards/offer';
import { Questions } from '../cards/questions';
import { GuaranteeText } from '../texts/guarantee';

export function BodyContent() {
  return `
    <div class="content">
      ${BadgeVoltaAsAulas()}
      ${Headline()}
      ${BtnQueroKit()}
      ${PromoImage()}
      ${Description()}
      ${CallText()}
      ${ProductValues()}
      ${ProductDifferences()}
      ${ProductTarget()}
      ${Reviews()}
      ${Offer()}
      ${GuaranteeText()}
      ${Questions()}
    </div>
  `;
}