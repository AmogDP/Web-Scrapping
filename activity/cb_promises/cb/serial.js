const fs = require("fs");

console.log("Before");
fs.readFile("file1.txt",cb);

function cb(error,data){
    if(error){
        return ;
    }else{
        console.log(data+" ");
        fs.readFile("file2.txt",cb2);
    }
}

function cb2(error,data){
    if(error){
        return ;
    }else{
        console.log(data+"");
        fs.readFile("file3.txt",cb3);
    }
}

function cb3(error,data){
    if(error){
        return;
    }else{
        console.log(data+" ");
    }
}

console.log("After");

/*
Example - We are downloading a movie, 
we cannot play the video while being downloaded
here we use serial behaviour of async
*/
