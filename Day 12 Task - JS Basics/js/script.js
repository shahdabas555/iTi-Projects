window.alert("Hello World From JS File!")

var num1 = window.prompt("Enter first num");
var num2 = window.prompt("Enter second num");
var result = Number(num1) + Number(num2);
console.log(result);

console.log("This is log");
console.info("This is an information");
console.error("This is an error");
console.warn("This is an warning");

var firstName = "shahd";
var lastName = "Abas";
console.log(firstName.toUpperCase());
console.log(firstName.slice(0, 3) + lastName.charAt(0));

console.log("JavaScript".length);

var num1 = 10;
var num2 = "5";
var resultNum = num1 * parseInt(num2);
console.log(resultNum);

var str1 = "Hello";
var str2 = "World";
var combinedString = str1.concat(" ", str2);
console.log(combinedString);

//Data Types
var num = 10;
var firstname = "Shahd";
var x;
var lastname = null;
var y = true;
console.log(typeof num);
console.log(typeof firstname);
console.log(typeof x);
console.log(typeof lastname);
console.log(typeof y);

//Mathematical operations 
var x = 10;
var y = 5;
console.log(x + y);
console.log(x - y);
console.log(x % y);
console.log(x / y);
console.log(x * y)

//Comparison Operators
var x = 10;
var y = 5;

console.log("x = ", x);
console.log("y = ", y);

console.log("x > y", x > y);
console.log("x >= y", x >= y);

console.log("x < y", x < y);
console.log("x <= y", x <= y);

console.log("x == y", x == y);
console.log("x != y", x != y);

console.log("x !== y", x !== y);
console.log("x === y", x === y);

//Logical Operators
//AND
console.log("ali" && "ahmed");
console.log(true && true);
console.log(true && 0);
console.log(undefined && "ahmed");
console.log(true && null);
console.log(true && NaN);
console.log(true && false);
console.log("" && true);
//OR
console.log(true || true);
console.log(true || false);
console.log(false || false);
//NOT
console.log(!true);
console.log(!false);

//IF Statement && IF Else Statement && Nested IF Statement
var x = 5;
if(x > 0) {
    console.log("Num Is Postive");
    if(x % 2 == 0) {
        console.log("Num Is Even");
    } else {
        console.log("Num Is Odd");
    }
} else if(x < 0) {
    console.log("Num Is Negative");   
} else if(x == 0) {
    console.log("Num Is Zero");
}

//Ternary Operator
var num = 2;
var result = num > 0 ? "Postive" : "Negative";
console.log(result);

//Switch Statement
var grade = 90;

switch(true) {
    case (grade < 0 || grade > 100):
        console.log("Invalid Grade");
        break;
    case (grade >= 50 && grade < 60):
        console.log("D");
        break;
    case (grade >= 60 && grade < 75):
        console.log("c");
        break;
    case (grade >= 75 && grade < 85):
        console.log("B");
        break;
    case (grade >= 85 && grade <= 100):
        console.log("A");
        break;
    default:
        console.log("F");         
}

//Loops
//for loop
for(var i = 0 ; i < 5 ; i++) {
    console.log("i = ", i);   
}
//While Loop
var i = 1;
while(i <= 5) {
    console.log("Hello");
    i++;
}
//Do_While Loop
var i = 1;
do {
    console.log("i = ", i);
    i++;
} while(i <= 8)

//Functions
//Regular Function
function findMax(num) {
    var max = 1;
    if(num > max) {
        max = num;
        return max;  
    }
}
var max = findMax(5);
console.log("max = ", max);

//Self-Ivovked Function
(
    function() {
        var x = 20;
        console.log("x = ", x);
    }
)();

//Arrow Function 
var sum = (x, y) => x + y;
console.log(sum(30, 10));

//Hoisting
function main() {
    function bar() { 
        return 3; 
    }
    function bar() { 
        return 8; 
    }
    return bar();
}
console.log(main());//8

function main() {
    var bar = function() { 
        return 3; 
    }
    return bar();
    var bar = function () { 
        return 8; 
    }
}
console.log(main());//3

function main() {
    return bar();
    function bar() { 
        return 3; 
    }
    var bar = function () { 
        return 8; 
    }
}
console.log(main());//3

//Objects
var person = {
    fullName: "Shahd Abas",
    age: 19,
    gender: "Fmale",
    isStudent: true,
    contactInfo: {
        email: "me@gmail.com",
        phone: 123-456-789,
        address: {
            street: "Muizz Street"
        }
    }
};
console.log(person.fullName);
console.log(person.contactInfo.email);
console.log(person.contactInfo.address.street);