//program to get an integer value and prints the integer value
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var data = userInput[0].split(" ");
var a = parseInt(data[0]);
 console.log(a);
});


/*Input:
======
10

Output:
======
10*/