const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const client =new MongoClient("mongodb://localhost:27017");
const db= client.db('ums');
const collection = db.collection("users");

console.log("__dirname : ", __dirname);
app.use('/',express.static(__dirname + '/client'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());//to parse json datas

app.get('/test',(req,res)=>{
    res.status(200).send("success");
});

app.post('/submit',async (req,res)=>{
    console.log("reached here");
    console.log("req body : ",req.body);

    await collection.insertOne(req.body)
        .then((message=>{
            console.log("Document inserted succesfully : ",message);
            res.status(201).send("success");
        }))
        .catch((errors)=>{
            console.log("Document insertion failed : ", errors);
            res.status(400).send("failed");
        })
});

app.get('/getData',async (req,res)=>{
    const formData = collection.find();
    console.log("formData : ", formData);

    const formDataArr = await formData.toArray();
    console.log("formDataArr : ", formDataArr);

    let jsonFormData = JSON.stringify(formDataArr);
    console.log("jsonFormData : ", jsonFormData);

   res.status(200).send(jsonFormData);
})

async function connect() {

    await client.connect()
    .then((message)=> {
      console.log("Database connection established");
    })
    .catch((error)=> {
      console.log("Database not connected");
      console.log("Database error : ", error.message?error.message:error);
    })
    .finally(()=>{
      app.listen(port, ()=>{
        console.log(`server running at http://localhost:${port}`);
      })
    });
  }
  
  connect();
  

