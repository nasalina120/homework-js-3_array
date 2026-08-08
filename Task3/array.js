const arrs = [-1, 5, 0, 9, -10];

const nonZeroNums = (numbers) => numbers !== 0;

const arrNonZeros = arrs.filter(nonZeroNums);
console.log("arrs :>> ", arrs);
console.log("arrNonZero :>> ", arrNonZeros);

const arrs1 = [99, 5, 0, 10, 9, 30];

const divideBy100 = (numbers) => numbers / 100;

const divNums = arrs1.map(divideBy100);
console.log("arrs1 :>> ", arrs1);
console.log("divNums :>> ", divNums);

const cubeNum = (items) => console.log("items :>> ", items ** 3);

arrs1.forEach(cubeNum);

const checkSquare100 = (num) => num ** 2 === 100;

console.log("arrs1 :>> ", arrs1);

const targetIndex = arrs1.findIndex(checkSquare100);

if (targetIndex !== -1) {
  arrs1.splice(targetIndex, 1);
} else {
  console.log("arrs1 don't have targetIndex :>> ");
}

console.log("arrs1 :>> ", arrs1);

const isGreater50 = (num) => num > 50;

const foundNum = arrs1.find(isGreater50);
console.log("foundNum  :>> ", foundNum);
