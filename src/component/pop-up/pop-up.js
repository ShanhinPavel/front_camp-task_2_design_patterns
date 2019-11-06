import { createElement } from '../../helpers/create-element';
import './pop-up.css';

class PopUp {
  constructor() {
    if (typeof PopUp.instance === 'object') {
      return PopUp.instance;
    }
    PopUp.instance = this;
    return this;
  } 
  
  render() {
    this.popUpContainer = createElement('div', { class: 'pop-up__container' });
    this.messageContainer = createElement('div', {
      class: 'pop-up__container-message-container'
    });
    this.closeButtonContainer = createElement('div', {
      class: 'pop-up__container-button-container'
    });
    this.popUpMessage = createElement(
      'p',
      { class: 'pop-up__container-message-container-message' },
      'Downloading error. Please try again.'
    );
    this.popUpCloseButton = createElement(
      'p',
      { class: 'pop-up__container-button-container-button' },
      'x'
    );
    this.popUpCloseButton.addEventListener('click', () => {
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

export const popUp = new PopUp();
