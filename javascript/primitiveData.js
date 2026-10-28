// there are 7 primitive data types in js 
// 1. Number
// 2. Boolean
// 3. String
// 4. null
// 5. undefined
// 6. BigInt
// 7. Symbol
//8. NaN it is optional Not a number

//1. Number

// let a =10;
// let b =-10;
// let c = 10.11;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// 2. boolean
// let x = true;
// console.log(x);// true
// console.log(typeof x);// boolean

// 3. String 
// let x = "hello js";
// let y = 'hello js';
// let z = `hello js`;
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// 4. null
// let x = null;
// console.log(typeof x);// object

// 5. undefined
// let x;
// console.log(x);
// console.log(typeof x);

// 6. Symbol
// let x = Symbol(10);
// console.log(x);
// let y = Symbol(10);
// console.log(x);
// console.log(x==y); // false

//7. BigInteger
// let a = 12354678976534563456789345678904n;
// let b = 23453;
// console.log(a);
// console.log(typeof a);
// console.log(b);
// console.log(typeof b);
// let y = Number.MAX_SAFE_INTEGER;
// console.log(y);

//8. NaN(Not a Number)
// let x = 1000;
// let y = "HI";

// console.log(x+y); 
// console.log(typeof (x-y));
// console.log(x/y);
// console.log(x*y);

// let a = 10;
// let b = "10";
// console.log(a*b);

// let x = 100;
// let y = 100;
// console.log(x == y);// true 

// let x = 100;
// let y = "100";
// console.log(x == y);// true looselly typed == content data
// console.log(x === y);// false stricktly typed === data+datatype 

// Conditional statement

// if(true){
//     console.log("yes");  
// }
// else{
//     console.log("No");
    
// }

// let x = 10;
// if(x>0){
//     console.log("yes it is greater");  
// }
// else{
//     console.log("Noas");
    
// }

// let x = -10;
// if(x>0){
//     console.log("yes it is greater");  
// }
// else{
//     console.log("No");
    
// }

// Even number logic
// let x = 10;
// if(x%2===0){
//     console.log("yes Even") 
// }
// else{
//     console.log("Not even")
    
// }


// Browser Methods
//1. alert
// alert("invalid user");

//2. confirm
// confirm("is logout");
// let x = confirm("is logout");
// console.log(x);

//3. prompt
// let  x = prompt("Enter a name :");
// console.log(x);

// let username  = prompt("Enter a username ");
// let password = prompt("Enter a password ");
// if(username  && password ){
//  alert("login sucess !!!");
// }
// else {
//     alert("login failed enter username and password !!!");
// }

// let x = prompt("Enter a number :");
// let y = Number(x);
// console.log("x: "+ x);
// console.log("y: "+ y);
// console.log("x type: "+ typeof x);
// console.log("y type: "+ typeof y);


let x = prompt("Enter a number1 :");
let y = prompt("Enter a number2 :");
let xx = Number(x);
let yy = Number(y);
console.log(xx+yy);
console.log(xx-yy);
console.log(xx*yy);
console.log(xx/yy);






