import {COUNT_CARD, COUNT_CARD_PER_STEP, RenderPosition} from './consts';
import {renderElement} from './render';
import SiteNavigationView from './view/navigation-view';
import SiteProfileTemplate from './view/profile-view';
import SiteSortTemplate from './view/sort-view';
import SiteListingTemplate from './view/listing-view';
import CardView from './view/card-view';
import SiteShowMoreTemplate from './view/show-more-view';
import SiteStatisticsCountTemplate from './view/statistics-count-view';
import CardPopupView from './view/popup-more';
import generateFilm from './mocs/film';
import {generateFilters} from './utils';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

const FILMS = Array.from({
  length: COUNT_CARD
}, generateFilm);
const filters = generateFilters(FILMS);

renderElement(siteMainElement, new SiteNavigationView(filters).element, RenderPosition.AFTER_BEGIN);
renderElement(siteHeaderElement, new SiteProfileTemplate().element, RenderPosition.BEFORE_END);
renderElement(siteMainElement, new SiteSortTemplate().element, RenderPosition.BEFORE_END);
renderElement(siteMainElement, new SiteListingTemplate().element, RenderPosition.BEFORE_END);

const filmsElement = siteMainElement.querySelector('.films');
const filmList = filmsElement.querySelector('.films-list');
const filmListContainer = filmList.querySelector('.films-list__container');

for (let item = 0; item < Math.min(FILMS.length, COUNT_CARD_PER_STEP); item++) {
  renderElement(filmListContainer, new CardView(FILMS[item]).element, RenderPosition.BEFORE_END);
}

if (FILMS.length > COUNT_CARD_PER_STEP) {
  let renderedFilmCount = COUNT_CARD_PER_STEP;

  renderElement(filmList, new SiteShowMoreTemplate().element, RenderPosition.BEFORE_END);

  const loadMoreButton = filmList.querySelector('.films-list__show-more');

  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    FILMS
      .slice(renderedFilmCount, renderedFilmCount + COUNT_CARD_PER_STEP)
      .forEach((film) => renderElement(filmListContainer, new CardView(film).element, RenderPosition.BEFORE_END));

    renderedFilmCount += COUNT_CARD_PER_STEP;

    if (renderedFilmCount >= FILMS.length) {
      loadMoreButton.remove();
    }
  });
}

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');
renderElement(footerStatisticsElement, new SiteStatisticsCountTemplate(FILMS.length).element, RenderPosition.BEFORE_END);
renderElement(siteMainElement, new CardPopupView(FILMS[0]).element, RenderPosition.AFTER_END);
