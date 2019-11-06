import { createElement } from '../../helpers';
import './news-section.css';

export const createNewsSection = ({
  title,
  url,
  description,
  author,
  urlToImage
}) => {
  const article = createElement('div', { class: 'one-news__container' });
  const articleTitle = createElement(
    'a',
    {
      class: 'one-news__container-title',
      href: url,
      target: '_blank'
    },
    title
  );

  const imageContainer = createElement('img', {
    class: 'one-news__container-img-container',
    src: urlToImage,
    width: '150',
    height: '150'
  });
  const articleDescription = createElement(
    'p',
    {
      class: 'one-news__container-description'
    },
    description
  );

  const contentContainer = createElement('div', {
    class: 'one-news__container-content-container'
  });
  const authorNameContainer = createElement(
    'p',
    {
      class: 'one-news__container-author'
    },
    author
  );

  contentContainer.append(imageContainer, articleDescription);

  article.append(articleTitle, contentContainer, authorNameContainer);

  return article;
};
