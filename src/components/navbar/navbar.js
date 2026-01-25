import './navbar.css';
import { BtnCompreAgora } from '../buttons/compre_agora';
import { Logo } from  '../badges/logo';
export function Navbar() {
  return `
    <nav class="navbar navbar-expand-lg fixed-top navbar-cinza-claro shadow-sm">
      <div class="d-flex align-items-center w-100 mx-2 gap-3">
        <a class="navbar-brand flex-grow-1 text-break texto-titulo" style="max-width: 50%; min-width: 0; white-space: normal;">
          ${Logo()}Kit Alfabetização
        </a>
        <div class="ms-auto" tyle="max-width: 40%;">
          ${BtnCompreAgora()}
        </div>
      </div>
    </nav>
  `;
}