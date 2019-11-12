import { createElement } from "../../../helpers";
import "./show-more-button.css";

export const getShowMoreButton = () => {
  const buttonContainer = createElement("div", {
    class: "button__container",
    id: "more"
  });
  const button = createElement(
    "button",
    { class: "button__container-button" },
    "Show more"
  );
  buttonContainer.append(button);
  return buttonContainer;
};
