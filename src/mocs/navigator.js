const filter = (total, amount, point) => {
  if (point === 'favourite') {
    if (amount.isFavourite === true) {
      return total + 1;
    }

    return total;
  }

  if (point === 'history') {
    if (amount.isWatched === true) {
      return total + 1;
    }

    return total;
  }

  if (point === 'watchlist') {
    if (amount.isWatchList === true) {
      return total + 1;
    }

    return total;
  }
};

const filmToFilterMap = {
  all: (films) => films.length,
  favorites: (films) => films.reduce((total, amount) => filter(total, amount, 'favourite'), 0),
  history: (films) => films.reduce((total, amount) => filter(total, amount, 'history'), 0),
  watchlist: (films) => films.reduce((total, amount) => filter(total, amount, 'watchlist'), 0)
};

export const generateFilter = (films) => Object.entries(filmToFilterMap).map(
  ([filterName, countFilms]) => ({
    name: filterName,
    count: countFilms(films),
  }),
);
