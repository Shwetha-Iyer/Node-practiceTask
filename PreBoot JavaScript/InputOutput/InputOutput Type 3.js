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
    addValues(userInput);
});

function addValues(data){
    for(var i=0;i<data.length;i++){
        var num=data[i].split(" ");
        var out="";
        for(var j=0;j<num.length;j++){
            if(j==num.length-1)
            out+=num[j];
            else{
                out+=num[j];
                out+=" ";
            }
        }
        console.log(out);
    }
}

/*Input:
======
2 3 
1 4 6
2 4 7 8 3
9 7
1

Output:
=======
2 3 
1 4 6
2 4 7 8 3
9 7
1*/