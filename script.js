//Javascript is a synchronous single threaded language
//it performs asynchronous operations in the following way

//Callstack : adds asynchronous operations to callstack
//Event loop 
//Microtask queue
//Callback queue
//web space environment
//Asynchronous operation

// console.log("First line...");
// console.log("Second line");

// setTimeout( ()=> {
//     console.log("callback function");
// },4000);

// setTimeout( ()=> {
//     console.log("callback function1");
// },5000);

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


{

console.log("Javascript regular expressions");

const str1 = "The cat9 is white";
const str2 = "rats eats fish";
const str3 = "Is it ok fishafrfr";
const str4 = `
good meat
is always good
`;

const regexp1 = /a/;
const result1 = regexp1.test(str1);//checks if str1 has the letter 'a' in it
console.log("result1 : ",result1);

const regexp2 = /A/i;
const result2 = regexp2.test(str1);//checks if str1 contains the letter 'a' and performs case-insensitive search
console.log("result2 : ",result2); 

const regexp3 = /ab/;
const result3 = regexp3.test(str1);//checks if str1 has the letter 'ab' in it
console.log("result3 : ",result3);

//[] - represents range
const regexp4 = /[crb]a/;
const result4 = regexp4.test(str1);//checks if str1 has 'c' or 'r' or 'b' before 'a'
console.log("result4 : ",result4);

const regexp5 = /[a-z]a/i;
const result5 = regexp5.test(str1);//checks if str1 contains any letters in between 'a' to 'z' , also 'i' represents case insensitive search
console.log("result5 : ",result5);

const regexp6 = /[a-z0-9]a/i;
const result6 = regexp6.test(str1);//checks if str1 contains any letters in between 'a' to 'z' or any digits between 0 to 9 and 'i' represents case insensitive search
console.log("result6 : ",result6);

//^represents start of a string
const regexp7 = /^rat/i;
const result7 = regexp7.test(str2);//Checks if str2 starts with 'rat'
console.log("result7 : ", result7);

//$ represents end of a string
const regexp8 = /fish$/i;
const result8 = regexp8.test(str2);//Checks if str2 ends with 'fish'
console.log("result8 : ", result8);


const regexp9 = /^good/im;//m-flag represents multiline matching
const result9 = regexp9.test(str4);//Checks if str4 starts with 'good'
console.log("result9 : ", result9);

const regexp10 = /good$/im;//m-flag represents multiline matching
const result10 = regexp10.test(str4);//Checks if str4 ends with 'good'
console.log("result10 : ", result10);

const regexp11 = /fishes?/im;//word before '?' is optional for matching
const result11 = regexp11.test(str3);//it matches both fishe and fishes
console.log("result11 : ", result11);

const regexp12 = /fish(es)?/im;//'()' represents groups
const result12 = regexp12.test(str3);//it matches both fish and fishes, 'es' is optional
console.log("result12 : ", result12);

const regexp13 = /fishes*$/i;//The letter before '*' can occur multiple times in a string
const result13 = regexp13.test(str3);//it matches fishe , fishes, fishessss...
console.log("result13 : ", result13);

const regexp14 = /fishes+$/i;//The letter before '+' can occur multiple times in a string, but atleast one occurence is required
const result14 = regexp14.test(str3);//here it matches fishes , fishes, fishessss...
console.log("result14 : ", result14);

const regexp15 = /fish.$/i;//Any character can occur after fish, '.' represents any type of character
const result15 = regexp15.test(str3);//here it matches fishe , fisha, fishb, fish1, fish2..., but does not matches fish, a character in place of '.' is a must
console.log("result15 : ", result15);

const regexp16 = /fish.*$/i;//Any character can occur after fish, '.' represents any type of character
const result16 = regexp16.test(str3);//here it matches fishe , fisheswg, because of '*'
console.log("result16 : ", result16);

}

{

//Input validation
//A-Z, a-z
//0-9
//_
//starts with character

const regexInp = /^[a-z][a-z0-9_]*$/i;

function checkResult(value) {
    const result = regexInp.test(value);

    if(result) {
        return '';
    }else {
        return 'invalid string';
    }
}

const value = "maxpayne3";

let validation_result = checkResult(value);
console.log("Validation_result : ", validation_result);


function onChange(arg) {
    let validation_result = checkResult(arg.value);
    let label = document.getElementById('error');
    if(validation_result) {
        label.innerHTML = validation_result;
    }else {
        label.innerHTML = validation_result;
    }
}

}


//string replace using regular expressions
let str5 = "a-b-c";

let replacedString1 = str5.replace(/-/,":");//Replaces first "-" with ":"
console.log("replacedString1 : ",replacedString1); 

let replacedString2 = str5.replace(/-/g,":");//Replaces all "-" with ":"
console.log("replacedString2 : ",replacedString2);

let dateStr = '12-10-04';

let dateStrReplaced = dateStr.replace(/(\d{2})$/,'20$1');//gets 'o4' from dateStr and replace it as '2004 , $1 will get the value of the first capture group i.e; within '()' brackets.
console.log("datesStrReplaced : ", dateStrReplaced);
 
{

//email validation using regular expressions

const regexpe = /^[a-z][a-z0-9@\.]*$/;

function checkResult1(value) {
    const result = regexpe.test(value);

    if(result) {
        return '';
    }else {
        return 'invalid string';
    }
}

function onChange1(arg) {
    let validation_result = checkResult1(arg.value);
    let label = document.getElementById('error');
    if(validation_result) {
        label.innerHTML = validation_result;
    }else {
        label.innerHTML = validation_result;
    }
}

}




