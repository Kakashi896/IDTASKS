// Quetion 1 -------------------------------------------------->
// Write a program to load a javascript file in a browser using promise  use then() to display an alert when the load is complete
// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve("The script " +src+ " is fully loaded....")
//         }
//         document.head.append(script);
//     })
// }

// let a = loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
// a.then((message) => {
//     console.log(message);
//     setTimeout(()=>{
//     alert("Script loaded")
// },500)
// })







// Quetion 2 -------------------------------------------------->
// use async await in quetion 1

// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve("The script " +src+ " is fully loaded....")
//         }
//         document.head.append(script);
//     })
// }

// const main2 = async ()=>{
//     let a = await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
//     console.log(a);
// }
// main2();


// Quetion 3 -------------------------------------------------->
// craete a promise which rejects after 3 seconds use a async await to get its value use a try and catch to  handel its error

// let p1 = ()=>{ 
//         return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//          console.log("Resolve after 3 seconds");
//          reject(new Error("I am an error"));
//         },3000)
//     })
// }
//     let a = async()=>{
//         try{
//         console.log("Resolving problem please wait.......");
//         let c  = await p1();
//     }catch(error){
//         setTimeout(()=>{
//         console.log("We get an error in your program i handeled it for now but please check it in your code...");
//     },1000)
//     }
//     }
// a();


// Quetion 4 -------------------------------------------------->
// Write a program using promise.all inside an async await to await three promises compare its result with the case where we await these promises


async function akshat() {
    

let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Itachi");
    },2000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Obito");
    },1000);
})


let p3 = new Promise((resolve, reject) => {
setTimeout(()=>{
    resolve("Kakashi");
},3000);
})


// console.log("Fetching value 1 please wait...........");
// let q1 = await p1;

// console.log("Fetching value 2 please wait...........");  // this trick takes time 
// let q2 = await p2;

// console.log("Fetching value 3 please wait...........");
// let q3 = await p3;

console.log("Fetching value 1 please wait...........");
let q1 = p1;

console.log("Fetching value 2 please wait...........");  // this trick not takes time 
let q2 = p2;

console.log("Fetching value 3 please wait...........");
let q3 = p3;

let values = await Promise.all([q1, q2, q3])
console.log(values);

// console.log([q1, q2, q3]);


// Printing all at same time
promise_all =  Promise.all([p1,p2,p3])

}

akshat();

