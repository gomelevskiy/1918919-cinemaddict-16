export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomDecimal = (min = 0, max = 1) => (Math.round((Math.random() * (max - min) + min) * 10) / 10).toFixed(1);