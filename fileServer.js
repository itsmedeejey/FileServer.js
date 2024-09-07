const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

// Reading the directory
app.get("/files",function(req,res){
    fs.readdir(path.join(__dirname, './files/'), (err, files) => {
       files.forEach(file => {
    console.log(file);
  });
res.json(files)
});
  
})

app.get ("/files/:fileName", function(req, res){
    const filePath = path.join(__dirname, './files/', req.params.fileName);
    console.log(filePath);
    fs.readFile(filePath,"utf-8" ,function(err,data){
        res.json({data});
    })
})
app.listen(3000)