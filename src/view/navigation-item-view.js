import capitalize from '../../node_modules/lodash/capitalize';

export const createNavItemTemplate = (filterItems) => {
  const filterItem = [];

  for (const filterEl of filterItems) {
    const [name, count] = filterEl;

    filterItem
      .push(
        `<a 
        href="${name}" 
        class="main-navigation__item"
        id="filter_${name}"
      >
        ${capitalize(name)}
        <span class='main-navigation__item-count'>${count}</span>
      </a>`);
  }

  return filterItem.join('');
};
