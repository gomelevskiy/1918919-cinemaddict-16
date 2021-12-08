import dayjs from 'dayjs';

export const createCardTemplate = (film) => {
  const {
    article,
    poster,
    description,
    rating,
    dateRelise,
    duration,
    category,
    comments,
    isWatched,
    isWatchList,
    isFavourite
  } = film;

  const commentCounter = () => {
    const commentsCount = Object.keys(comments).length;

    if( commentsCount === 1 ) {
      return `${commentsCount  } comment`;
    }else {
      return `${commentsCount  } comments`;
    }
  };

  const descritionCutter = () => {
    const cutLimit = 140;

    if(description.length >= cutLimit) {
      return `${description.substring(0,cutLimit).trimEnd()  }...`;
    }else {
      return description;
    }
  };

  const generateCategory = () => {
    const firstCategory = category[0];

    return firstCategory;
  };

  const yearFilter = () => {
    const yearFilm = dayjs(dateRelise).year();

    return yearFilm;
  };

  const isWatchedClassName = isWatched
    ? 'film-card__controls-item--active'
    : '';

  const isFavouriteClassName = isFavourite
    ? 'film-card__controls-item--active'
    : '';

  const isWatchListClassName = isWatchList
    ? 'film-card__controls-item--active'
    : '';

  return `<article class="film-card">
		<a class="film-card__link">
			<h3 class="film-card__title">${article}</h3>
			<p class="film-card__rating">${rating}</p>
			<p class="film-card__info">
				<span class="film-card__year">${yearFilter()}</span>
				<span class="film-card__duration">${duration}</span>
				<span class="film-card__genre">${generateCategory()}</span>
			</p>
			<img src="./${poster}" alt="${article}" class="film-card__poster">
			<p class="film-card__description">${descritionCutter()}</p>
			<span class="film-card__comments">${commentCounter()}</span>
		</a>
		<div class="film-card__controls">
			<button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${isWatchListClassName}" type="button">Add to watchlist</button>
			<button class="film-card__controls-item film-card__controls-item--mark-as-watched ${isWatchedClassName}" type="button">Mark as watched</button>
			<button class="film-card__controls-item film-card__controls-item--favorite ${isFavouriteClassName}" type="button">Mark as favorite</button>
		</div>
	</article>`;
};
