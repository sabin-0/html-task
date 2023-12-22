const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {

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
  }

  //Handle form sum=bmission on POST request to /submit
  if(req.method === 'POST' && parsedUrl.pathname === '/submit') {
    let body ='';

    //Collect data as it comes in chunks
    req.on('data', (chunk)=> {
      console.log("chunk : ",chunk);
      console.log("chunk.toString() : ", chunk.toString());
      body = body + chunk.toString();
    });


    //Process the form data on end of request
    req.on('end', ()=> {
      console.log("body : ", body);
      const formData = queryString.parse(body);
      console.log('forData : ', formData);

      //Do something with the submitted data
      console.log(`first name : ${formData.firstname},
      last name : ${formData.lastname},
      email : ${formData.email},
      password : ${formData.password}`)
    });

    //send a response
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end("Form data submitted succesfully!");
  }

});

server.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});