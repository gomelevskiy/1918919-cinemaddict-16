import {createElement} from '../render';

const createStatisticsCountTemplate = (counter) => `<p>${counter} movies inside</p>`;

export default class SiteStaticsCountTemplate {
  #element = null;
  #counter = null;

  constructor(counter) {
    this.#counter = counter;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createStatisticsCountTemplate(this.#counter);
  }

  removeElement() {
    this.#element = null;
  }
}
