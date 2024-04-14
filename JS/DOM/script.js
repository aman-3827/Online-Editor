//query selector
/*
selctor in css
- tag name 
- id #
- . class 
*/

// const div = document.querySelector("div");
// // body.innerHTML = "<h1>Hacked!!</h1>"   // use to change the html of a code
// div.innerHTML = "<h1>This is Hacked!!</h1>"  
// console.log(div.innerHTML);  // use to access the html

// const code = document.querySelector("code")
// code.innerHTML = "<h3>alert hello</h3>";
// console.log(code.innerHTML)


// const username = document.querySelector("#username")
// username.innerHTML = "<h3>John wick</h3>"

// const ele = document.getElementById('username');
// ele.innerHTML = "john wick"
// ele.classList.add('red-color', 'underline');  //us to add class using JS
// // console.log(ele.classList); // use to print the class using js
// // ele.classList.remove{'red-color'} // use to remove the class using js
// ele.style.textDecoration = "underline";
// ele.style.color = "Tomato"
// // console.log(ele.parentElement)  //use to show the parent element that it derived from
// ele.parentElement.style.background = "grey";
// // console.log(ele);
// ele.setAttribute("aria", "123")
// ele.remove()  //use to remove the element


// const elements = document.getElementsByClassName('block')  // it return elements and we can access it by using for loop
// for(let i = 0; i < elements.length; i++){
//     elements.item(i).style.background = "blue";
// }


//Event listners in JS


// function handlebuttonclick(){
//     console.log("Button is clicked")
// }
// const el = document.getElementById('clickbutton');  //fetch from Html

// el.onclick = function(){
//     console.log("hey, i am clicked")
// }
 

//do fucntionality using eventlistners


// function doSomething(){
//     console.log("I am clicked");
// }

// el.addEventListener('click', doSomething)

// const nameblock = document.getElementById('name-block')

//toggle effect


// el.addEventListener('click', () => {
//     if(nameblock.style.color == 'red'){
//         nameblock.style.color = 'blue'
//     }
//     else{
//         nameblock.style.color = 'red';
//     }})
    

// const allchildern = document.querySelector("body").children;

// for(let i = 0;i < allchildern.length; i++){
//     allchildern.item(i).addEventListener("click", () => allchildern.item(i).remove())
// }   // use to remove a perticular heading or paragraph with a button 



// const button = document.getElementById('clickbutton');
// const conatainer = document.getElementById('my-container');
// let count = 1;


// button.addEventListener('click', () => {
//     const el = document.createElement('h3');
//     el.innerText = count;
//     conatainer.appendChild(el);
//     count++;
// });



//Promises

// let a = 10
// let b = 20 
// let result = a+b;

// async function getdata(){
//     let resultfromserver =await fetch('https://jsonplaceholder.typicode.com/posts');
//     console.log(await resultfromserver.json());
// }  //async function are those fucntion which are run independently (does not run side by side to the current process)

// getdata();  //apreantly it return promise that when it complete it will display the fetched data

// fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
//     console.log(data);
// })
// .catch(error) => {
//     console.log(error);
// };

// console.log(result)


// async function getdata(){
//     let resultfromserver = await fetch('https://jsonplaceholder.typicode.com/posts');
//     console.log(await resultfromserver.json());
// }

// getdata();

// const button = document.getElementById('clickbutton');
// const uname = document.getElementById('input-usermame');

// button.addEventListener("click", {} => {
//     const value = uname.value;
//     console.log(value);
//     // localStorage.setItem("name", value);
// })