import { getRandomInteger, getRandomDecimal} from '../utils';
import dayjs from 'dayjs';

const generateArticle = () => {
  const articles = [
    'The Dance of Life',
    'Sagebrush Trail',
    'The Man with the Golden Arm',
    'Santa Claus Conquers the Martians',
    'Popeye the Sailor Meets Sindbad the Sailor'
  ];

  const randomArticleIndex =  getRandomInteger(0, articles.length - 1);
  return articles[randomArticleIndex];
};

const generatePoster = () => {
  const posters = [
    'images/posters/made-for-each-other.png',
    'images/posters/popeye-meets-sinbad.png',
    'images/posters/sagebrush-trail.jpg',
    'images/posters/santa-claus-conquers-the-martians.jpg',
    'images/posters/the-dance-of-life.jpg'
  ];

  const randomPosterIndex =  getRandomInteger(0, posters.length - 1);
  return posters[randomPosterIndex];
};

const generateCountry = () => {
  const countrys = [
    'USA',
    'Russia',
    'France',
    'Germany',
    'Italy'
  ];

  const randomCountryIndex =  getRandomInteger(0, countrys.length - 1);
  return countrys[randomCountryIndex];
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.'
  ];

  const description = [];
  for( let i = 0; i < getRandomInteger(1, 5); i++ ) {
    description.push(descriptions[getRandomInteger(0, descriptions.length - 1)]);
  }

  return description.join(' ');
};

const generateComment = () => {
  const TEXT_COMMENTS = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'
  ];

  const EMOTION_COMMENTS = ['smile', 'sleeping', 'puke', 'angry'];

  const generateCommentTemplate = () => {
    const commentTemplate = {
      textComments: '',
      emotionsComment: '',
      authorComment: '',
      date: '',
    };

    commentTemplate.textComments = TEXT_COMMENTS[getRandomInteger(0, TEXT_COMMENTS.length - 1)];
    commentTemplate.emotionsComment = EMOTION_COMMENTS[getRandomInteger(0, EMOTION_COMMENTS.length - 1)];
    commentTemplate.authorComment = `user${  getRandomInteger(1, 10)}`;
    commentTemplate.date = dayjs(new Date(2021, 10, getRandomInteger(1, 30), 0, getRandomInteger(0, 23), getRandomInteger(0, 59))).format('YYYY/MM/DD mm:ss');

    return commentTemplate;
  };

  const commentsList = new Object();

  for( let i = 0; i < getRandomInteger(0, 5); i++ ) {
    commentsList[i] = generateCommentTemplate();
  }

  return commentsList;
};

const generateRating = () => {
  const rating = getRandomDecimal(6, 10);

  return rating;
};

const generateDateRelise = () => {
  const maxDaysGap = 10;
  const daysGap = getRandomInteger(0, maxDaysGap);

  return dayjs().add(daysGap, 'day').toDate();
};

const generateDuration = () => {
  const maxDurationGap = 59;
  const durationGap = getRandomInteger(0, maxDurationGap);
  const duration = dayjs().add(durationGap, 'minute').minute();

  if( duration < 10 ) {
    return `1h 0${  duration  }m`;
  }else {
    return `1h ${  duration  }m`;
  }
};

const generateCustomPersons = () => {

  const persons = [
    'Anthony Mann',
    'Anne Wigton',
    'Heinz Herald',
    'Richard Weil',
    'Erich von Stroheim',
    'Mary Beth Hughes',
    'Dan Duryea'
  ];

  const personList = new Set();
  for( let i = 0; i < getRandomInteger(1, 3); i++ ) {
    personList.add(persons[getRandomInteger(0, persons.length - 1)]);
  }

  return personList;
};

const generateCategory = () => {
  const categorys = [
    'comedy',
    'triller',
    'drama',
    'criminal',
    'action'
  ];

  const categorysList = [];
  for( let i = 0; i < getRandomInteger(1, 3); i++ ) {
    categorysList.push(categorys[getRandomInteger(0, categorys.length - 1)]);
  }

  const categorysEls = Array.from(new Set(categorysList));

  return categorysEls;
};

export const generateFilm = () => ({
  country: generateCountry(),
  article: generateArticle(),
  poster: generatePoster(),
  description: generateDescription(),
  descriptionFull: '',
  comments: generateComment(),
  rating: generateRating(),
  director: generateCustomPersons(),
  screenwriters: generateCustomPersons(),
  actors: generateCustomPersons(),
  dateRelise: generateDateRelise(),
  duration: generateDuration(),
  filmCountry: 'Russia',
  category: generateCategory(),
  ageRationg: getRandomInteger(0, 18),
  isFavourite: Boolean(getRandomInteger(0,1)),
  isWatched: Boolean(getRandomInteger(0,1)),
  isWatchList: Boolean(getRandomInteger(0,1)),
});
