import {COUNT_CARD, COUNT_CARD_PER_STEP, RenderPosition} from './consts';
import {render} from './render';
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

const siteBodyElement = document.querySelector('body');
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

const FILMS = Array.from({
  length: COUNT_CARD
}, generateFilm);
const filters = generateFilters(FILMS);

render(siteMainElement, new SiteNavigationView(filters).element, RenderPosition.AFTER_BEGIN);
render(siteHeaderElement, new SiteProfileTemplate().element, RenderPosition.BEFORE_END);
render(siteMainElement, new SiteSortTemplate().element, RenderPosition.BEFORE_END);
render(siteMainElement, new SiteListingTemplate().element, RenderPosition.BEFORE_END);

const filmsElement = siteMainElement.querySelector('.films');
const filmList = filmsElement.querySelector('.films-list');
const filmListContainer = filmList.querySelector('.films-list__container');

const renderFilm = (filmListElement ,film) => {
  const filmComponent = new CardView(film);
  const filmPopupComponent = new CardPopupView(film);

  const openFilmPopup = () => {
    siteBodyElement.classList.add('hide-overflow');
    filmListElement.appendChild(filmPopupComponent.element, filmComponent.element);
  };
  const closeFilmPopup = () => {
    siteBodyElement.classList.remove('hide-overflow');
    filmListElement.removeChild(filmPopupComponent.element, filmComponent.element);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      closeFilmPopup();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  filmComponent.element.querySelector('.film-card__link').addEventListener('click', () => {
    openFilmPopup();
    document.addEventListener('keydown', onEscKeyDown);
  });

  filmPopupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
    closeFilmPopup();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(filmListElement, filmComponent.element, RenderPosition.BEFORE_END);
};

for (let item = 0; item < Math.min(FILMS.length, COUNT_CARD_PER_STEP); item++) {
  renderFilm(filmListContainer, FILMS[item]);
}

if (FILMS.length > COUNT_CARD_PER_STEP) {
  let renderedFilmCount = COUNT_CARD_PER_STEP;

  render(filmList, new SiteShowMoreTemplate().element, RenderPosition.BEFORE_END);

  const loadMoreButton = filmList.querySelector('.films-list__show-more');

  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    FILMS
      .slice(renderedFilmCount, renderedFilmCount + COUNT_CARD_PER_STEP)
      .forEach((film) => renderFilm(filmListContainer, film));

    renderedFilmCount += COUNT_CARD_PER_STEP;

    if (renderedFilmCount >= FILMS.length) {
      loadMoreButton.remove();
    }
  });
}

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');
render(footerStatisticsElement, new SiteStatisticsCountTemplate(FILMS.length).element, RenderPosition.BEFORE_END);
