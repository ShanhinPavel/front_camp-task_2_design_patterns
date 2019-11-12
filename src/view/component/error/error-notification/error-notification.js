import { createElement } from "../../../../helpers";
import "./error-notification.css";

class ErrorNotification {
  constructor() {
    if (typeof ErrorNotification.instance === "object") {
      return ErrorNotification.instance;
    }
    ErrorNotification.instance = this;
    return this;
  }

  render() {
    this.popUpContainer = createElement("div", {
      class: "error-notification__container"
    });
    this.messageContainer = createElement("div", {
      class: "error-notification__container-message-container"
    });
    this.closeButtonContainer = createElement("div", {
      class: "error-notification__container-button-container"
    });
    this.popUpMessage = createElement(
      "p",
      { class: "error-notification__container-message-container-message" },
      "Downloading error. Please try again."
    );
    this.popUpCloseButton = createElement(
      "p",
      { class: "error-notification__container-button-container-button" },
      "x"
    );
    this.popUpCloseButton.addEventListener("click", () => {
      this.popUpContainer.remove();
    });

    this.messageContainer.append(this.popUpMessage);
    this.closeButtonContainer.append(this.popUpCloseButton);
    this.popUpContainer.append(
      this.messageContainer,
      this.closeButtonContainer
    );

    return this.popUpContainer;
  }
}

export const errorNotification = new ErrorNotification();
