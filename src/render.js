import {RenderPosition} from './consts';

export const renderTemplate = (container, template, position = RenderPosition.BEFORE_BEGIN) => {
  container.insertAdjacentHTML(position, template);
};
