const arrs = [-1, 5, 0, 9, -10];

const arrNonZeros = arrs.filter((numbers) => numbers !== 0);
console.log("arrs :>> ", arrs);
console.log("arrNonZero :>> ", arrNonZeros);

const arrs1 = [99, 5, 0, 10, 9, 30];

const divNums = arrs1.map((numbers) => numbers / 100);
console.log("arrs1 :>> ", arrs1);
console.log("divNums :>> ", divNums);

arrs1.forEach((items) => console.log("items :>> ", items ** 3));

console.log("arrs1 :>> ", arrs1);

const targetIndex = arrs1.findIndex((num) => num ** 2 === 100);

if (targetIndex !== -1) {
  arrs1.splice(targetIndex, 1);
} else {
  console.log("arrs1 don't have targetIndex :>> ");
}

console.log("arrs1 :>> ", arrs1);

const foundNum = arrs1.find((num) => num > 50);
console.log("foundNum  :>> ", foundNum);
