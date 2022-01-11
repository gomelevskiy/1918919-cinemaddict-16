export const generateFilter = (films) => {
  const filterItems = films.reduce((prev, film) => {
    if (film.isWatched) {
      prev.watched += 1;
    }

    if (film.isWatchList) {
      prev.watchlist += 1;
    }

    if (film.isFavourite) {
      prev.favourite += 1;
    }

    return prev;
  }, {
    watched: 0,
    watchlist: 0,
    favourite: 0
  });

  const filter = Object.entries(filterItems);
  return filter;
};
