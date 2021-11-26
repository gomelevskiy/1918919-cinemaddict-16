import { RENDER_POSITION } from './consts';

export const renderTemplate = (container, template, position = RENDER_POSITION.BEFORE_BEGIN) => {
  container.insertAdjacentHTML(position, template);
};
