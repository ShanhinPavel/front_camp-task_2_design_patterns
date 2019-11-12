import { NewsAPI } from "../api";
import { checkIsShowMoreButton } from "../helpers";

class Model {
  constructor() {
    this.category = "";
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
      const { articles, totalResults } = await NewsAPI.getNewsArticles(
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
      this.occureError(this.error);
    }
  }

  bindNewsListChanged(callback) {
    this.newsListChanged = callback;
  }

  bindOccureError(callback) {
    this.occureError = callback;
  }
}

export const model = new Model();
