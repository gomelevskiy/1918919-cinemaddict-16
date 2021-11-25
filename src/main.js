import { renderTemplate, RenderPosition } from './render';
import { createNavigationTemplate } from './view/navigation-view';
import { createProfileTemplate } from './view/profile-view';
import { createSortTemplate } from './view/sort-view';
import { createListingTemplate } from './view/listing-view';
import { createCardTemplate } from './view/card-view';
import { createShowMoreTemplate } from './view/show-more-view';
import { createTopRatedListingTemplate } from './view/top-rated-list-view';
import { createMostCommentedTemplate } from './view/most-commented-list-view';
import { createStatisticsCountTemplate } from './view/statistics-count-view';
import { createPopupTemplate } from './view/popup-more';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

renderTemplate(siteMainElement, createNavigationTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteHeaderElement, createProfileTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createListingTemplate(), RenderPosition.BEFOREEND);

const filmsElement = siteMainElement.querySelector('.films');
let filmList = filmsElement.querySelector('.films-list');
let filmListContainer = filmList.querySelector('.films-list__container');

const countCard = 5;

for ( let item = 0; item < countCard; item++ ) {
  renderTemplate(filmListContainer, createCardTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(filmList, createShowMoreTemplate(), RenderPosition.BEFOREEND);
renderTemplate(filmsElement, createTopRatedListingTemplate(), RenderPosition.BEFOREEND);
renderTemplate(filmsElement, createMostCommentedTemplate(), RenderPosition.BEFOREEND);

const countTopRatedCard = 2;
filmList = filmsElement.querySelectorAll('.films-list--extra');
filmListContainer = filmList[0].querySelector('.films-list__container');

for ( let item = 0; item < countTopRatedCard; item++ ) {
  renderTemplate(filmListContainer, createCardTemplate(), RenderPosition.BEFOREEND);
}

const countMostCommentedCard = 2;
filmListContainer = filmList[1].querySelector('.films-list__container');

for ( let item = 0; item < countMostCommentedCard; item++ ) {
  renderTemplate(filmListContainer, createCardTemplate(), RenderPosition.BEFOREEND);
}

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');
renderTemplate(footerStatisticsElement, createStatisticsCountTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createPopupTemplate(), RenderPosition.AFTEREND);
