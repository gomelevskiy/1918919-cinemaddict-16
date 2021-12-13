import {
  formatDate
} from '../utils';
import {
  commentsTemplate
} from './comments-view';

export const createPopupTemplate = ({
  article,
  poster,
  description,
  rating,
  dateRelise,
  country,
  director,
  actors,
  ageRationg,
  screenwriters,
  duration,
  genre,
  comments,
  isWatched,
  isWatchList,
  isFavourite
}) => {
  const genreTemplate = (categories) => {
    const genres = [];

    for (const category of categories) {
      genres.push(`<span class="film-details__genre">${category}</span>`);
    }

    return genres;
  };

  return (`<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="${poster}" alt="">
            <p class="film-details__age">${ageRationg}+</p>
          </div>

          <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${article}</h3>
                  <p class="film-details__title-original">Original: ${article}</p>
                </div>
                <div class="film-details__rating">
                    <p class="film-details__total-rating">${rating}</p>
                </div>
              </div>
              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${director[0]}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${screenwriters.join(', ')}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${actors.join(', ')}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${formatDate(dateRelise)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${duration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
                    ${genreTemplate(genre).join('')}
                  </td>
                </tr>
              </table>
              <p class="film-details__film-description">${description}</p>
          </div>
        </div>

        <section class="film-details__controls">
          
          <button
            type="button" 
            class="film-details__control-button ${ isWatchList ? 'film-details__control-button--active' : ''} film-details__control-button--watchlist" 
            id="watchlist" 
            name="watchlist"
          >
            Add to watchlist
          </button>

          <button 
            type="button" 
            class="film-details__control-button film-details__control-button--watched ${ isWatched ? 'film-details__control-button--active' : ''}" 
            id="watched" 
            name="watched"
          >
            Already watched
          </button>
          
          <button 
            type="button" 
            class="film-details__control-button film-details__control-button--favorite ${ isFavourite ? 'film-details__control-button--active' : ''}" 
            id="favorite" 
            name="favorite"
          >
          Add to favorites
          </button>
        </section>
      </div>
      <div class="film-details__bottom-container">
        ${commentsTemplate(comments)}
      </div>
    </form>
  </section>`);
};
