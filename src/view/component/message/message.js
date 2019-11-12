import { createElement } from "../../../helpers";
import "./message.css";

const DEFAULT_MESSAGE = "There are no news with chosen category";

class Message {
  constructor() {
    if (typeof Message.instance === "object") {
      return Message.instance;
    }
    Message.instance = this;
    return this;
  }

  render(textMessage) {
    this.messageContainer = createElement("div", {
      class: "message__container"
    });
    this.textMessage = textMessage ? textMessage : DEFAULT_MESSAGE;
    this.message = createElement(
      "p",
      { class: "message__container-message" },
      this.textMessage
    );

    this.messageContainer.append(this.message);

    return this.messageContainer;
  }
}

export const message = new Message();
