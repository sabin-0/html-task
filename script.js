// console.log("from external")
// console.log(window);

// var i;
// i="hello";

// var a=10;

// console.log("i :",i);
// console.log("a :",a);


// //DATATYPES

// var str="This is a string";
// console.log("str =",str);
// console .log("Type of str =",typeof str);

// var num=20;
// console.log("num =",num);
// console.log("Type of num =",typeof num);

// var bool=true;
// console.log("bool =",bool);
// console.log("Type of bool =",typeof bool);

// var a=undefined;
// console.log("a =",a);
// console.log("Type of a =",typeof a);

// var b=null;
// console.log("b =",b);
// console.log("Type of b =",typeof b);

// document.write("This is from javascript\n");


// //string methods

// str="hello world";
// console.log("string length =",str.length);
// console.log("Uppercase :",str.toLocaleUpperCase());
// console.log("Lowercase :",str.toLocaleLowerCase());
// console.log(str.toUpperCase().length);
// console.log(str.toUpperCase().toLocaleLowerCase().toLocaleLowerCase().toUpperCase());

// console.log(str.trim());
// console.log("Trimmed Length :",str.trim().length);
// console.log(str.trimEnd());
// console.log("Trimmed length at the end :",str.trimEnd().length);
// console.log(str.trimStart());
// console.log("Trimmed length at the start :",str.trimStart().length);

// console.log("Substring :",str.substring(2,5));
// console.log("Replace :",str.replace("hebllo","goodbye"));
// console.log("starts with :",str.startsWith(" hello"));
// console.log("Ends with :",str.endsWith("world "));

// console.log("split :",str.split(" "));//converts string into an array
// console.log("join :",str.split(" ").join());//converts array back into a string

// //slice()
// var text="luffy ,zoro, sanji";
// var sliced=text.slice(7,11);
// console.log("original =",text);
// console.log("sliced =",sliced);

// //replaceAll()
// var text="I love iron man. Iron Man is very noble. Iron Man is strong";
// console.log("original =",text);
// text=text.replaceAll('iron man','captain america');
// text=text.replaceAll('Iron Man','Captain America');
// console.log("replaced =",text);

// //concat
// var text1="Hey";
// var text2="There!";
// var text3=text1.concat(" ",text2);
// console.log("text1 =",text1);
// console.log("text2 =",text2);
// console.log("concatenated text =",text3);

// //padStart()
// var text="ah!";
// console.log("original =",text);
// s=text.padStart(5,"a");
// console.log("padding at start =",s);

// //padEnd()
// var text="ah";
// console.log("original =",text);
// s=text.padEnd(5,"h");
// console.log("padding at end =",s);

// //charAt()
// var text="BoomBox";
// console.log("text =",text);
// console.log("extracted =",text.charAt(4));

// //charCodeAt()
// var text="BoomBox";
// console.log("text =",text);
// console.log("extracted unicode =",text.charCodeAt(4));

// //property access
// var text="BoomBox";
// console.log("text =",text);
// console.log("text[0]=",text[0]);


//arrays

// var arr=[1,2,3,"sun","moon",true,false,null,undefined];
// console.log("array =",arr);
// console.log("type of arr =",typeof arr);
// console.log("length of array :",arr.length);
// console.log("join :",arr.join(' '));
// console.log("index of moon :",arr.indexOf("moon"));
// console.log("push element :",arr.push("end"),"\narray :",arr);
// console.log("unshift element :",arr.unshift(0),"\narray :",arr);
// console.log("pop element :",arr.pop(),"\narray :",arr);
// console.log("shift element :",arr.shift(),"\narray :",arr);

//replacing elements
// arr[0]="a";
// arr[3]="mars";
// console.log("array :",arr);

//splice
// arr.splice(7,2);
// console.log("array :",arr);

// arr.splice(3,0,"b");
// console.log("array :",arr);

//objects
// var obj = {
//     firstname : "john",
//     lastname : "wick",
//     age : 45,
//     german : true,
//     hobbies : ["driving","shooting","training"]
// };
// console.log("obj :",obj);
// console.log("firstname :",obj.firstname,"\nage :",obj.age);
// console.log("hobbies :",obj.hobbies);
// var obj = {
    //     firstname : "john",
    //     lastname : "wick",
    //     age : 45,
    //     german : true,
    //     hobbies : ["driving","shooting","training"]
    // };
    // console.log("obj :",obj);
    // console.log("firstname :",obj.firstname,"\nage :",obj.age);
    // console.log("hobbies :",obj.hobbies);
    
    // obj.age=50;
    // console.log("obj :",obj);
    
    // obj.gun="glock";
    // console.log("obj :",obj);
// obj.age=50;
// console.log("obj :",obj);

// obj.gun="glock";
// console.log("obj :",obj);
// var obj = {
    //     firstname : "john",
    //     lastname : "wick",
    //     age : 45,
    //     german : true,
    //     hobbies : ["driving","shooting","training"]
    // };
    // console.log("obj :",obj);
    // console.log("firstname :",obj.firstname,"\nage :",obj.age);
    // console.log("hobbies :",obj.hobbies);
    
    // obj.age=50;
    // console.log("obj :",obj);
    
    // obj.gun="glock";
    // console.log("obj :",obj);


//TYPES OF FUNCTIONS

//named functions
function printHelloworld() {
    console.log("Hello World");
};

printHelloworld();

//Anonymous function
const printHai = function(){
    console.log("hai");
};

printHai();

//Arrow function
const printHey = () => {
    console.log("Hey");
};


printHey();

//callback function
function printHai(a){
    a();
}

printHelloworld(function(){
    console.log("hello");
});


//EventListener

let btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
    // alert("button clicked");
});

btn.addEventListener('mouseover',()=>{
    console.log("mouseover event");
});

btn.addEventListener('mouseout',()=>{
    console.log("mouseout event");
});

btn.addEventListener('mousedown',()=>{
    console.log("mousedown event");
});

btn.addEventListener('mouseup',()=>{
    console.log("mouseup event");
});

btn.addEventListener('mousemove',()=>{
    console.log("mousemove event");
});

let inp=document.getElementById('inp');

inp.addEventListener('keydown',()=>{
    console.log("Keydown event");
});

inp.addEventListener('keyup',()=>{
    console.log("keyup event");
});

//math functions
console.log(Math.sqrt(16));
console.log(Math.round(10.4));
console.log(Math.round(10.5));
console.log(Math.ceil(10.2));
console.log(Math.ceil(10.8));
console.log(Math.floor(10.2));
console.log(Math.floor(10.8));
console.log(Math.abs(-80));
console.log(Math.abs(90));
console.log(Math.PI);
console.log(Math.max(45,76,34));
console.log(Math.min(45,76,34));
console.log(Math.pow(2,6));












