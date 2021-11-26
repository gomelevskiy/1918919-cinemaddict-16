import { COUNT_CARD, RENDER_POSITION } from './consts';
import {renderTemplate} from './render';
import {createNavigationTemplate} from './view/navigation-view';
import {createProfileTemplate} from './view/profile-view';
import {createSortTemplate} from './view/sort-view';
import {createListingTemplate} from './view/listing-view';
import {createCardTemplate} from './view/card-view';
import {createShowMoreTemplate} from './view/show-more-view';
import {createStatisticsCountTemplate} from './view/statistics-count-view';
import {createPopupTemplate} from './view/popup-more';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

renderTemplate(siteMainElement, createNavigationTemplate(), RENDER_POSITION.AFTER_BEGIN);
renderTemplate(siteHeaderElement, createProfileTemplate(), RENDER_POSITION.BEFORE_END);
renderTemplate(siteMainElement, createSortTemplate(), RENDER_POSITION.BEFORE_END);
renderTemplate(siteMainElement, createListingTemplate(), RENDER_POSITION.BEFORE_END);

const filmsElement = siteMainElement.querySelector('.films');
const filmList = filmsElement.querySelector('.films-list');
const filmListContainer = filmList.querySelector('.films-list__container');

for ( let item = 0; item < COUNT_CARD; item++ ) {
  renderTemplate(filmListContainer, createCardTemplate(), RENDER_POSITION.BEFORE_END);
}

renderTemplate(filmList, createShowMoreTemplate(), RENDER_POSITION.BEFORE_END);

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');
renderTemplate(footerStatisticsElement, createStatisticsCountTemplate(), RENDER_POSITION.BEFORE_END);
renderTemplate(siteMainElement, createPopupTemplate(), RENDER_POSITION.AFTER_END);
