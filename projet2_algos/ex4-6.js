const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (error, data) => {
  numbers = data.split(" ").filter((item) => !isNaN(item)).map(Number);
  selectionSort(numbers, numbers.length);
});

function selectionSort(numbers, len) {
  let count = 1;
  let min = numbers[len - 1];

  for (let j = len - 2; j >= 0; j--) {
    if (min < numbers[j]) {
      min = numbers[j];
      count++;
    }
  }
  console.log(count);
}
