/*
const fs = require("fs");
console.log("Before");

let promise = fs.promises.readFile("file1.txt");

console.log(promise);

console.log("After");
*/
/*      *** OP ***
    Before
    Promise { <pending> }
    After
*/

const fs = require("fs");
console.log("Before");

let promise = fs.promises.readFile("file1.txt");

console.log(promise);

promise.then(function(data){
    console.log(data+" ");
})

promise.catch(function(error){
    console.log(error);
})

console.log("After")

/*  *** OP ***
    Before
    Promise { <pending> }
    After
    Hello Friend, this file 1  
*/

