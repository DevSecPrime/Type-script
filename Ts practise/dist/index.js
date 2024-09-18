"use strict";
// console.log("Hello, Its aryan rana");
// function sum(a: number, b: number): number {
//     return a + b;
// }
// console.log("sum is", sum(10, 20))
//unknown and any from typescript
let myFavNum = 13;
myFavNum = "I am a string";
myFavNum = true;
//unknow
let myFavNum2 = 13;
myFavNum2 = "I am a string";
myFavNum2 = true;
if (typeof myFavNum2 === "number") {
    console.log("I am a number :", myFavNum2 + 1);
}
else if (typeof myFavNum2 === "string") {
    console.log("I am a string", myFavNum2);
}
else if (typeof myFavNum2 === "boolean") {
    console.log("I am a boolean", myFavNum2);
}
console.log("hiii");
//function invocation \
function info(name, id) {
    ///parameters when u creatre a new function 
    console.log(`My anme is ${name} and my id is ${id}`);
}
info("Aryan", 1); //agrguments -- which are pased when u call the function 
///find palindrom with name
const isPalindrome = (palin) => {
    let myplalin = palin.split("").reverse().join("");
    return myplalin === palin;
};
console.log(isPalindrome("2112"));
//Arrays in Type script 
const names = new Array("aryan", "rana", "prime"); ///first way to definr an array ----- constructor method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; ///second way to define an array ---- normal way
const numbers1 = Array.of(1, 2, 3, 4, 5, 6, 7); //third way to define an array
console.log("Names array :", names);
console.log("number array :", numbers);
console.log("Numbers1 array :", numbers1);
///array operation in ts
const fruits = ["apple", "orange", "banana", "cherry"];
console.log(fruits);
const updatedFruits = fruits.push("mango");
console.log("New item is added in fruits:", updatedFruits);
console.log("new items in fruits:", fruits);
const remove = fruits.pop();
console.log(fruits);
//looop in tsx
console.log("\n \n For loop :-");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// for of loop
//for of will return value
console.log("\n \nFor of loop:-");
for (const fruit of fruits) {
    console.log(fruit);
}
///for in looop
///for in will return index
console.log("\n \nFor in loop:-");
for (const fruit in fruits) {
    console.log(fruit);
}
//for each loop
console.log("\n \nfor each loop");
fruits.forEach((fruitVal) => {
    console.log(fruitVal);
});
//array methods in type script 
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiByTwo = myNumbers.map((num) => num * 2);
console.log("Multiplied by two:", multiByTwo);
const greaterThanThree = multiByTwo.filter((num) => num > 3);
console.log("Greater than three:", greaterThanThree);
const student1 = {
    name: "Aryan",
    age: 22,
    greet: (country) => `Hello, my name is ${student1.name} and my age is ${student1.age} & I am from ${country}`
};
const introduction = (student1) => {
    const { name, age } = student1;
    return `Hello, my name is ${name} and my age is ${age}`;
};
// console.log("introduction:-", introduction(student1));
console.log(student1.greet("India"));
///enum in type script 
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "Aryan",
    email: "primr789@gmail.com",
    password: "1234",
    role: Roles.admin
};
const user2 = {
    name: "Aryan",
    email: "prime789@gmail.com",
    password: "1234",
    role: Roles.user
};
const isAdmin = (user) => {
    const { name, email, role } = user;
    return role === "admin" ? `${name}:${email} is allowed to edit the website.` : `${email} is not allowed to edit the website.`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
const displayInfo = (person) => {
    const [name, age, license] = person;
    console.log(`Name: ${name}, age: ${age}, Driver's license: ${license ? "YES" : "NO"}`);
};
const person1 = ["Aryan Rana", 22, true]; // Use : PersonInfo instead of .PersonInfo
const person2 = ["Arjun Rana", 22, false];
// Calling the displayInfo function
console.log(person1);
// person1.push("prime");
console.log("person1", person1);
//UNION and NTERSECTION in TypeScript
const userInput = (value) => {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("Some thing went wrong.");
    }
};
console.log(userInput(2));
console.log(userInput("aryan rana"));
//GENEREIC IN TYPESCRIPT
function logAndReturn(value) {
    return value;
}
const numberResult = logAndReturn(7);
console.log("numberResult", numberResult);
const stringResult = logAndReturn("Hello!, Aryan..");
console.log("stringResult", stringResult);
const boolResult = logAndReturn(true);
console.log("boolResult", boolResult);
///Function overloading in TS
function information(a, b) {
    console.log("Type of a :-", typeof a);
    console.log("Type of a :-", typeof b);
}
const result1 = information(5, "aryan");
const result2 = information(6, false);
;
const product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
const calculateTotalPrice = (product) => {
    const { price, quantity } = product;
    return price * quantity;
};
console.log(calculateTotalPrice(product1));
