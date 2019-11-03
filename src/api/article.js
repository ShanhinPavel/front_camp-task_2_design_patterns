const API_KEY = 'f3931451dc1247fdb198996ccfe8be09';
export const PAGE_NUMBER = 1;
export const PAGE_SIZE = 5;
const URL = 'https://newsapi.org/v2/top-headlines';

export const getNewsArticles = async (
  category,
  pageNumber = PAGE_NUMBER,
  url = URL,
  pageSize = PAGE_SIZE
) => {
  try {
    const request = await fetch(
      `${url}?category=${category}&page=${pageNumber}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
    const response = await request.json();

    return response;
  } catch (error) {
    console.log(error);
  }
};
