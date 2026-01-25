import './styles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { Home } from './pages/Home';

const app = document.getElementById('app');

function render(page) {
  app.innerHTML = page();
}

render(Home);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.card');
      document.querySelectorAll('.card.active').forEach(card => {
        if (card !== item) {
          card.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });
  document.querySelectorAll('.redirect-offer').forEach(el => {
    el.addEventListener('click', () => {
      const elemento = document.getElementById('offer-card');
      if (elemento) {
        elemento.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    });
  });
  document.getElementById('btn-redireciona-venda').addEventListener('click', () => {
    window.open('https://pay.wiapy.com/CG6A5oN_u5', '_blank');
  })
});
