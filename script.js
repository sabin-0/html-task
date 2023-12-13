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

console.log("Third line...");

//types of requests
//get 
//post
//put
//delete


console.log("\n\n\nAjax..");

let xhr = new XMLHttpRequest();
let btn = document.getElementById('btn');

xhr.open("get",'https://jsonplaceholder.typicode.com/users');

btn.addEventListener('click',()=>{
  xhr.send();  
})


console.log("xhr response : ",xhr);

xhr.onreadystatechange = function () {
    console.log("readyState : ",xhr.readyState);

    let content = document.getElementById('content');
    console.log("content : ",content);
    let datas = '';

    if(xhr.readyState == 4) {

        if(xhr.status == 200) {
        console.log("response : ",xhr.response);
        console.log("type of response : ",typeof(xhr.response));

        let parsed_response = JSON.parse(xhr.response);
        console.log("parsed_response : ",parsed_response);
        console.log("type of parsed_response : ",typeof(parsed_response));

        for(let i=0; i<parsed_response.length; i++) {
            datas = datas + `<tr>
            <td>${parsed_response[i].id}</td>
            <td>${parsed_response[i].name}</td>
            <td>${parsed_response[i].username}</td>
            <td>${parsed_response[i].website}</td>
            </tr>`;
        }

        content.innerHTML = datas;
    }else {
        console.log("Request failed");
    }
}else {
    console.log("State not completed");
}

}






