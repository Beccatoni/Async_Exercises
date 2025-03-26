// Create a simple callback function that multiplies two numbers and then 
// calls a callback with the result.

const callbackFun = (a,b, callback) =>{
   let product = a*b;
   callback(product)
}

let exCallback = (p) =>{
    console.log(p);
}

callbackFun(3,4, exCallback);