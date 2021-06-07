// program to get single line input string and dispaly the values seperated by space
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var data = userInput[0];
var out="";
for(var i=0;i<data.length;i++){
    if(i==data.length-1)
    out+=data.charAt(i);
    else{
        out+=data.charAt(i);
        out+=" ";
    }
}
console.log(out);
});

/*Input:
======
guvi

Output:
=======
g u v i*/