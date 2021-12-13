import dayjs from 'dayjs';
import { FORMAT_DATE } from './consts';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generateRandomValue = (value = null) => {
  const randomIndex = getRandomInteger(0, value.length - 1);

  return value[randomIndex];
};

export const getRandomDecimal = (min = 0, max = 1) => (Math.round((Math.random() * (max - min) + min) * 10) / 10).toFixed(1);

export const textCropper = (text, limit) => {
  if (text.length >= limit) {
    return `${text.substring(0,limit).trimEnd()}...`;
  } else {
    return text;
  }
};

export const commentCountRules = (comments) => {
  const commentsCount = comments.length;

  if (commentsCount === 1) {
    return `${commentsCount} comment`;
  } else {
    return `${commentsCount} comments`;
  }
};

export const generateYear = (date) => dayjs(date).year();
export const formatDate = (date) => dayjs(date).format(FORMAT_DATE);
