import { loggedRequest } from '../services';

const API_KEY = 'f3931451dc1247fdb198996ccfe8be09';
const PAGE_NUMBER = 1;
const PAGE_SIZE = 5;
const URL = 'https://newsapi.org/v2/top-headlines';

export const getNewsArticles = (
  category,
  pageNumber = PAGE_NUMBER,
  pageSize = PAGE_SIZE
) => {
  const url = `${URL}?category=${category}&page=${pageNumber}&pageSize=${pageSize}&apiKey=${API_KEY}`;

  return loggedRequest(url);
};
