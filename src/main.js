import { COUNT_CARD, COUNT_CARD_PER_STEP, RenderPosition } from './consts';
import { renderTemplate } from './render';
import { createNavigationTemplate } from './view/navigation-view';
import { createProfileTemplate } from './view/profile-view';
import { createSortTemplate } from './view/sort-view';
import { createListingTemplate } from './view/listing-view';
import { createCardTemplate}  from './view/card-view';
import { createShowMoreTemplate } from './view/show-more-view';
import { createStatisticsCountTemplate } from './view/statistics-count-view';
import { createPopupTemplate } from './view/popup-more';
import { generateFilm } from './mocs/film';
import { generateFilter } from './mocs/navigator';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

const FILMS = Array.from({length: COUNT_CARD}, generateFilm);
const filters = generateFilter(FILMS);

renderTemplate(siteMainElement, createNavigationTemplate(filters), RenderPosition.AFTER_BEGIN);
renderTemplate(siteHeaderElement, createProfileTemplate(), RenderPosition.BEFORE_END);
renderTemplate(siteMainElement, createSortTemplate(), RenderPosition.BEFORE_END);
renderTemplate(siteMainElement, createListingTemplate(), RenderPosition.BEFORE_END);

const filmsElement = siteMainElement.querySelector('.films');
const filmList = filmsElement.querySelector('.films-list');
const filmListContainer = filmList.querySelector('.films-list__container');

for (let item = 0; item < Math.min(FILMS.length, COUNT_CARD_PER_STEP); item++) {
  renderTemplate(filmListContainer, createCardTemplate(FILMS[item]), RenderPosition.BEFORE_END);
}

if (FILMS.length > COUNT_CARD_PER_STEP) {
  let renderedFilmCount = COUNT_CARD_PER_STEP;

  renderTemplate(filmList, createShowMoreTemplate(), RenderPosition.BEFORE_END);

  const loadMoreButton = filmList.querySelector('.films-list__show-more');

  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    FILMS
      .slice(renderedFilmCount, renderedFilmCount + COUNT_CARD_PER_STEP)
      .forEach((film) => renderTemplate(filmListContainer, createCardTemplate(film), RenderPosition.BEFORE_END));

    renderedFilmCount += COUNT_CARD_PER_STEP;

    if (renderedFilmCount >= FILMS.length) {
      loadMoreButton.remove();
    }
  });
}

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');
renderTemplate(footerStatisticsElement, createStatisticsCountTemplate(FILMS.length), RenderPosition.BEFORE_END);
renderTemplate(siteMainElement, createPopupTemplate(FILMS[0]), RenderPosition.AFTER_END);
