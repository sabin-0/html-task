const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const fs = require('fs');
const { MongoClient } = require('mongodb');
const { error } = require('console');
const queryString = require('querystring');


const client =new MongoClient("mongodb://127.0.0.1:27017");


const server = http.createServer(async(req, res) => {
  //Acess the database and collection
  const db= client.db('ums');
  const collection = db.collection("users");

  //Get the req url 
  const reqUrl = req.url;
  console.log("reqUrl : ", reqUrl);

  //Parse the req url
  const parsedUrl = url.parse(reqUrl);
  console.log("parsedUrl : ", parsedUrl);

  //If url path is '/' server html
  if(parsedUrl.pathname === '/') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(fs.readFileSync('../client/index.html'));
  }else if(parsedUrl.pathname === '/add_user.html') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(fs.readFileSync('../client/add_user.html'));
  }else if(parsedUrl.pathname === '/get_user.html') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(fs.readFileSync('../client/get_user.html'));
  }else if(parsedUrl.pathname === '/style.css'){
    res.writeHead(200, {'Content-Type' : 'text/css'});
    res.end(fs.readFileSync('../client/style.css'));
  }else if(parsedUrl.pathname === '/script.js'){
    res.writeHead(200, {'Content-Type' : 'text/javascript'});
    res.end(fs.readFileSync('../client/script.js'));
  }

  //Handle form submission on POST request to /submit
  if(req.method === 'POST' && parsedUrl.pathname === '/submit') {
    let body ='';

    //Collect data as it comes in chunks
    req.on('data', (chunk)=> {
      console.log("chunk : ",chunk);
      console.log("chunk.toString() : ", chunk.toString());
      body = body + chunk.toString();
    });


    //Process the form data on end of request
    req.on('end', async ()=> {
      console.log("body : ", body);
      const formData = queryString.parse(body);
      console.log('forData : ', formData);

      //Do something with the submitted data
      console.log(`first name : ${formData.firstname},
      last name : ${formData.lastname},
      email : ${formData.email},
      password : ${formData.password}`);

      //Save to database
      //Insert the data into the collection
       await collection.insertOne(formData)
      .then((message)=> {
        console.log("Document inserted successfully :", message)

      })
      .catch((error)=> {
        console.log("Database Insertion error :",error.message?error.message:error);
      })
    });

    

    //send a response
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end("Form data submitted succesfully!");
  }

  if(req.method === 'GET' && parsedUrl.pathname === '/getData') {
    const formData = collection.find();
    console.log("formData : ", formData);

    const formDataArr = await formData.toArray();
    console.log("formDataArr : ", formDataArr);

    let jsonFormData = JSON.stringify(formDataArr);
    console.log("jsonFormData : ", jsonFormData);

    res.writeHead(200,{"Content-Type" : "text/json"});
    res.end(jsonFormData);

  }

  

});

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
    server.listen(port, ()=>{
      console.log(`server running at http://localhost:3000`);
    })
  });
}

connect();
