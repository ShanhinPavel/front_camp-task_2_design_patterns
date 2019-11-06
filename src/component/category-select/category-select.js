import { createElement } from '../../helpers';
import './category-select.css';

const selectOptions = {
  SelectCategory: 'Select the category',
  Business: 'business',
  Entertainment: 'entertainment',
  General: 'general',
  Healt: 'health',
  Science: 'sciense',
  Sports: 'sports',
  Technology: 'technology'
};

export const getCategorySelect = () => {
  const categorySelectContainer = createElement('div', {
    class: 'category-select__container'
  });
  const select = createElement('select', {
    class: 'category-select__container-select',
    id: 'select'
  });
  const options = Object.entries(selectOptions).map(([key, value]) =>
    key === 'SelectCategory'
      ? createElement(
          'option',
          {
            class: 'category-select__container-select-option',
            selected: 'selected',
            disabled: 'disabled',
            hidden: 'hidden'
          },
          value
        )
      : createElement(
          'option',
          { class: 'category-select__container-select-option', value },
          key
        )
  );

  select.append(...options);
  categorySelectContainer.appendChild(select);

  return select;
};
