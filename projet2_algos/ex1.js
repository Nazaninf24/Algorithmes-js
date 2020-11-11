const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (error, data) => {
  numbers = data.split(" ").filter((item) => !isNaN(item)).map(Number);
  const result= Number(process.argv[3]);
  console.log(compare(numbers, result));
});

compare = (numbers, k) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (i != j && numbers[i] + numbers[j] == k) return true;
    }
  }
  return false;
};

