// 3.3. Вивести елементи масиву, зведені у куб.
// 3.4. Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує.
// 3.4. Знайти в масиві перше число, яке є більшим за 50. Вивести це число в консоль. Якщо такого числа немає — вивести undefined.

// ❗SPOILER❗ 3.1 - filter, 3.2 - map, 3.3 - forEach, 3.4 - findIndex, 3.5 - find.

const arrs = [-1, 5, 0, 9, -10];

function nonZeroNums(numbers) {
  return numbers !== 0;
}

const arrNonZeros = arrs.filter(nonZeroNums);
console.log("arrs :>> ", arrs);
console.log("arrNonZero :>> ", arrNonZeros);

const arrs1 = [99, 5, 0, 9, 30];

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
