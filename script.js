// // console.log("From External script");
// // console.log(window);//Global object
// /* Multiline comment
// first line
// second line
//  */
// //variables
// // var i; //Variable declaration
// // i="Hello"; //Initialization
// // console.log(i);

// // var a =10 //Declaration + Initialization
// // console.log("a : ", a);

// // //Datatypes
// // var str = "This is a string";
// // console.log("str : ", str);
// // console.log("Type of str : ", typeof str);

// // var num = 100;
// // console.log("num : ", num);
// // console.log("Type of num : ", typeof num);

// // var bool = true;
// // console.log("bool : ", bool);
// // console.log("Type of bool : ", typeof bool);

// // var a1 = undefined;
// // console.log("a1 : ", a1);
// // console.log("Type of a1 : ", typeof a1);

// // var b1 = null;
// // console.log("b1 : ", b1);
// // console.log("Type of b1 : ", typeof b1);

// // var c1;
// // console.log("c1 : ", c1);
// // console.log("Type of c1 : ", typeof c1);

// // var d1="";
// // console.log("d1 : ", d1);
// // console.log("Type of d1 : ", typeof d1);


// // document.write("This is from javascript...");


// // //String Methods
// // var str = "Hello,world";

// // console.log("Length : ", str.length)
// // console.log("upperCase : ", str.toLocaleUpperCase());
// // console.log("lowerCase : ", str.toLocaleLowerCase());
// // console.log(str.toUpperCase().length);
// // console.log(str.toUpperCase().toLowerCase().toLowerCase().toUpperCase().length);
// // console.log("trim : ",str.trim());
// // console.log("Trimmed length : ", str.trim().length);
// // console.log("Trim Start : ", str.trimStart());
// // console.log("Length of start trimmed string : ", str.trimStart().length);
// // console.log("Trim End : ", str.trimEnd());
// // console.log("Length of right trimmed string : ", str.trimEnd().length);
// // console.log("Replace : ",str.replace("Hello","Hai"));
// // console.log("StartsWith : ",str.startsWith("Hello"));
// // console.log("Endswith : ", str.endsWith("world"));

// // console.log("Split : ", str.split(',')) //Converts string to an array
// // console.log("Join : ", str.split(',').join(',')); //Convers array to string








// //Arrays
// var a = 10;
// console.log("a : ", a);

// var arr = [10, 20, 30, "Hello", 'Hai', true, false, undefined, null];

// console.log("arr : ", arr);
// console.log("type of arr : ", typeof arr);
// console.log("Length : ", arr.length);
// console.log("Join : ", arr.join(' '));
// console.log("Index : ", arr.indexOf("Hello"));
// console.log("Push element: ", arr.push("End"), ',', "arr : ", arr);
// console.log("Unshift element : ", arr.unshift("First"), ",", "arr : ", arr);
// console.log("Pop element : ", arr.pop(), ",", "arr : ", arr);
// console.log("shift element : ", arr.shift(), ",", "arr : ", arr);

// // Replace elements in an array
// arr[0] = 15;
// arr[3] = "Welcome";
// console.log("arr : ", arr);

// //Splice
// arr.splice(7, 2);
// console.log("arr splice : ", arr);

// arr.splice(3, 0, 40);
// console.log("arr : ", arr);

// //Objects
// var obj = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 10,
//     canadian: false,
//     hobbies: ["Reading", 'Gaming', "Drawing"]
// };

// console.log("obj : ", obj);
// console.log("Firstname : ", obj.firstName);
// console.log("Age : ", obj.age);
// console.log("Hobbies : ", obj.hobbies);

// obj.age = 11;
// console.log("obj : ", obj);

// obj.mark1 = 50;
// console.log("obj : ", obj); console.log("X : ", x);


// obj.mark2 = 100;
// console.log("obj : ", obj);
// console.log("X : ", x);

// //JSON STRING
// var obj1 = {
//     name: "Jane",
//     age: 21,
//     Indian: false,
// };
// ``
// var a = 10;
// console.log(`a : ${a}`);

// //Javascript object notation
// var json_str = JSON.stringify(obj1);
// //Converting javascript object to JSON String
// console.log(`Json string : ${json_str}`);


// //Parsing JSON
// var obj3 = JSON.parse(json_str);
// console.log(`Object : ${obj3.name}`);


// {
//     var a = 10; //Global scoped, can be declared anywhere in the function
// }

// console.log("a : ", a);


// //Block scoped

// {
//     let b; //Declare
//     b = 15; //Initialize

//     const c = 20;

//     console.log("b : ", b);
//     console.log("c : ", c);

//     b=20;
//     // c=25; Assignment to constant variable not possible
// }


// //Hoisting
// console.log("X : ", x);
// var x = 50;

// // console.log("y : ", y); Gives error
// let y = 60;

// //Multiple declarations
// var x = 100;
// // let y = 150; Gives error


// //Javascript conditions

// let num1 = "100";
// let num2 = 100;

// if (num1 > num2) {
//     console.log(`num1 : ${num1} is greater`)
// } else if (num1 == num2) {
//     console.log("Both are equal");
// } else {
//     console.log(`num2 : ${num2} is greater`)

// }

// if (false) {
//     console.log("Block 1");
// } else if (true) {
//     console.log("Block 2");
// } else if (true) {
//     console.log("Block 3");
// } else {
//     console.log("Block 4");
// }


// if (num1 === num2) {
//     console.log("Num1 equals Num2");
// } else {
//     console.log("Num1 not equals Num2");

// }
// flase && true
// //+,-,*,/,%, ++, --, ++var, --var, var++, var--
// //&&, ||, !
// //=
// //== , ===(type checking) , <, >, <=, >=, <===, >==

// if (!false) {
//     console.log("Condition true");
// } else {
//     console.log("Condition false");

// }

// // Pre increment
// let abc1 = 10;
// let result1 = ++abc1;
// console.log("Result1 : ", result1);

// //Pre decrement
// let abc2 = 10;
// let result2 = --abc2;
// console.log("result2 : ", result2);

// //Post increment
// let abc3 = 10;
// let result3 = abc3++;
// console.log("result3 : ", result3);

// //Post decrement
// let abc4 = 10;
// let result4 = abc4--;
// console.log("result4 : ", result4);


// //Switch statement
// let day = 1;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;console.log(`a : ${a}`);

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid value");
//         break;

// }

// //Loops

// {

//     //For loop
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }


//     let i = 0;
//     //while loop
//     while (i <= 10) {
//         console.log("Hello from while loop...");
//         i = i + 1;
//     }

//     let j=0;
//     //dowhile loop
//     do {
//         console.log("Hello from do while loop");
//         j = j + 1;
//     } while (j <= 10);



//     //Break and continue
//     for (let i = 0; i <= 10; i++) {

//         if (i == 5) {
//             continue;
//         }

//         if (i == 8) {
//             break;
//         }

//         console.log(i);
//     }    


// }
// //  str = "*\n**\n***\n"
// {
//         //Nested loops
//         let string = '\n*\n**\n***\n';

//         for(let i=0; i<=10; i++) {

//             //Nested for loop
//             for(let j=0; j<i; j++) {
//                 string = string + '*';
//             }
            
//             string = string + '\n';
//         }
        
//         console.log(string);


//         //Functions

//         //Function definition
//         function printHello() {
//             //Code block
//             console.log("Hello");
//         }

//         printHello(); //Function call


//         //Function to print sum
//         function sum(a,b)//Parameter
//          {
//             let sum;
//             sum = a+b;
//             console.log("Sum : ", sum);
//         }

//         sum(10,20); //Argument


// }



// {

//     //Sumconsole.log(`a : ${a}`);
//     let sum = 0;

//     for(let i =0; i<=10; i++) {
//         sum = sum + i;
//         // console.log("Sum : ", sum)
//     }

//     console.log("Sum : ", sum);

//     //Print even numbers
//     let i=0;
//     while(i<=20) {

//         if(i%2 == 0) {
//             console.log("i : ", i)
//         }

//         i++;
//     }
// }

// {
//     //Call by value
//     let a = 10;

//     function update(a) {
//         a="New value";
//         console.log("From function : ", a);
//     }

//     update(a);
//     console.log("a : ", a);



//     //Call by reference
//     let arr = [10,20,30];

//     function arrUpdate(arr) {
//         arr[0] = 100;
//         console.log("arr from function : ", arr)
//     }

//     arrUpdate(arr);
//     console.log("arr : ", arr);
// }


// {
// //Closures
// function outerFunction() {

//     const outerVariable = 'From outer function';

//     function innerFunction() {

//         function innerFunction1() {

//             function innerFunction2() {

//                 console.log("outerVariable : ", outerVariable);
//             }

//             return innerFunction2;
//         }

//         return innerFunction1;
//     }

//     return innerFunction;
// }


// let result = outerFunction();//innerFunction code
// console.log("Result : ", result);
// result();

// let result1 = result();
// console.log("Result1 : ", result1);
// result1();

// let result2 = result1();
// console.log("Result2 : ", result2);
// result2();

// //A function along with its environment is called closure
// }

// {
//     //Dom methods
    
//     let content  = document.getElementsByClassName("content");
//     content[0].textContent = "Some content";
//     content[1].textContent = "Another content";

//     let text = document.getElementById("text");
//     text.textContent = "Some text";

//     let para = document.getElementsByTagName("p");
//     para[0].textContent = "A paragraph";

//     let listItem = document.querySelector(".container .container1 ul li");
    
//     listItem.textContent = "List item 1";

// }

// {
//     //Type of functions

//     //Named functions
//     function printHelloWorld() {
//         console.log("Hello world");
//     }

//     printHelloWorld();

//     //Anonymous functons
//     const printHai = function () {
//         console.log("Hai");
//     };

//     printHai();


//     //Arrow function
//     const printWelcome = () => {
//         console.log("Welcome");
//     };

//     printWelcome();


//     //Callback function
//     function printHaiWorld(callback) {
//         callback();
//     }

//     // const callback =  function () {
//     //     console.log("Hai world");
//     // };
//     printHaiWorld(function () {
//         console.log("Hai world");
//     });


//     let btn = document.getElementById('btn');
//     console.log("btn : ", btn);

//     btn.addEventListener('click', function () {
//         alert("Button clicked")
//     });

//     btn.addEventListener('mouseover', ()=> {
//         console.log("MouseOver event..");
//     });

//     btn.addEventListener('mouseout', ()=> {
//         console.log("mouseOut event...")
//     });

//     btn.addEventListener('mousedown', function () {
//         console.log("MouseDown event...")
//     });

//     btn.addEventListener('mouseup', ()=> {
//         console.log("MouseUp event...");
//     });

//     btn.addEventListener('mousemove', ()=> {
//         console.log("MouseMove event...");
//     });


//     let inp = document.getElementById('inp');

//     inp.addEventListener('keydown', ()=> {
//         console.log("KeyDown event...");
//     });

//     inp.addEventListener('keyup', function () {
//         console.log("KeyUp event...");
//     });

//     //Math functions
//     console.log(Math.sqrt(16)); //4
//     console.log(Math.round(10.4)); //10
//     console.log(Math.round(10.5)); //11
//     console.log(Math.ceil(10.2)); //11
//     console.log(Math.ceil(10.8)); //11
//     console.log(Math.floor(10.7)) //10
//     console.log(Math.floor(10.2)); //10
//     console.log(Math.abs(-90)); //90
//     console.log(Math.abs(90)); //90
//     console.log(Math.PI);//3.141592653589793
//     console.log(Math.max(10,20,30)); //30
//     console.log(Math.min(10,20,30)); //10
//     console.log(Math.pow(2,3));//8

// }

// {
//     let z = 10;
    
// }
// console.log(`value of z :`,z);


// timer functions

// setTimeout(function(){
//     console.log("timeout");
//     alert("timeout")
// },3000);

// setInterval(function(){
//     console.log("timeout");
//     alert("timeout")
// },3000);


//program to show current time
// function putzero(sec){
//     return sec<10?"0"+sec:sec;
// }

// function show(){
//     var time=document.getElementById('time');
//     var dt=new Date();
//     var hours=dt.getHours();
//     var ampm=hours<12?"am":"pm";

//     time.innerHTML=putzero(hours%12)+":"+putzero(dt.getMinutes())+":"+putzero(dt.getSeconds())+":"+ampm;
//     setTimeout(function(){
//             show();
//          },1000);
// }

// show();



//spread operator
// let arr=[1,2,3,4,5];
// console.log("arr : ",arr);

// let arr1=[...arr,6];
// console.log("arr1 : ",arr1);

// let obj = {
//     firstname : "jane",
//     lastname : "joe",
//     age : 25
// }
// console.log("obj : ",obj);
// let obj1=


//destructuring



//nested destructuring
// const matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// const [firstRow, secondRow, thirdRow] = matrix;

// const[a,b,c] = firstRow;
// const[d,e,f] = secondRow;
// const[g,h,i] = thirdRow;

// console.log("a : ",a);
// console.log("b : ",b);
// console.log("c : ",c);
// console.log("d : ",d);
// console.log("e : ",e);
// console.log("f : ",f);
// console.log("g : ",g);
// console.log("h : ",h);
// console.log("i : ",i);

// const person = {
//     name : "john",
//     age : 30,
//     address : {
//         city : "new york",
//         zipcode : '10001'
//     }
// }

// const {name, age, address : {city, zipcode}} = person;
// console.log("name : ", name);
// console.log("age : ", age);
// console.log(" city : ",city);
// console.log("zipcode : ", zipcode);


//factorial

// function fact(a){
//     let b=1;
//     for(let i=1;i<=a;i++)
//     b=b*i;
//     return b;
// }

// console.log("factorial : ",fact(3));

//fibonacci series

// function fib(limit){
//     console.log(0+"\n"+1);
//     let i=0, a=0, b=1, sum;
//     while(i<=limit/2){
        
//         let sum=a+b;
//         a=b;
//         b=sum;
//         console.log(sum);
//         i++;
//     }
// }

// fib(7);

//fibonacci 2
// {

// function fibonacci(limit){
//     let a = 0;
//     console.log(a);
//     let b = 1;
//     console.log(b);
//     let sum = 0;

//     while(sum<limit){
//         sum = a+b;
//         console.log(sum);
//         a = b;
//         b = sum;
//     }
// }
// fibonacci(10);

// }

//array operations
//sum
// {
//     let sum=0;
//     let a=[1,2,3,4,5];
//     for(let i=0;i<a.length;i++){
//         sum=sum+a[i];
//     }
//     console.log("sum of the array is ",sum);
// }

//average
// {
//     let average=0, sum=0;
//     let a=[1,2,3,4,5];
//     for(let i=0;i<a.length;i++){
//         sum=sum+a[i];
//     }
//     average=sum/a.length;
//     console.log("average of the array is ",average);
// }

// //minimum
// {

// let a=[2,5,3,4,1];
// let min = a[0];
// for(let i=0;i<a.length;i++){

//     if(a[i]<min)
//     min=a[i];
   
// }
// console.log("min : ",min);

// }

//maximum
// {

//     let a=[2,5,3,10,4,1,7];
//     let max = a[0];
//     for(let i=0;i<a.length;i++){
    
//         if(a[i]>max)
//         max=a[i];
       
//     }
//     console.log("max : ",max);
    
//     }

//string reverse using built in functions
// {
// str="world";
// rev=str.split("").reverse().join("");
// console.log("reverse of world is ",rev);
// }


//string reverse for loop
// {
// function revstr(str){
//     let rev="";
//     for(i=str.length-1;i>=0;i--){
//         rev+=str[i];
//     }
// console.log("reverse : ",rev);
// }
// revstr("hello");
// }

//pallindrome
// {
//     function revstr(str){
//         let rev="";
//         for(i=str.length-1;i>=0;i--){
//             rev+=str[i];
//         }
//     console.log("reverse : ",rev);

//     if(str==rev)
//     console.log("string is a pallindrome");
//     else
//     console.log("string is not a pallindrome");
//     }
//     revstr("malayalam");
// }

//multiplication table
// {
// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }
// }

//odd or even
// {   let sum1 = 0;
//     let sum2 = 0;
//     for(let i=1;i<=50;i++){
//         if(i%2==0){
//             console.log("even : ",i);
//             sum1+=i;
//         }
//         else{
//             console.log("odd : ",i);
//             sum2+=i;
//         }
//     }
//     console.log("sum of even numbers : ",sum1);
//     console.log("sum olet average=0, sum=0;
//     let a=[1,2,3,4,5];
//     for(let i=0;i<a.length;i++){
//         sum=sum+a[i];
//     }
//     average=sum/a.length;
//     console.log("average of the array is ",average);


//array using functions
// {
// function arrsum(arr){
//     let sum=0;
//         for(let i=0;i<arr.length;i++){
//             sum=sum+arr[i];
//         }
        
//         return sum; 
// }
// }
// console.log("sum of the array is ",arrsum([1,2,3]));


// {
// function arravg(arr){
//     let average=0, sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     average=sum/arr.length;
   
//     return average;
// }
// }
// console.log("average of the array is ",arravg([1,2,3]));


// {
// function arrmin(arr){
//     let min = arr[0];
//     for(let i=0;i<arr.length;i++){

//         if(arr[i]<min)
//         min=arr[i];
   
// }
    
//     return min;

//     }
// }
// console.log("min : ",arrmin([2,1,3]));



// {
//     function arrmax(arr){
//         let max = arr[0];
//         for(let i=0;i<arr.length;i++){
    
//             if(arr[i]>max)
//             max=arr[i];
       
//     }
        
//         return max;
    
//         }
//     }
//     console.log("max : ",arrmax([2,1,3]));
    

//negative to positive
{

function positive(arr){
    let arr1 = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
        arr[i] = arr[i]*-1;
        arr1.push(arr[i]);
        }
        else{
        arr1.push(arr[i]);
        }

    }
    return arr1;
}

    console.log("array : ",positive([-1,2,-3]));

}


//recursive function
{

let i=0;
function count(){
    i++;
    while(i<=10){
        console.log(i);
        count();
    }
}
count();

}


//countdown using recursive function call
{

console.log("countdown");
function countdown(n){
    if(n<=0){
    console.log("Done");}
    else{
        console.log(n);
        countdown(n-1);
    }
}
countdown(5);

}

//factorial using recursion
{
  
console.log("factorial using recursive function call");
function fact(n){
    if(n==1||n==0)
        return 1;
    else
        return n*fact(n-1);
    
}
console.log("factorial: ",fact(5));

}

{

let myForm = document.getElementById('myForm');
console.log("form : ",myForm);
var datas = {};
let arr = [];

myForm.addEventListener('submit',function(e){

    e.preventDefault();//stops default behaviour of form

    

    // let fname = document.getElementById('fname');
    // fname_value = fname.value;
    // console.log("first name : ",fname_value);

    // let lname = document.getElementById('lname');
    // lname_value = lname.value;
    // console.log("last name : ",lname_value); 

    // let uname = document.getElementById('uname');
    // uname_value = uname.value;
    // console.log("user name : ",uname_value);

    let email = document.getElementById('email');
    email_value = email.value;
    console.log("email : ",email_value);

    let password = document.getElementById('password');
    password_value = password.value;
    console.log("password : ",password_value);
    sum+=square;
    handledatas(datas);

});

function handledatas(datas){
    console.log("datas : ",datas);
    let message = document.getElementById('message');

    //validation
    if(arr.length>0){
        for(let i=0;i<arr.length;i++){
            if(arr[i].email == datas.email){
                message.innerHTML = "Email already found";
                return;
            }
        }
    }

    arr.push(datas);
    message.innerHTML = "success";
    console.log("arr : ",arr);
}

}
{
//ARRAY FUNCTIONS
let arr = [
    {name : "sabin",
    marks : 60,
    place : "attingal"
    },

    {name : "yadu",
    marks : 54,
    place : "varkala"
    },

    {name : "arjun",
    marks : 60,
    place : "alamcode"
    }
];

console.log("array : ",arr);

//foreach
arr.forEach((item,index)=>{
    console.log(`item-${index}:`,item)
});

//find
console.log("find =>");
const x = arr.find((item)=>{
    return item.name == "arjun";
});

console.log("x : ",x);

//filter
console.log("filter=>");
const arr1 = arr.filter((item,index)=>{
    return item.marks == 60;
});

console.log("arr1 : ",arr1);

//map
console.log("map=>");
const arr2 = arr.map((item)=>{
    return item.name;
});//returns an array of same length

console.log("arr2 : ",arr2);

//reduce
const value = arr.reduce((total,item)=>{
    console.log("total : ",total);
    console.log("Item : ",item);
    return total+item.marks;
},0);

console.log("value : ",value);
}

//square and sum of array elements using foreach
{
let arr1 = [];
let sum = 0;
function squaresum(arr){
    arr.forEach((item,index)=>{
        square = item*item;
        sum+=square;
        arr1.push(square);
        
    });
    console.log("squared array : ",arr1);
    console.log("sum : ",sum);
}
squaresum([2,3,4]);
}

//first even number of an array using find
{

    function filterarr(arr){
        const arr1 = arr.find((item,index)=>{
            return item%2 == 0
        });
        console.log("Even  : ",arr1);
        }
        filterarr([2,3,4,5,6,7,8]);

}

//filter all the even numbers in an array using filter function
{

    function filterarr(arr){
        const arr1 = arr.filter((item,index)=>{
            return item%2 == 0
        });
        console.log("Even array : ",arr1);
        }
        filterarr([2,3,4,5,6,7,8]);
    }


//double each elements in an array using map
{

function maparr(arr){
    const arr1 = arr.map((item,index)=>{
        return item*2;
    });
    console.log("Doubled array : ",arr1);
}
maparr([1,2,3,4,5]);
}


//write a function 'productPositive' that takes an array of numbers as input and uses the 'reduce' method to calculate the product of all posititve numbers in the array
{

function productPositive(arr){
    const value = arr.reduce((total,item)=>{
        if(item>0){
            return total*item;
        }
        else{
            return total;
        }
    },1);
    console.log("product of positive numbers is ",value);
}
productPositive([-2,3,4,-5,10]);

}
    
//work monday-dec4
//3.given an array of numbers ,use the reduce method to calculate the sum of all the numbers
{

function sum(arr){
    const value = arr.reduce((total,item)=>{
        return total+item;
    },0);
    console.log("sum of elements : ",value);
}
sum([1,2,3,4,5]);

}

//4.given an array of numbers, use the reduce method to find the maximum value in the array
{

    function max(arr){
        const value = arr.reduce((total,item)=>{ 
            return Math.max(total,item);
        });
        console.log("maximum value : ",value);
    }
    max([1,2,3,6,4,5]);
    
}

//5.given an array of strings, use the map method to create a new array where each string is capitalized
{

function stringUpper(arr){
    const value = arr.map((item)=>{
        return item.toUpperCase();
   });
    console.log("Capitalized string : ",value);
}
stringUpper(['a','b','c']);

}

//6.given an array of words, use the filter method to create a new array containing only the words with a length greater than a specified value
{

function wordLength(arr){
    const value = arr.filter((item)=>{
        return item.length>4;
    });
    console.log("Filtered array of words : ",value);
}
wordLength(['bus','elephant','banana','car']);

}


//7.given an array of numbers, use the map method to create a new array of strings indicating whether each number is even or odd
{

function evenoddstring(arr){
    const value = arr.map((item)=>{
        if(item%2==0){
            return "even";
        }
        else{
            return "odd";
        }
    });
    console.log("Array even or odd: ",value);
}
evenoddstring([2,6,5,7,1,9]);
}

//8.given an array of elements, use the filter method to create a new array with only unique elements(remove duplicates)
{

function unique(arr){
    const value = arr.filter((item,index)=>{
        return arr.indexOf(item)===index;
    });
    console.log("Filtered array of unique elements : ",value);
}
unique([1,3,4,1,5,2,6,2]);
}

//9.given an array of numbers, use the sort method to sort them in ascending order
{
function sortasc(arr){
    return arr.sort();
}
let value = sortasc([2,5,1,8,6,4]);
console.log("sorted array in ascending order : ",value);
}

//10.Given an array of objects with a name property , use the map nethod to create a new array containing only the names
{

function nameob(arr){
    const value = arr.map((item)=>{
        return item.name;
    });
    console.log("names : ",value);
}
nameob([{name : 'sabin', marks : 50},
        {name : 'arjun', marks : 60},
        {name : 'ananthu', marks : 70}]);

}

//count vowels in a string
{
var count = 0;
function countVowels(str){
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u"){
            count++;
        }
    }
    return count;

}
let a=countVowels("helloworld");
console.log("count of vowels : ",a);
}

//this
{

console.log(this);

let obj = {
    name : "john",
    getAge : function(){
        console.log(this);
    }
}
console.log(obj.name);
console.log(obj.getAge());


function greet(message,message1){
    console.log("message : ",message);
    console.log("message1 : ",message1);
    console.log("this : ",this);
    console.log("name : ",this.name);
}
//call method
// greet.call(obj,"hello","hello1");


//bind method
let boundGreet = greet.bind(obj,"hello","hello1");
console.log("boundGreet : ",boundGreet);
boundGreet();


//apply method
greet.apply(obj,["hello","hello1"]);

}



let obj = {
    name : "harry",
    age :30,
    greeting : function () {
        console.log("name : ",this.name);
        console.log("age : ",this.age);
    }

}
obj.greeting();

// //constructor functions
// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.greeting = function(){
//         console.log("name : ",this.name);
//         console.log("age : ",this.age);
//     }
// }

// const person1 = new Person("John",30);
// console.log("person1 : ",person1);
// person1.greeting();

// const person2 = new Person("Jane",25);
// console.log("person2 : ",person2);
// person2.greeting();

// //updating individual objects
// person2.place = "Ernakulam";
// console.log("Person2.place : ",person2.place);

// Person.prototype.getMark = function(){
//     return this.mark;
// }

// console.log("Mark of person1 : ",person1.getMark());
// console.log("Mark of person2 : ",person2.getMark());


// }

// {

// let obj = {
//     name : "bmw",
//     color : "red",
//     greeting : function (){
//         console.log("name : ",this.name);
//         console.log("color : ",this.color);
//     }
// }
// console.log("obj : ",obj);
// obj.greeting();

// function Car(name,color){
//     this.name = name;
//     this.color = color;
//     this.greeting = function(){
//         console.log("name : ",this.name);
//         console.log("color : ",this.color);
//     }
// }

// const car1 = new Car("benz","black");
// console.log("Car1 : ",car1);
// car1.greeting();

// const car2 = new Car("Audi","red");
// console.log("Car2 : ",car2);
// car2.greeting();

// }


//Using Classes

class Car{
    name;
    color;
    year;

    constructor(name, color, year){
        this.name = name;
        this.color = color;
        this.year = year;
    }

    greeting(){
        console.log("name : ",this.name);
        console.log("color : ",this.color);
        console.log("year : ",this.year);
    }
}

let car1 = new Car("swift","red",2014);
console.log("car1  ",car1);
car1.greeting();

let car2 = new Car("Mustang","white",2000);
console.log("car2 : ",car2);
car2.greeting();

//new keyword is used to create a new object

{
class Animal{
    name;

    constructor(name){
        this.name = name;
    }

    walk(){
        console.log("Animal walking");
    }
}

class Dog extends Animal{
    nickName;

    constructor(name,nickName){
        super(name);//calls parent constructor
        this.nickName = nickName;
    }

    walk(){
        console.log("Dog walking...");
    }
}

let myAnimal = new Animal("Monkey");
console.log("myAnimal : ",myAnimal);
myAnimal.walk();

let myDog = new Dog("Parent of arjun","Arjun");
console.log("myDog : ",myDog);
myDog.walk();

}

//class car 
{

    class Car{
        name;
        color;
        year;
    
        constructor(name, color, year){
            this.name = name;
            this.color = color;
            this.year = year;
        }
    
        greeting(){
            console.log("name : ",this.name);
            console.log("color : ",this.color);
            console.log("year : ",this.year);
        }
    }

    class Racingcar extends Car{
        speed;

        constructor(name,color,year,speed){
            super(name,color,year);
            this.speed = speed;
        }

        greeting(){
            console.log("speed : ",this.speed);
        }
    }
    
    let car1 = new Car("swift","red",2014);
    console.log("car1  ",car1);
    car1.greeting();
    
    let car2 = new Car("Mustang","white",2000);
    console.log("car2 : ",car2);
    car2.greeting();

    let car3 = new Racingcar("ferrari","red",2008,250);
    console.log("car3 : ",car3);
    car3.greeting();

}


{

//Getters and Setters
class car{

    constructor (name) {
        this.name = name;
    }

    //without using setters and getters
    //  setColor(color) {
        // this.color = color;
    // }

    // getColor(){
    //     return this.color;
    // }


    //using getters and setters
    set setColor(color) {
        this.color = color;
    }

    get getColor() {
        return this.color;
    }

}

let myCar = new car("Benz");

//setting color
//myCar.setColor("Green"); //Without using setter
myCar.setColor = "Green"; //Using setter

console.log("myCar : ",myCar);

//Getting Color
//console.log("Color of myCar : ",myCar.getColor()); //Without using getter
console.log("Color of myCar : ",myCar.color); //Using getter

}

{

class Button {

    constructor(content) {
        this.button = document.createElement('button');
        this.button.innerHTML = content;
        document.body.appendChild(this.button);
    }

    set width(width) {
        this.button.style.width = width + "px";
    }

    set height(height) {
        this.button.style.height = height + "px";
    }

    get width(){
        return this.button.style.width;
    }

    get height(){
        return this.button.style.height;
    }

    onClick(fn) {
        this.button.onclick = fn;
    }
}

let myButton = new Button('click here');
console.log("myButton : ",myButton);

myButton.width = 200;
myButton.height = 50;

console.log("Button width : ",myButton.width);
console.log("Button height : ",myButton.height);

myButton.onClick(function () {
    console.log("My button clicked...");
});


class yellowButton extends Button{

    //Method overriding
    onClick(fn) {
        this.button.onclick = function () {
            this.button.style.background = "yellow";
            fn();
        }.bind(this);
    }
}

let myYellowButton = new yellowButton("Yellow Button");
console.log("myYellowButton : ",myYellowButton);


myYellowButton.height = 50;
myYellowButton.width = 200;

console.log("myYellowButton width : ",myYellowButton.width);
console.log("myYellowButton height : ",myYellowButton.height);

myYellowButton.onClick(function (){
    console.log("myYellowButton clicked");
});


}


//class paragraph
{

class Paragraph {

    constructor(content) {
    this.paragraph = document.createElement('p');
    this.paragraph.innerHTML = content;
    document.body.appendChild(this.paragraph);
    }

    set margin(margin) {
        this.paragraph.style.margin = margin + "px";
    }

    set padding(padding) {
        this.paragraph.style.padding = padding + "px";
    }

    set fontSize(fontSize) {
        this.paragraph.style.fontSize = fontSize + "px";
    } 

    set lineHeight(lineHeight) {
        this.paragraph.style.lineHeight = lineHeight + "px";
    }


}


let myParagraph = new Paragraph("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
// console.log("myParagraph : ",myParagraph);


myParagraph.margin = 30;
myParagraph.padding = 20;
myParagraph.fontSize = 20;
myParagraph.lineHeight = 50;


class Paragraph2 extends Paragraph {

    constructor(content,btncontent) {
        super(content);
        this.button = document.createElement('button');
        this.button.innerHTML = btncontent;
        document.body.appendChild(this.button);
        
    }

    set fontColor(fontColor) {
        this.paragraph.style.color = fontColor;
    }

    set background(background) {
        this.paragraph.style.background = background;
    }
}

let myButton = new Paragraph2("click me");

let newParagraph = new Paragraph2("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

newParagraph.margin = 40;
newParagraph.padding = 30;
newParagraph.fontSize = 30;
newParagraph.lineHeight = 60;
newParagraph.fontColor = "red";
newParagraph.background = "yellow"; 


}