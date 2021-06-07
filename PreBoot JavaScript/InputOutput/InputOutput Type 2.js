// program to get single line input seperated by space and dispaly the values seperated by space
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
console.log(printOut(data));
});

function printOut(item){
    var output=item[0];
   for(var i=1; i<item.length;i++){
       output+=" ";
     output+= item[i];
    } 
return output;
}


/*Input:
=====

10 20 30 40

Output:
======

10 20 30 40*/