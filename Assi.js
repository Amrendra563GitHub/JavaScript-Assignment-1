// Question Number .1

function AddTwoNumbers(A, B) {
    return A + B;
}


const A = 2;  
const B = 5; 
const result = AddTwoNumbers(A, B);
console.log(result);                //  OutPut 7


 //  Question Number .2
function Is_Valid(C, D) {
    
    if (C < 10 && C > D) {
        return true;
    } else {
        return false;
    }
}


const C = 5; 
const D = 3;  
const resul = Is_Valid(C, D);
console.log(resul);               //  Output  true


// Question Number .3         

let e = 20;
let f = 30;

function CheckDivisibility(e, f) {
    
    if (e % 10 === 0 && f % 10 === 0) {
        console.log(true);
    }
    
    else if (e % 10 !== 0 && f % 10 !== 0) {
        console.log(false);
    }

    else {
        console.log(true);
    }
}

CheckDivisibility(); // Output False
         



// Question Number .4

 let G = 4567;

let H = G / 1000;

console.log(Math.floor(H));   // output 4 first disit


// Question Number .5


 let I = 4567;

let J = I % 10;

console.log(Math.floor(J)); // output 7 last digit


let K = 4567;

let L = K % 100;

console.log(Math.floor(L)); // out put 67 last two digit


// Find the Meddle Digit Number************************************

let M = 4567;

let N = (M % 1000) /10;

console.log(Math.floor(N)); // 56 meddle number Output 

// Q6.Find the remainder

let O = 9;
let P = 2;

let Q = O % P;

console.log(Q)


let R = 14;
let S = 3;

let T = R % S;

console.log(T)  //*************True ****************

// Question NUmber .7  Multiply two Numbers

let U = 2;
let V = 5;

let W = U * 5;

console.log(W) // OUTPUT 10 DIGIT

// Question Number .8 Marks Calculator

let X = 50;
let Y = 20;
let Z = 100;

let totalMarks = 50 + 20 + 100;
let averageMarks = (50 + 20 + 100) / 3;

console.log(averageMarks) // OUTPUT 56.666666666666664 
