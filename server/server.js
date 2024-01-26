const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

app.use(express.static(__dirname + "/../client"));
app.use(express.json());

app.get('/test',(req,res)=>{
    res.status(200).send("success");
})

app.post('/submit',(req,res)=>{
    const datas = req.body;
    console.log("datas : ", datas);

    let folderPath = "./datas";
    let fileName = "datas.json";
    let filePath = path.join(folderPath,fileName);

    let datasArr = [];
    datasArr.push(datas);

    let jsonDatasArr = JSON.stringify(datasArr);

    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath, {recursive : true});
    }


            fs.writeFile(filePath, jsonDatasArr, (err)=>{
                if(err) {
                    console.log("err : ",err);
                    res.status.send("failed");
                }else {
                    console.log("success");
                    res.status(201).send("success");
                }
            });
    })


app.listen(PORT,()=>{
    console.log(`Server runnung at http://localhost:${PORT}`);
})