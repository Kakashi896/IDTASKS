console.log('Practice set 2');

// Quetion 1 ----------------------->
//use logical operator to find whether the age of person lies b/w 10 and 20

let age = prompt("write your age here");
age = Number.parseInt(age);
if(age>10 && age<=20){
    console.log("your age lies between 10 and 20");
}
else{
    console.log("your age does not lies between 10 and 20");
}

// Quetion 2 ----------------------->
// Demostrate a swithch case statement

let age1 = prompt("write your age here");
switch(age1){
    case '12':
        console.log("your age is 12");
        break;
    case '13':
        console.log("your age is 13");
        break;
    case '14':
        console.log("your age is 14");
        break;
    case '14':
        console.log("your age is 14");
        break;
    case '15':
        console.log("your age is 15");
        break;
    default:
        console.log("Your age is not special");
}  

// Quetion 3 ----------------------->
// Write a js program to find a no. is divisible  by 2 and 3 or not

let num = prompt("write your age here");
num = Number.parseInt(age);
if(num%2 ==0 && num%3 ==0){
    console.log("your no. is divisible by 2 and 3");
}
else{
    console.log("your no. is not divisible by 2 and 3");
}



// Quetion 4 ----------------------->
// Write a js program to find a no. is divisible  by either 2 OR 3 or not

let num1 = prompt("write your age here");
num1 = Number.parseInt(age);
if(num%2 ==0 || num%3 ==0){
    console.log("your no. is divisible by 2 and 3");
}
else{
    console.log("your no. is not divisible by 2 and 3");
}

// Quetion 5 ----------------------->
// Write a js program to print you can drive or you cannot drive on  the basis of your age.using ternary operator

let age3 = prompt( "type your age");
let p = age3> 18 ? "You can drive" : "you cannot drive";
console.log(p);
