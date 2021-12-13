import {
  EMOTION_COMMENTS,
  TEXT_COMMENTS,
  FORMAT_DATE_TIME,
  DATE,
  MIN_COMMENTS_GAP,
  MAX_COMMENTS_GAP
} from '../consts';
import {getRandomInteger} from '../utils';
import dayjs from 'dayjs';

let idComment = 0;

const generateComment = () => {

  const comment = {
    id: String(idComment++),
    comment: TEXT_COMMENTS[getRandomInteger(0, TEXT_COMMENTS.length - 1)],
    emotion: EMOTION_COMMENTS[getRandomInteger(0, EMOTION_COMMENTS.length - 1)],
    author: `user${getRandomInteger(1, 10)}`,
    date: dayjs(new Date(
      getRandomInteger(DATE.YEARS_MIN, DATE.YEARS_MAX),
      getRandomInteger(DATE.MONTH_MIN, DATE.MONTH_MAX),
      getRandomInteger(DATE.DAYS_MIN, DATE.DAYS_MAX),
      0,
      getRandomInteger(DATE.HOURS_MIN, DATE.HOURS_MAX),
      getRandomInteger(DATE.MINUTES_MIN, DATE.MINUTES_MAX))).format(FORMAT_DATE_TIME)
  };

  return comment;
};

export const commentTemplate = () => {

  const comments = [];

  for (let item = 0; item < getRandomInteger(MIN_COMMENTS_GAP, MAX_COMMENTS_GAP); item++) {
    comments[item] = generateComment();
  }

  return comments;
};
