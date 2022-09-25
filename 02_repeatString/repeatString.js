const repeatString = function (string, repetitions) {
  if (repetitions < 0) {
    return "ERROR";
  } else {
    return string.repeat(repetitions);
  }
};

// Do not edit below this line
module.exports = repeatString;
