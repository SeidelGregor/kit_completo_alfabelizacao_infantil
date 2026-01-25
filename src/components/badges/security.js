import './badges.css';

export function SecurityIcon() {
  return `
    <div class="icon-shield">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L4 5v6c0 5.25 3.75 10.2 8 11 4.25-.8 8-5.75 8-11V5l-8-3z"/>
        <path d="M9.5 12.5l2 2 3-3" class="check"/>
      </svg>
    </div>
  `;
}