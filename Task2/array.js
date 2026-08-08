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

let positiveCount = 0;
for (let i = 0; i < arrNums.length; i++) {
  if (arrNums[i] > 0) positiveCount++;
}
console.log("positiveCount :>> ", positiveCount);
