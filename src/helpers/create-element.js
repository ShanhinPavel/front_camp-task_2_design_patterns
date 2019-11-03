/*
This function creates element with attributes, and returs node element*
 */
export const createElement = (tagName, params, textContent) => {
  const element = document.createElement(tagName);

  if (textContent) element.textContent = textContent;

  if (params !== undefined) {
    Object.entries(params).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  return element;
};
