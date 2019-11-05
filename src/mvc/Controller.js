export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    //bind inner functions
    this.handleAddNews = this.handleAddNews.bind(this);
    this.newsListChanged = this.newsListChanged.bind(this);
    this.occureError = this.occureError.bind(this);
    //bind inner functions with actions in view
    this.view.bindEventListenerToSelectCategory(this.handleAddNews);
    this.view.bindEventListenerToShowMoreButton(this.handleAddNews);
    ////bind inner functions with actions in model
    this.model.bindNewsListChanged(this.newsListChanged);
    this.model.bindOccureError(this.occureError);
  }

  async handleAddNews(category) {
    await this.model.addNewsArticles(category);
  }

  newsListChanged(articles, showMoreButton) {
    this.view.displayNews(articles, showMoreButton);
  }

  occureError(error) {
    this.view.showErrorNotification(error);
  }
}
