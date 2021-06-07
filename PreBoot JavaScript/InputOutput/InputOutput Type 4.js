// program to get multi line input and display the output
var readline = require('readline');
var input = readline.createInterface({
    input: process.stdin
});
var userInput =[];
input.on('line', function(values){
    userInput.push(values);
});
input.on('close',function(){
    printValues(userInput);
});

function printValues(data){
    var out="";
    for(var i=0;i<data.length;i++){
        if(i==data.length-1)
            out+=data[i];
        else{
            out+=data[i];
            out+=" ";
            }
    }
    console.log(out);
}


/*Input:
======
2
3
4
5

Output:
=======
2 3 4 5*/