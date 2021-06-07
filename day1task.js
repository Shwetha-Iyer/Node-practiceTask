var fs = require("fs");
var express = require("express");
var app = express();
var result ="";
const port = process.env.PORT || 3000;
fs.readdir(".\\PreBoot JavaScript","utf-8",(err,files)=>{
    app.get("/",(req,res)=>{
        if(err){
            res.send("Oops!! Something is wrong!");
        }
        else{
            for(var i=0;i<files.length;i++){
                var path = ".\\PreBoot JavaScript\\"+files[i];
                var temp = fs.statSync(path);
                if(temp.isFile()){
                    result +="<img src='https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Docs-icon.png' height='25px' width='30px'>"+ files[i] +"<br>";
                    
                }
                else if(temp.isDirectory()){
                    result+= "<img src='https://upload.wikimedia.org/wikipedia/commons/5/59/OneDrive_Folder_Icon.svg' height='30px' width='28px'>"+ files[i] + "<br>";
                }
            }
            res.send(result);
        } 
    });
    app.listen(port, ()=> console.log("App running on:",port));
});
