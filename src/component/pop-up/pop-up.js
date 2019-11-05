import { createElement } from '../../helpers/create-element';
import { getElementById } from '../../helpers/get-element-by-id';
import styles from './pop-up.css';

class PopUp {
  constructor(appContainerId) {
    this.appContainer = getElementById(appContainerId);
    this.popUpContainer = createElement('div', { cass: 'pop-up__container' });
    this.messageContainer = createElement('div', {
      class: 'pop-up__container-message-container'
    });
    this.closeButtonContainer = createElement('div', {
      class: 'pop-up__container-button-container'
    });
    this.popUpMessage = createElement(
      'p',
      { class: 'pop-up__container-message-container-message' },
      'Something went wrong'
    );
    this.popUpCloseButton = createElement(
      'button',
      { class: 'pop-up__container-button-container-button' },
      'x'
    );
    this.popUpCloseButton.addEventListener('click', () => {
      this.popUpContainer.remove();
    });
  }

  render(textMessage) {
    if (textMessage) {
      this.popUpMessage.textContent = textMessage;
    }

    this.messageContainer.append(this.popUpMessage);
    this.closeButtonContainer.append(this.popUpCloseButton);
    this.popUpContainer.append(
      this.closeButtonContainer,
      this.messageContainer
    );
    this.appContainer.append(this.popUpContainer);
  }
}

export const popUp = new PopUp('root');
