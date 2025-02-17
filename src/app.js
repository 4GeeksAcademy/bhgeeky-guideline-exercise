function sumPositiveNumbers(numbers) {
  let positiveSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveSum += numbers[i];
    }
  }
  return positiveSum;
}

const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log(sumPositiveNumbers(numbers));

function add(x, y) {
  return x + y;
}
​
function subtract(x, y) {
  return x - y;
}

const result = add(5, 10);
console.log(result);
const accumulate = add(result, 6);
console.log(subtract(accumulate, 12));


function isOldEnoughToDrive(age) {
  if (age >= 16) return "Yes"
  return "No";
}


function numberIsDivisible(num) {
  if (num <= 0) {
    return "Number is not positive";
  }
  if (num % 2 === 0 && num % 3 === 0) {
    return "Divisible by 2 and 3";
  }
  if (num % 2 === 0) {
    return "Divisible by 2";
  }
  if (num % 3 === 0) {
    return "Divisible by 3";
  }
  return "Not divisible by 2 or 3";
}