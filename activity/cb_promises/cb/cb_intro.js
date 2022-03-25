const fs = require("fs");

// callBack fxn -> any func that is passes as an argument
// to another func.

/* console.log("before");
function printFirstName(firstName, cb, cb2){
    console.log(firstName);
    cb(1);
    cb2(20);
}


function cb(){
    console.log("I am cb", num);
}

function cb2(){
    console.log("I am cb2", num);
}

printFirstName("a", cb, cb2);
console.log("After");

//      *** OP ***
       before
       a
       I am cb 1
       I am cb2 20
       After
// synchronous output
*/


// we cannot predefine the order of the output when using async function in Node


