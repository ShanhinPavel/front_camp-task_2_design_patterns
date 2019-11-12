import "./index.css";
import { Controller } from "./controller";
import { model } from "./model";
import { view } from "./view";

window.onload = () => {
  const app = new Controller(model, view);
  app.view.render();
};
