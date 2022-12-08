export const validationSearch = value => {
  return /[\\(\\)#$\\^&*+\\[\]\\|\\?]/.test(value);
};

export const validationNumber = value =>
  /[a-zA-Z_~`\\(\\)!#@$%\\^&*+=\-\\[\]\\';,.\\/{}|\\":<>\\?]/.test(value);

export const validationNumberAndLetters = value =>
  /[a-zA-Z_~`\\1234567890(\\)!#@$%\\^&*+=\-\\[\]\\';,.\\/{}|\\":<>\\?]/.test(
    value
  );
