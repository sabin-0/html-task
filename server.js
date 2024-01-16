const express = require('express');
const app = express();
const port = 5000;

console.log("__dirname : ", __dirname);
app.use('/',express.static(__dirname + '/client'));

app.get('/test',(req,res)=>{
    res.status(200).send("success");
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})