//Javascript is a synchronous single threaded language
//it performs asynchronous operations in the following way

//Callstack : adds asynchronous operations to callstack
//Event loop 
//Microtask queue
//Callback queue
//web space environment
//Asynchronous operation

console.log("First line...");
console.log("Second line");

setTimeout( ()=> {
    console.log("callback function");
},4000);

setTimeout( ()=> {
    console.log("callback function1");
},5000);

//event based asynchronous operations
// btn.add


//accessing external resources
// let datas = fetch('https://jsonplaceholder.typicode.com/users');
// console.log("datas : ", datas);

//types of requests
//get 
//post
//put
//delete

console.log("Third line...");


console.log("\n\n\nAjax..");

let xhr = new XMLHttpRequest();

xhr.open("get",'https://jsonplaceholder.typicode.com/users');

xhr.send();

console.log("xhr response : ",xhr);

xhr.onreadystatechange = function () {
    console.log("readyState : ",xhr.readyState);

    if(xhr.readyState == 4) {
        console.log("response : ",xhr.response);
        console.log("type of response : ",typeof(xhr.response));

        let parsed_response = JSON.parse(xhr.response);
        console.log("parsed_response : ",parsed_response);
        console.log("type of parsed_response : ",typeof(parsed_response));
    }
}






