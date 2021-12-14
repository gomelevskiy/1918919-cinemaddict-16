import {
  ARTICLES,
  POSTERS,
  COUNTRIES,
  DESCRIPTIONS,
  PERSONS,
  CATEGORIES,
  MIN_COUNT_DESCRIPTION,
  MAX_COUNT_DESCRIPTION,
  MAX_DAYS_GAP,
  MAX_DURATION_GAP
} from '../consts';
import {
  getRandomInteger,
  getRandomDecimal,
  generateRandomValue
} from '../utils';
import {commentTemplate} from './comments';
import dayjs from 'dayjs';

const generateDescription = () => {
  const description = [];

  for (let index = 0; index < getRandomInteger(MIN_COUNT_DESCRIPTION, MAX_COUNT_DESCRIPTION); index++) {
    description.push(DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)]);
  }

  return description.join(' ');
};

const generateDateRelise = () => {
  const daysGap = getRandomInteger(0, MAX_DAYS_GAP);

  return dayjs().add(daysGap, 'day').toDate();
};

const generateDuration = () => {
  const durationGap = getRandomInteger(0, MAX_DURATION_GAP);
  const duration = dayjs().add(durationGap, 'minute').minute();

  if (duration < 10) {
    return `1h 0${duration}m`;
  } else {
    return `1h ${duration}m`;
  }
};

const generateCustomPersons = () => {
  const person = new Set();

  for (let index = 0; index < getRandomInteger(1, 3); index++) {
    person.add(PERSONS[getRandomInteger(0, PERSONS.length - 1)]);
  }

  return Array.from(person);
};

const generateCategory = () => {
  const category = new Set();

  for (let i = 0; i < getRandomInteger(1, 3); i++) {
    category.add(CATEGORIES[getRandomInteger(0, CATEGORIES.length - 1)]);
  }

  const categories = Array.from(category);

  return categories;
};

const generateFilm = () => ({
  country: generateRandomValue(COUNTRIES),
  article: generateRandomValue(ARTICLES),
  poster: generateRandomValue(POSTERS),
  description: generateDescription(),
  descriptionFull: '',
  comments: commentTemplate(),
  rating: getRandomDecimal(6, 10),
  director: generateCustomPersons(),
  screenwriters: generateCustomPersons(),
  actors: generateCustomPersons(),
  dateRelise: generateDateRelise(),
  duration: generateDuration(),
  genre: generateCategory(),
  ageRationg: getRandomInteger(0, 18),
  isFavourite: Boolean(getRandomInteger(0, 1)),
  isWatched: Boolean(getRandomInteger(0, 1)),
  isWatchList: Boolean(getRandomInteger(0, 1)),
});

export default generateFilm;
