import { getElementById } from '../helpers/get-element-by-id';
import { NewsSection } from '../component';
import { getNodesCollection } from '../helpers/get-nodes-collection';
import { createElement } from '../helpers/create-element';

export class View {
  constructor(header, footer, select, main, moreButton, news) {
    this.header = header;
    this.main = main;
    this.footer = footer;
    this.select = select;
    this.moreButton = moreButton;
    this.news = news;
    this.app = createElement('div', { id: 'root' });
    this.pageNumber = 1;
  }

  get selectValue() {
    return this.select.value;
  }

  displayNews(newsArticles, showMoreButton) {
    while (this.news.firstElementChild) {
      this.news.removeChild(this.news.firstElementChild);
    }

    const news = getNodesCollection(NewsSection, newsArticles);
    this.news.append(...news);
    this.showMoreButton(showMoreButton);
  }

  showMoreButton(showMoreButton) {
    if (showMoreButton) {
      this.moreButton.style.display = 'block';
    } else {
      this.moreButton.style.display = 'none';
    }
  }

  bindEventListenerToShowMoreButton(handler) {
    this.moreButton.addEventListener('click', event => {
      handler(this.select.value);
    });
  }

  bindEventListenerToSelectCategory(handler) {
    this.select.addEventListener('change', event => {
      handler(event.target.value);
    });
  }

  render() {
    this.moreButton.style.display = 'none';
    this.main.append(this.select, this.news, this.moreButton);
    this.app.append(this.header, this.main, this.footer);
    document.body.append(this.app);
  }
}
