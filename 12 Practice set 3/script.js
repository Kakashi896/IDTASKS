console.log("PRACTICE SET 3");

// Quetion 1 ------------------------------------------>
// write a program to print ,arks of students  in an object using for loop 

// let marks = {
//     harry:60,
//     Akshat:90,
//     hari:50,
//     suri:40,
//     muri:70
// }
// for(let i = 0; i<Object.keys(marks).length; i++){
//      console.log("the marks of " + Object.keys(marks)[i] + " are " +  marks[Object.keys(marks)[i]]);

// }

// Quetion 2 ------------------------------------------>
// repeat quetion 1 using for in loop

// for (let key in marks){
//     console.log("The marks of " + key + " are "  + marks[key]);
// }

// Quetion 3 ------------------------------------------>
// number guessing game

// let cn =4;
// let i;
// while(i!=cn){
// i = prompt("Guess a no. b/w  1 to 20");
// if(i != cn) alert(" oops wrong choice....try again");
// }
// console.log(" woohhoo.....You guess it right");

// Quetion 4 ------------------------------------------>
// write a function to find mean of five no.

const mean = (q,w,e,r) => {
  return(q+w+e+r)/4
}
console.log("the mean of starting four no. is " + mean(1,2,3,4)); 
