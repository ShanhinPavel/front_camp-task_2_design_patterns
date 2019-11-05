import './index.css';
import { Controller, Model, View } from './mvc';
import {
  Footer,
  Header,
  Main,
  CategorySelect,
  MoreButton,
  News
} from './component';

window.onload = () => {
  const app = new Controller(
    new Model(),
    new View(Header, Footer, CategorySelect, Main, MoreButton, News)
  );
  app.view.render();
};
