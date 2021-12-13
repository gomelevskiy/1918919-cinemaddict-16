import capitalize from 'lodash';

export const createNavItemTemplate = ({
  name,
  count
}) => (
  `<a 
    href="${name}" 
    class="main-navigation__item ${ name === 'all' ? 'main-navigation__item--active' : '' }"
    id="filter_${name}"
  >
    ${name !== 'all' ? `${capitalize(name)} <span class='main-navigation__item-count'> ${count} </span>` : `${capitalize(name)}`}
  </a>`
);
