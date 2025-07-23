"use strict"

// Create Element
let div = document.createElement("div");
let p = document.createElement("p");
document.body.appendChild(div);
document.body.appendChild(p);
div.setAttribute("class", "container");
p.setAttribute("class", "content");
p.setAttribute("id", "item");

// Add some text content
let text = document.createTextNode("Hello World");
div.appendChild(text);
text = document.createTextNode("I Love Web And Design");
p.appendChild(text);

// Remove an element from the page
document.querySelector(".del").remove();

// To add a new class to an existing element
let headingElement = document.querySelector("h1");
headingElement.classList.add("bg-danger");
headingElement.classList.add("w-50");
headingElement.classList.add("demo");

// To remove an existing class
headingElement.classList.remove("demo");

// To replace an existnig class
headingElement.classList.replace("bg-danger", "bg-info");

// To check on a class
let check = headingElement.classList.contains("demo");
console.log(check);

//------------------------------------------------------------------------------------------------------
// Let & Const

// Scope
// if(true) {
//     let x = 10; //Local
// }
// console.log(x); // undefined

// re-declare
let x = 30;
x = 50;
console.log(x);

// hoisting
// console.log(y); // cannot access y
// let y = "Shahd"; 

//------------------------------------------------------------------------------------------------------
// default parameters
// template literal
function person(userName = "user", age = "unKnown", hobby = "web") {
    console.log(`Hello ${userName} And My Age Is ${age} And My Hobby Is ${hobby}`);
}
person`Shahd ${19}`;

// To write multi-line values in your code
let multiLine = `I am Shahd
19 years
Front-End Developer`
console.log(multiLine);

//------------------------------------------------------------------------------------------------------
// spread operator
let nums = [10, 20, 30, 40, 50, 60];
console.log(nums);
console.log(...nums);

function calc(...param) {
    // param [10, 20, 30]
    console.log(param);
}
calc(10, 20, 30)

//------------------------------------------------------------------------------------------------------
// destructing
let user = {
    fullName: "Shahd Abas",
    age: 19,
    gender: "fmale",
    contactInfo: {
        email: "me@gmail.com"
    }
}
let {fullName: userName, age: userAge, contactInfo: {email:userEmail}} = user;
console.log(userName);
console.log(userAge);
console.log(userEmail);

let newArray = ["Ziad", "Shahd", "Ahmed", "Ali"];
let [var1, var2, var3, var4] = newArray;
console.log(newArray);

//------------------------------------------------------------------------------------------------------
// this
function test() {
    console.log(this); 
}
window.test();

let element = document.querySelector("h1");
element.addEventListener("click", function() {
    console.log(this);
})

//------------------------------------------------------------------------------------------------------
// Loops
// For of
nums = [10, 20, 30, 40, 50];
for(let i of nums) {
    console.log(i);
}
console.log("-------------------------------------");

// Array of Object
let users = [
    {fName: "Mai", age: 20, salary: 5000},
    {fName: "Mona", age: 23, salary: 8000},
    {fName: "Rawan", age: 25, salary: 10000}
]
for(let user of users) {
    let {fName, age} = user;
    console.log(fName);
    console.log(age);
}
console.log("--------------------------------------");

// For In
user = {
    userName: "Shahd",
    hobby: "web and Design",
    job: "Developer"
}
for(let key in user) {
    console.log(key);
    console.log(user[key]);
}
console.log("-------------------------------------");

//------------------------------------------------------------------------------------------------------
// Map
nums = [10, 20, 30, 40, 50];
let result = nums.map( (num) => num + 50);
console.log(result);

users = [
    {fName: "Mai", age: 20, salary: 5000},
    {fName: "Mona", age: 23, salary: 8000},
    {fName: "Rawan", age: 25, salary: 10000}
]
let userNames = users.map( (user) => user.fName);
for(let user of userNames) {
    console.log(user);  
}
console.log("------------------------------------");

// Filter
nums = [10, 20, 30, 40, 50];
let newNums = nums.filter( (num) => num >= 20);
console.log(newNums);

users = [
    {fName: "Mai", age: 20, salary: 5000},
    {fName: "Mona", age: 23, salary: 8000},
    {fName: "Rawan", age: 25, salary: 10000}
]
let newUsers = users.filter( (user) => user.age > 20);
console.log(newUsers);
let usersName = users.filter( (user) => user.fName.includes("R"))
console.log(usersName);

// Find
users = [
    {fName: "Mai", age: 20, salary: 5000},
    {fName: "Mona", age: 23, salary: 8000},
    {fName: "Rawan", age: 25, salary: 10000}
]
let userInfo = users.find( (user) => user.fName == "Rawan");
console.log(userInfo);

let index = users.findIndex( (user) => user.fName == "Rawan" && user.age == 25);
console.log(index);

//------------------------------------------------------------------------------------------------------
// click
element.addEventListener("click", function() {
    console.log("test-1");
})

// double click
element.addEventListener("dblclick", function() {
    console.log("test-2");
})

// right click
document.addEventListener("contextmenu", function(e) {
    console.log("test-3");
    e.preventDefault(); 
})

// mouse move
document.addEventListener("mousemove", function() {
    console.log("Hello");
})

// mouse when you click down on the button and still clicking
document.addEventListener("mousedown", function() {
    console.log("User clicked mouse down");
})

// mouse when you leave the click button
document.addEventListener("mouseup", function() {
    console.log("User left the mouse up");
})

// user clicked the button in the past and finished
document.addEventListener("click", function() {
    console.log("User click the mouse");
})

// when the mouse pointer enter the viewport
document.addEventListener("mouseenter", function() {
    console.log("the mouse has entered the space");
})

// when the mouse pointer left the viewport
document.addEventListener("mouseleave", function() {
    console.log("the mouse has left the space");
})

// drag the image over the page
let img = document.querySelector("img");
img.addEventListener("drag", function() {
    console.log("the image has been moved");
})

// بتشتغل مع جميع انواع زراير الكيبورد
document.addEventListener("keydown", function(e) {
    console.log("The user used the keyboard");
    console.log(e.key);
})

// بتشتغل مع الزراير المستخدمه في الكتابة
document.addEventListener("keypress", function() {
    console.log("The user used the keyboard");
})

// بيشتغل لما اليوزر يشيل ايده من على الزرار
document.addEventListener("keyup", function() {
    console.log("The user left the keyboard button");
})

// To disable F12 key
document.addEventListener("keydown", function(e) {
    console.log("User clicked on F12 Key");
    if(e.key == 'F12') {
        e.preventDefault();
    }
})

// keybind the keys to a custom actions
document.addEventListener("keydown", function(e) {
    if(e.key == 'm') {
        window.alert("The invoice has been saved!")
    }
})