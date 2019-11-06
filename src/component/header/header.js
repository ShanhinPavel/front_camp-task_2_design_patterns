import { createElement } from '../../helpers';
import './header.css';

export const getHeader = () => {
  const header = createElement('div', { class: 'header__container' });
  const title = createElement('h2', { class: 'header__container-title' });
  title.textContent = 'News app';
  header.appendChild(title);
  return header;
};
