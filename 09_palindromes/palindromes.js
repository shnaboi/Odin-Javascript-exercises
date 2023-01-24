const palindromes = function (str) {
    let stringOne = str.toLowerCase().replace(/\W|/g, "");
    let stringTwo = stringOne.split("").reverse().join("");
    return (stringOne === stringTwo);
};

// REGEX understanding
// \W matches NON-WORD characters such as comma, periods
// /g is global

// Do not edit below this line
module.exports = palindromes;
