const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (error, data) => {
  numbers = data.split(" ").filter((item) => !isNaN(item)).map(Number);
  selectionSort(numbers, numbers.length);
});

const numberMatch = (numbers) => {
  let k = 17;
  let n = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[n] + numbers[i] == k) {
      return console.log(true);
    }

    if (i === numbers.length - 1) {
      i = n;
      i++;
      n++;
    }
  }
  return console.log(false);
};
