"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - (4 * a * c);
  let x = -b / (2 * a);
  let x1 = (-b + Math.sqrt(D)) / (2 * a);
  let x2 = (-b - Math.sqrt(D)) / (2 * a);

  if (D < 0) {
  } else if (D == 0) {
    arr = [x]; 
  } else if (D > 0) {
    arr = [x1, x2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  let P  = percent / 100 / 12;
  let n = countMonths;

  if ((percent < 0 ||  contribution < 0 || amount < 0 || n < 0 ) || 
  (isNaN(percent) === true|| isNaN(contribution) === true || isNaN(amount) === true || isNaN(countMonths) === true)) {
  return false;
  }

  let payment = S * (P + (P / (((1 + P) ** n) - 1)));
  let totalAmount = (payment * n).toFixed(2);

  console.log(totalAmount);
  return +totalAmount;
}  