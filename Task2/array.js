// 2. ✅ Перебір масиву класичними циклами:
// (Не використовувати методи перебору масивів (forEach, filter, map, findIndex))
// 2.1. Вивести елементи з парними індексами.
// 2.2. Знайти добуток елементів масиву.
// 2.3. Порахувати та вивести в консоль кількість додатних елементів у масиві.

const arrNums = [1, 4, 8, -4, 4, 6, 0.4];
console.log("Масив arrNums :>> ", arrNums);

for (let i = 0; i < arrNums.length; i++) {
  if (i % 2 === 0)
    console.log(`arrNums[i] з парним  індексом ${i}:>> `, arrNums[i]);
}

let multResult = 1;
for (let i = 0; i < arrNums.length; i++) {
  multResult *= arrNums[i];
}
console.log("multResult :>> ", multResult);
