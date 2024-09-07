console.log('Practice set 5');

// Quetion 1 ----------------------->
// Create array of no. and take input from user  to add no. to this array

// const arr = [1,2,3,5,9,7];
// console.log("Current array " + arr);
// let a = prompt("Enter a number please")
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);


// Quetion 2 ----------------------->
// keep adding no. to the array in arr until 0 is added to the array

// const arr = [1, 2, 3, 5, 9, 7];
// let a;
// do {
//     console.log("Current array " + arr);
//     a = prompt("Enter a number please")
//     a = Number.parseInt(a);
//     arr.push(a);
// }while (a != 0);
// console.log(arr);


// Quetion 3 ----------------------->
// filter for numbers divisible by 10 from a given array

// const arr = [10, 2, 30, 7, 150, 80];
// let b = arr.filter((x)=>{
// return x%10 == 0;
// })
// console.log(b);


// Quetion 4 ----------------------->
// Create an array of square of given no.

// const arr = [10, 2, 30, 7, 150, 80];
// let b = arr.map((value)=>{
// return value * value;
// })
// console.log(b);


// Quetion 5 ----------------------->
// use reduce to calculate factorial of a given no.from  array of first n natural no.

const arr = [1, 2, 3, 4, 5, 6];
let b = arr.reduce((x1, x2)=>{
return x1 * x2;
})
console.log(b);
