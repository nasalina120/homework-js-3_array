const arrNums = [1, 4, 8, -4, 4, 6, 0.4];
console.log("Масив arrNums :>> ", arrNums);

const elmentpush = +prompt("Input elmentpush:");
arrNums.push(elmentpush);
const elmentunshift = +prompt("Input unshift:");
arrNums.unshift(elmentunshift);
console.log("Масив arrNums + elmentunshift/ elmentpush :>> ", arrNums);

const removedElement = arrNums.pop();
const removedElements2 = arrNums.shift();
console.log(
  `Видалено перший: ${removedElements2}  
   Видалено останній:  ${removedElement}`,
);
