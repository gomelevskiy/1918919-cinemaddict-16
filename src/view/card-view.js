import {TEXT_CUT_LIMIT} from '../consts';
import {textCropper,commentCountRules, generateYear} from '../utils';

export const createCardTemplate = ({
  article,
  poster,
  description,
  rating,
  dateRelise,
  duration,
  genre,
  comments,
  isWatched,
  isWatchList,
  isFavourite
}) => (
  `<article class="film-card">
		<a class="film-card__link">
			<h3 class="film-card__title">${article}</h3>
			<p class="film-card__rating">${rating}</p>
			<p class="film-card__info">
				<span class="film-card__year">${generateYear(dateRelise)}</span>
				<span class="film-card__duration">${duration}</span>
				<span class="film-card__genre">${genre[0]}</span>
			</p>
			<img src="./${poster}" alt="${article}" class="film-card__poster">
			<p class="film-card__description">${textCropper(description, TEXT_CUT_LIMIT)}</p>
			<span class="film-card__comments">${commentCountRules(comments)}</span>
		</a>
		<div class="film-card__controls">
			<button 
        class="
          film-card__controls-item 
          film-card__controls-item--add-to-watchlist 
          ${isWatchList ? 'film-card__controls-item--active' : ''}
        "
        type="button"
      >Add to watchlist</button>
			<button 
        class="
          film-card__controls-item 
          film-card__controls-item--mark-as-watched 
          ${isWatched ? 'film-card__controls-item--active' : ''}
        " 
        type="button"
      >Mark as watched</button>
			<button 
        class="
          film-card__controls-item 
          film-card__controls-item--favorite 
          ${isFavourite ? 'film-card__controls-item--active' : ''}
        " 
        type="button"
      >Mark as favorite</button>
		</div>
	</article>`
);
