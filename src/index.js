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

const ROOT_ELEMENT_ID = 'root';

window.onload = () => {
  const app = new Controller(
    new Model(),
    new View(
      Header,
      Footer,
      CategorySelect,
      Main,
      MoreButton,
      News,
      ROOT_ELEMENT_ID
    )
  );
  app.view.render();
};
