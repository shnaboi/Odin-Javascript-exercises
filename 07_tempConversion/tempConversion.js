const convertToCelsius = function(f) {
  const celsius = (f - 32) * (5/9);
  const roundC = Math.round(celsius * 10) / 10;
  return roundC;
};

const convertToFahrenheit = function(c) {
  const fahrenheit = (c * 9 / 5) + 32;
  const roundF = Math.round(fahrenheit * 10) / 10;
  return roundF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
