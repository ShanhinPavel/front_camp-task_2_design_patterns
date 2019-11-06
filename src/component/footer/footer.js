import { createElement } from '../../helpers';
import './footer.css';

const NEWS_SOURCE = 'News in this application are got from';
const NEWS_SOURCE_LINK = 'https://newsapi.org/';
const LINK_TARGET_BLANK = '_blank';

export const getFooter = () => {
  const footer = createElement('div', { class: 'footer__container' });
  const newsSourseInfoText = createElement(
    'p',
    {
      class: 'footer__container-sourse-text'
    },
    NEWS_SOURCE
  );
  const newsResourceLink = createElement(
    'a',
    {
      class: 'footer__container-news-api-link',
      href: NEWS_SOURCE_LINK,
      target: LINK_TARGET_BLANK
    },
    NEWS_SOURCE_LINK
  );

  footer.append(newsSourseInfoText, newsResourceLink);

  return footer;
};
