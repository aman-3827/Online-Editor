//DATA TYPE INTRODUTION


// Datatype varname = value, Strongly Typed language
// JS-> Lossely typed


// var age = 22;
// age = "Aman"
// console.log(age)


//var has glovbal scope
// if(true){
//     var age = 22;
//     console.log(age)
// }
// console.log(age)
// var age = 10;
// console.log(age)

//let has local scope
// if(true){
//     let a = 20;
//     console.log(a)
// }

//const
//scope -> local
//value are not re-assign
//const has to define a value at making(once created then not modified at all)

// const age = 22;
// age = "Aman"
// console.log(age)

// Data type
// numbers

// let num = 3.14
// let num1 = 10

// console.log(num+num1)

//string 
// we can concatinate the strings using "+"

// const firstName = "Aman"
// console.log(firstName)

//objects
// const person = {
//     firstName : 'Aman',
//     lastName : 'Kumar',
//     age : 21,

// }
// console.log(person.firstName)


//JS -> true = 1 || false = 0

//string '1' + '1'
// console.log('123' * '1')

//Typeof operator
// console.log(typeof('123' * 1))


//condtional statements
// const age = 90
// if(age >=18){
//     console.log("yes, you can vote")
// }
// else if(age >= 80){
//     console.log("yes, you are adult")
// }
// else{
//     console.log("NO, you cant vote")
// }


//ternary if else operator

// const age = 22;
// age >= 18 ? console.log("Yes") : console.log("No")  

// swtich case statement

// const option = 1;
// switch(option){
//     case 6: {
//         console.log("Namaste")
//     }
//     break
//     case 2: {
//         console.log("Hello")
//     }
//     break
//     default : 
//         console.log("Invalid option")
//     }
// }

//function

// function sayhello() {
//     console.log("hello");
// }

// sayhello();  //calling of function

// //using n inputs
// function addnumbers(){
//     let ans = 0;
//     for(let i=0;i<arguments.length;i++){
//         ans = ans + arguments[i];
//     }
//     return ans;
// }

// let result = addnumbers(1, 2, 3, 4, 5)
// console.log(result)


//1. syntax
// const sayhello = () => {
//     console.log("Hey");
// }
// // const add = (a, b) => {
// //     return a + b;
// // }
// const add = (a, b) => (a+b); // one liner arrow function
// console.log(add(23, 3))


//2. "arguments" keyword

// const  addnumbers = (...nums) => {
//     console.log(nums);
// }

// addnumbers(10, 20, 30, 40, 50)


//hoisting -- in hoiting arrow function will first define then call later but in normal function it can be call frist define later


// sayhello();   
// function sayhello(){
//     console.log("hey hello")
// }


//4. this keyword

// const obj = {
//     value: 20;
//     myfunction: function(){
//         console.log("value is" + this)
//     };
// };

// obj.myfunction();


//high order function and callback
// function add(a, b, cb) {
//     let result = a + b;
//     cb(result);
// }

// add(2, 4, function (val) {
//     console.log(val);
// })

//arrays in JS

// const students = ["Piyush", "Aman", "Rahul"];
// console.log(students[0]);
// students.push("Alexa")
// console.log(students);


//arrays are homogenous and even hetrogenrous

// const hetro = [1, true, "Aman"];
// hetro.push("Kumar")
// console.log(hetro)
// console.log(hetro.indexOf("Kumar"))

//high order function in JS

// const students = ["Piyush", "Aman", "Rahul"];
// function print(n){
//     console.log(n);
// }
// students.forEach(val => console.log(val + " garg")); //foreach does not retunn a null value
// students.map(val => console.log(val)) //map return a new array 

// const number = [1, 2, 3, 4, 5, 6, 7];
// let ans = number.findIndex(num => num == 2 * 2);
// console.log(ans)

// alert("Hey it a alert")

// const value = prompt("What is your name?", "Aman");   //input form user
// console.log("value")

// window.console.log("aman");

// document.title = "Test"  //use to change the title of document from js

// document.title = "New"

// document.write("this is hacked")

// const name = prompt("What is your name?");
// document.write("hello " + name);