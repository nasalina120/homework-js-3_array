const arrNums = [1, 4, 8, -4, 4, 6, 0.4];
console.log("Масив arrNums :>> ", arrNums);

const elmentpush = +prompt("Input elmentpush:");
arrNums.push(elmentpush);
console.log("Масив arrNums + elmentpush:>> ", arrNums);

const elmentunshift = +prompt("Input unshift:");
arrNums.unshift(elmentunshift);
console.log("Масив arrNums + elmentunshift :>> ", arrNums);
