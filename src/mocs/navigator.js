const filmToFilterMap = {
  all: (films) => films.length,
  favorites: (films) => films.filter((film) => film.isFavourite).length,
  history: (films) => films.filter((film) => film.isWatched).length,
  watchlist: (films) => films.filter((film) => film.isWatchList).length
};

export const generateFilter = (films) => Object.entries(filmToFilterMap).map (
  ([filterName, countFilms]) => ({
    name: filterName,
    count: countFilms(films),
  }),
);
