const createFilterItemTemplate = (filter) => {
  const {name, count} = filter;
  const currentPoint = 'main-navigation__item--active';
  let template = null;

  const upperCaseName = (val) => {
    const nameItem = val[0].toUpperCase() + val.slice(1);

    return nameItem;
  };

  if( name === 'all' ) {
    template = `<a 
        href="${name}" 
        class="main-navigation__item ${currentPoint}"
        id="filter_${name}"
      >${upperCaseName(name)} movies</a>`;
  }else {
    template = `<a 
        href="${name}" 
        class="main-navigation__item"
        id="filter_${name}"
      >
        ${upperCaseName(name)}
        <span class="main-navigation__item-count">${count}</span>
      </a>`;
  }

  return template;
};

export const createNavigationTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createFilterItemTemplate(filter, index === 0))
    .join('');

  return `<nav class="main-navigation">
		<div class="main-navigation__items">
      ${filterItemsTemplate}
		</div>
		<a href="#stats" class="main-navigation__additional">Stats</a>
	</nav>`;
};
