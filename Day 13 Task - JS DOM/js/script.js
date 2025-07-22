//Objects
var person = {
    firstName: "Shahd",
    lastName: "Abas",
    gender: "fmale",
    age: 19,
    isStudent: true,
    hobby: function() {
        console.log("I Love Web And Design");
    },
    contactInfo: {
        email: "me@gmail.com"
    }
};
console.log(person.firstName, person["lastName"]);
console.log(person.contactInfo.email);
person.hobby();

person.course = "Front-End";
console.log(person);

console.log(typeof person);
var objectToString = JSON.stringify(person);
console.log(typeof objectToString);

//Array
var newArray = ["Shahd", "Ali", "Ahmed", "Mona", "Ziad"];

for(var i = 0 ; i < newArray.length ; i++) {
    console.log(newArray[i]);
    console.log("------------------------");
}

// Array Manipulation Methods
console.log(newArray.length);
console.log(newArray.sort());

console.log(newArray.push("Rawan"));
console.log(newArray);

console.log(newArray.unshift("Mariam"));
console.log(newArray);

console.log(newArray.pop());
console.log(newArray);

console.log(newArray.shift());
console.log(newArray);

console.log(newArray.splice(0, 2, "Hany", "Nour"));
console.log(newArray);

console.log(newArray.slice(1, 4));
console.log(newArray.reverse());
console.log(newArray.includes("Ziad"));
console.log(newArray.indexOf("Shahd"));
console.log(newArray.toString());

//String Method
var myString = "Web Design & Development";

console.log(myString.charAt(5));
console.log(myString[0]);
console.log(myString.slice(3));
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());
console.log(myString.concat(" And Fun"));
console.log(myString.split("&"));

//DOM
var element = document.getElementById("main");
console.log(element);

var elements = document.getElementsByClassName("item");
console.log(elements);

var element = document.getElementsByTagName("h2");
console.log(element);

var element = document.getElementsByName("test")
console.log(element);

var element = document.querySelector(".item");
console.log(element);

var elements = document.querySelectorAll(".item");
console.log(elements);

//---------------------------------------------
var paragraphs = document.querySelectorAll("p");
paragraphs.forEach(
    function(paragraph) {
        paragraph.style.backgroundColor = "tomato";
    }
)

//---------------------------------------------
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.forms);
console.log(document.images);

//---------------------------------------------
//Click
element.addEventListener("click", function() {
    console.log("Hello-1");
})

//double click
element.addEventListener("doublelClick", function() {
    console.log("Hello-2");
})

// right click
document.addEventListener("contextmenu", function(e) {
    console.log("Hello-3");
    e.preventDefault();
})

//----------------------------------------------
//mouse move
document.addEventListener("mousemove", function() {
    console.log("Hello-4");
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

//drag the image over the page
var myImage = document.querySelector("img");

myImage.addEventListener("drag", function() {
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
        window.alert("The invoice has been saved!");
    }
}) 

//--------------------------------------------
var h1 = document.querySelector("h1");
document.body.addEventListener("mouseenter", function () {
    h1.style.color = "white";
    h1.style.cssText = "background-color: teal";
})

//--------------------------------------------
var h2 = document.querySelector("h2");
h2.innerHTML = "Hello World!";

//--------------------------------------------
document.querySelector("h1").innerHTML = "Hello From JS!";