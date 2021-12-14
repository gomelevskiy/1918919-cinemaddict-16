import capitalize from '../../node_modules/lodash/capitalize';

export const createNavItemTemplate = ({name, count}) => (
  `<a 
    href="${name}" 
    class="main-navigation__item"
    id="filter_${name}"
  >
    ${capitalize(name)}
    <span class='main-navigation__item-count'>${count}</span>
  </a>`
);
