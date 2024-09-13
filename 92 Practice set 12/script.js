// Quetion 1 ------------------------------------------------------>
// Write a javascript program to print this after two second of delay with traditional method and IIFE
// hello
// world

// const print = (()=>{
//     setTimeout(()=>{
//         console.log("Hello");
//     },2000)
                                     // Traditional method
//     setTimeout(()=>{
//         console.log("World");
//     },2000)
// })

// print();


// const a = async (text)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(text);
//         },2000)
//     })
// }                                   // IIFE

// (
//   async ()=>{
//     let text = await a("Hello")
//     console.log(text);
//     text = await a("World")
//     console.log(text);
//    }
// )()


// Quetion 2 ------------------------------------------------------>
// Write a js program to find average of two no. using sread syntax

// function sum(a, b, c){
//     return a + b + c;
// }
// let x = [1,2,3];
// console.log(sum(...x));


// Quetion 3 ------------------------------------------------------>
// Write a js which resolve a promise after n seconds the function takes n as the parameter use an  IIFE to execute the functions with diff values of n

// const a = async (text, n=2)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(text);
//         },1000 *n)

//     })
// }                                   // IIFE

// (
//   async ()=>{
//     let text = await a("I am resolving after 1 second")
//     console.log(text);
//     text = await a("i am resolving after 2 seconds")
//     console.log(text);
//    }
// )()


// Quetion 4 ------------------------------------------------------>
// write a js program which calculate simple interest 

function simple(p, r, t) {
console.log("I am Solving it please wait");
    const interest = (p * r * t) / 100;
    setTimeout(()=>{
console.log("The Simple Interest for Principal: " + p + ", Rate: " + r + "%, and Time: " + t + " years is " + interest);
},2000)
    return interest;
}


simple(12, 22, 32);
