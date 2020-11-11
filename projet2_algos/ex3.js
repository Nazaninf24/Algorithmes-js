const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (error, data) => {
  numbers = data.split(" ").filter((item) => !isNaN(item)).map(Number);
  numberMatch(numbers);
});

const numberMatch = (numbers) => {
  let k = 17;
	let n = 0;
}