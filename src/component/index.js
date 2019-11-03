import { getFooter } from './footer';
import { getHeader } from './header/header';
import { getMain } from './main/main';
import { getCategorySelect } from './category-select';
import { getShowMoreButton } from './show-more-button';
import { getNews } from './news';
import { createNewsSection } from './news-section';

export const Footer = getFooter();
export const Header = getHeader();
export const Main = getMain();
export const CategorySelect = getCategorySelect();
export const MoreButton = getShowMoreButton();
export const News = getNews();
export const NewsSection = createNewsSection;
