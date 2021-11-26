import {renderTemplate, RenderPosition} from './render';
import {createNavigationTemplate} from './view/navigation-view';
import {createProfileTemplate} from './view/profile-view';
import {createSortTemplate} from './view/sort-view';
import {createListingTemplate} from './view/listing-view';
import {createCardTemplate} from './view/card-view';
import {createShowMoreTemplate} from './view/show-more-view';
import {createTopRatedListingTemplate} from './view/top-rated-list-view';
import {createMostCommentedTemplate} from './view/most-commented-list-view';
import {createStatisticsCountTemplate} from './view/statistics-count-view';
import {createPopupTemplate} from './view/popup-more';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

let filmList, filmListContainer;

renderTemplate(siteMainElement, createNavigationTemplate(), RenderPosition.AFTER_BEGIN);
renderTemplate(siteHeaderElement, createProfileTemplate(), RenderPosition.BEFORE_END);
renderTemplate(siteMainElement, createSortTemplate(), RenderPosition.BEFORE_END);
renderTemplate(siteMainElement, createListingTemplate(), RenderPosition.BEFORE_END);

const filmsElement = siteMainElement.querySelector('.films');
filmList = filmsElement.querySelector('.films-list');
filmListContainer = filmList.querySelector('.films-list__container');

const COUNT_CARD = 5;

for ( let item = 0; item < COUNT_CARD; item++ ) {
  renderTemplate(filmListContainer, createCardTemplate(), RenderPosition.BEFORE_END);
}

renderTemplate(filmList, createShowMoreTemplate(), RenderPosition.BEFORE_END);
renderTemplate(filmsElement, createTopRatedListingTemplate(), RenderPosition.BEFORE_END);
renderTemplate(filmsElement, createMostCommentedTemplate(), RenderPosition.BEFORE_END);

const COUNT_TOP_RATED_CARD = 2;
filmList = filmsElement.querySelectorAll('.films-list--extra');
filmListContainer = filmList[0].querySelector('.films-list__container');

for ( let item = 0; item < COUNT_TOP_RATED_CARD; item++ ) {
  renderTemplate(filmListContainer, createCardTemplate(), RenderPosition.BEFORE_END);
}

filmListContainer = filmList[1].querySelector('.films-list__container');

for ( let item = 0; item < COUNT_TOP_RATED_CARD; item++ ) {
  renderTemplate(filmListContainer, createCardTemplate(), RenderPosition.BEFORE_END);
}

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');
renderTemplate(footerStatisticsElement, createStatisticsCountTemplate(), RenderPosition.BEFORE_END);
renderTemplate(siteMainElement, createPopupTemplate(), RenderPosition.AFTER_END);
