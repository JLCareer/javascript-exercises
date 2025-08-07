const convertToCelsius = function(fahrenheitDeg) {
  return Math.round((fahrenheitDeg - 32) * (5/9) * 10) / 10
};

const convertToFahrenheit = function(celsiusDeg) {
  return Math.round(((celsiusDeg * (9/5)) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
