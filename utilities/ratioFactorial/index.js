const factorialOfNumbers = require("../factorial/index");
const ratioOfNumbers = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const factorial = factorialOfNumbers(num3);
  const ratio = ratioOfNumbers(num1, num2);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
