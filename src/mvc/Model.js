import { getNewsArticles } from '../api/article';
import { checkIsShowMoreButton } from '../helpers/check-Is-show-more-button';

export class Model {
  constructor() {
    this.category = '';
    this.pageNumber = 1;
    this.totalResults = 0;
    this.newsArticles = [];
    this.error = false;
  }

  async addNewsArticles(category) {
    if (category === this.category) {
      this.pageNumber = this.pageNumber + 1;
    } else {
      this.category = category;
      this.pageNumber = 1;
      this.newsArticles.length = 0;
    }
    try {
      const { articles, totalResults } = await getNewsArticles(
        this.category,
        this.pageNumber
      );
      this.newsArticles = [...this.newsArticles, ...articles];

      this.newsListChanged(
        this.newsArticles,
        checkIsShowMoreButton(this.newsArticles.length, totalResults)
      );
    } catch (error) {
      this.error = true;
    }
  }

  bindNewsListChanged(callback) {
    this.newsListChanged = callback;
  }
}
