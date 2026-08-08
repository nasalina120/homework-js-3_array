// 3.4. Знайти в масиві перше число, яке є більшим за 50. Вивести це число в консоль.
// Якщо такого числа немає — вивести undefined.

//  3.4 - findIndex, 3.5 - find.

const arrs = [-1, 5, 0, 9, -10];

function nonZeroNums(numbers) {
  return numbers !== 0;
}

const arrNonZeros = arrs.filter(nonZeroNums);
console.log("arrs :>> ", arrs);
console.log("arrNonZero :>> ", arrNonZeros);

const arrs1 = [99, 5, 0, 10, 9, 30];

function divideBy100(numbers) {
  return numbers / 100;
}
const divNums = arrs1.map(divideBy100);
console.log("arrs1 :>> ", arrs1);
console.log("divNums :>> ", divNums);

function cubeNum(items) {
  console.log("items :>> ", items ** 3);
}
arrs1.forEach(cubeNum);

function checkSquare100(num) {
  return num ** 2 === 100;
}
console.log("arrs1 :>> ", arrs1);

const targetIndex = arrs1.findIndex(checkSquare100);

if (targetIndex !== -1) {
  arrs1.splice(targetIndex, 1);
} else {
  console.log("arrs1 don't have targetIndex :>> ");
}

console.log("arrs1 :>> ", arrs1);

function isGreater50(num) {
  return num > 50;
}

const foundNum = arrs1.find(isGreater50);
console.log("foundNum  :>> ", foundNum);
