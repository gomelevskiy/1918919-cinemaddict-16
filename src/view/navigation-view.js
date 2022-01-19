import {createElement} from '../render';
import {createNavItemTemplate} from './navigation-item-view';

const createNavigationTemplate = (filterItems) => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      ${createNavItemTemplate(filterItems)}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

export default class SiteNavigationView {
  #element = null;
  #filterItems = [];

  constructor(filterItems) {
    this.#filterItems = filterItems;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createNavigationTemplate(this.#filterItems);
  }

  removeElement() {
    this.#element = null;
  }
}
