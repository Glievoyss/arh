const visualChecks = [
  {
    isPassed: value => value.length >= 8
  },
  {
    isPassed: value => /[A-Z]/.test(value)
  },
  {
    isPassed: value => /[a-z]/.test(value)
  },
  {
    isPassed: value => /[0-9]/.test(value)
  },
  {
    isPassed: value =>
      /[_~`\\(\\)!#@$%\\^&*+=\-\\[\]\\';,.\\/{}|\\":<>\\?]/.test(value)
  }
];

export const isValid = value =>
  visualChecks.every(check => check.isPassed(value));
