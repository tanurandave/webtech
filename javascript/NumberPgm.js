
//1.factorial 
// let n = Number(prompt("Enter a number:"));
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact = fact * i;
// }
// console.log("Factorial = " + fact);


//2.prime number 
// let n = Number(prompt("Enter a number:"));
// let count = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         count++;
//     }
// }
// if (n > 1 && count === 2) {
//     console.log("Prime Number");
// } else {
//     console.log("Not a Prime Number");
// }

//3.squre
// let n = Number(prompt("Enter a number:"));
// let square = n * n;
// console.log("Square = " + square);


//4.perfect number
// let n = Number(prompt("Enter a number:"));
// let sum = 0;
// for (let i = 1; i < n; i++) {
//     if (n % i === 0) {
//         sum = sum + i;
//     }
// }
// if (n > 0 && sum === n) {
//     console.log("Perfect Number");
// } else {
//     console.log("Not a Perfect Number");
// }


//5.Neon Number
// let n = Number(prompt("Enter a number:"));
// let square = n * n;
// let sum = 0;
// while (square > 0) {
//     let digit = square % 10;
//     sum = sum + digit;
//     square = Math.floor(square / 10);
// }
// if (sum === n) {
//     console.log("Neon Number");
// } else {
//     console.log("Not a Neon Number");
// }

//6.Armstrong number 

// let n = Number(prompt("Enter a number:"));
// let temp = n;
// let digits = 0;
// let sum = 0;
// let countTemp = n;
// while (countTemp > 0) {
//     digits++;
//     countTemp = Math.floor(countTemp / 10);
// }
// while (temp > 0) {
//     let digit = temp % 10;
//     sum = sum + Math.pow(digit, digits);
//     temp = Math.floor(temp / 10);
// }
// if (n >= 0 && sum === n) {
//     console.log("Armstrong Number");
// } else {
//     console.log("Not an Armstrong Number");
// }

//7.reverse number
// let n = Number(prompt("Enter a number:"));
// let temp = Math.abs(n);
// let rev = 0;
// while (temp > 0) {
//     let digit = temp % 10;
//     rev = rev * 10 + digit;
//     temp = Math.floor(temp / 10);
// }
// if (n < 0) {
//     rev = -rev;
// }
// console.log("Reverse = " + rev);


//8.palindrome

// let n = Number(prompt("Enter a number:"));
// let temp = n;
// let rev = 0;
// while (temp > 0) {
//     let digit = temp % 10;
//     rev = rev * 10 + digit;
//     temp = Math.floor(temp / 10);
// }
// if (n >= 0 && rev === n) {
//     console.log("Palindrome Number");
// } else {
//     console.log("Not a Palindrome Number");
// }


//9.sum of digit 

// let n = Number(prompt("Enter a number:"));
// let temp = Math.abs(n);
// let sum = 0;
// while (temp > 0) {
//     let digit = temp % 10;
//     sum = sum + digit;
//     temp = Math.floor(temp / 10);
// }
// console.log("Sum of Digits = " + sum);



//10.count of digit 
// let n = Number(prompt("Enter a number:"));
// let temp = Math.abs(n);
// let count = 0;
// if (temp === 0) {
//     count = 1;
// }
// while (temp > 0) {
//     count++;
//     temp = Math.floor(temp / 10);
// }
// console.log("Number of Digits = " + count);


//11.even odd
// let n = Number(prompt("Enter a number:"));
// if (n % 2 === 0) {
//     console.log("Even Number");
// } else {
//     console.log("Odd Number");
// }



//12.fabonacci
// let n = Number(prompt("Enter number of terms:"));
// let a = 0;
// let b = 1;
// for (let i = 1; i <= n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
// }


//13.strong number
// let n = Number(prompt("Enter a number:"));
// let temp = n;
// let sum = 0;
// while (temp > 0) {
//     let digit = temp % 10;
//     let fact = 1;

//     for (let i = 1; i <= digit; i++) {
//         fact = fact * i;
//     }
//     sum = sum + fact;
//     temp = Math.floor(temp / 10);
// }
// if (n >= 0 && sum === n) {
//     console.log("Strong Number");
// } else {
//     console.log("Not a Strong Number");
// }


//14.Automarfic number 

// let n = Number(prompt("Enter a number:"));
// let square = n * n;
// let temp = n;
// let divisor = 1;
// while (temp > 0) {
//     divisor = divisor * 10;
//     temp = Math.floor(temp / 10);
// }
// if (n >= 0 && square % divisor === n) {
//     console.log("Automorphic Number");
// } else {
//     console.log("Not an Automorphic Number");
// }

//15.spy number 
// let n = Number(prompt("Enter a number:"));
// let temp = n;
// let sum = 0;
// let product = 1;
// while (temp > 0) {
//     let digit = temp % 10;
//     sum = sum + digit;
//     product = product * digit;
//     temp = Math.floor(temp / 10);
// }
// if (n >= 0 && sum === product) {
//     console.log("Spy Number");
// } else {
//     console.log("Not a Spy Number");
// }

//16.multipication of digit 
// let n = Number(prompt("Enter a number:"));
// let temp = Math.abs(n);
// let product = 1;

// while (temp > 0) {
//     let digit = temp % 10;
//     product = product * digit;
//     temp = Math.floor(temp / 10);
// }

// console.log("Multiplication of digits = " + product);

//17. count vowels
// let str = prompt("Enter a string:");
// let i = 0;
// let count = 0;

// str = str.toLowerCase();

// while (i < str.length) {
//     let ch = str.charAt(i);

//     if (ch === 'a' || ch === 'e' || ch === 'i' ||
//         ch === 'o' || ch === 'u') {
//         count++;
//     }
//     i++;
// }
// console.log("Total vowels = " + count);


//18.check consonant or not 
// let ch = prompt("Enter a character:");
// ch = ch.toLowerCase();

// if (ch >= 'a' && ch <= 'z') {
//     if (ch === 'a' || ch === 'e' || ch === 'i' ||
//         ch === 'o' || ch === 'u') {
//         console.log("Vowel");
//     } else {
//         console.log("Consonant");
//     }
// } else {
//     console.log("Not an alphabet");
// }


//19.print ASCII value 
// let str = "abcdefghijklmnopqrstuvwxyz";
// let i = 0;

// while (i < str.length) {
//     console.log(str[i] + " = " + (i + 97));
//     i++;
// }

//20. Buzz number
let n= Number(prompt("Enter a number:"));
if(n%7==0 || n%10==7){
    console.log("Buzz number");
}
else {
    console.log("not buzz number");
}





