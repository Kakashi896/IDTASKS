// 54 -----------------------------------------------------------------------------
// let promise = new Promise((resolve, reject) => {
//     // code that takes some time to execute
//     resolve(56)
// })


// console.log("Hello");
// setTimeout(function(){
//     console.log("Ram Ram");
// },2000)
// console.log("My name is " + "Akshat");
// console.log(promise);

// lets understand whats promise for 

// fetch google home page
// fetch data from data API
// fetch pictures from the server
// these all commands can run parallely using promises

// 55 -----------------------------------------------------------------------------

// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise (P1) is pending it will take few seconds");
//     console.log("-------Please Wait I am fulfilling-------");
//        setTimeout(()=>{
//         // console.log("I am promise and i am fullfilled");
//         resolve(true);
//        },5000)
// })

// SENARIO OF THIS -------------------------------------------------------
// Promise is pending it will take few seconds
// script.js:26 -------Please Wait-------
// console.log(p)
// VM156:1 Promise {<pending>}
// script.js:28 I am promise and i am fullfilled
// console.log(p)
// VM160:1 Promise {<fulfilled>: true}
// -----------------------------------------------------------------------


// Now throwing error and rejecting promise

// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise (P2) is pending it will take few seconds");
//     console.log("-------Please Wait I am rejecting-------");
//        setTimeout(()=>{
//         // console.log("I am promise and i am rejected");
//         reject(new Error("I am an error"));
//        },5000)
// })

// console.log(p1,p2);

// p1.then((value)=>{
//     console.log("Fullfield (P1) ", value);

// })
// // p2.catch((error)=>{
// console.log("Check P2 :Some error in this:");
// })
// another way to catch error
// p2.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
// })

// 56-----------------------------------------------------------------------------------

// Promise Chaining

// let p1 =  new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("Resolve after 2 seconds");
//         resolve(56)
//        },2000)
// })

// p1.then((value)=>{
//     console.log(value);
//     let  p2 = new Promise((resolve, reject) => {
//             setTimeout(() => {resolve("promise 2");},2000)
//     })
//     return p2;

// }).then ((value)=>{
//     console.log("We are done");
//     let p3 = new Promise((resolve,  reject) => {
//         setTimeout(() => {resolve("Promise 3");},2000)
//     })
//      return p3;
// }).then ((value)=>{
//    console.log("Done again");
//    let p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve("Promise 4");},2000)
    
//    })
//    return p4;
// }).then((value)=>{
//     console.log("Done once more");

// })


// Quick Quiz type load script function with promises--------------------------

// function loadScript(src){
//         var script = document.createElement('script');
//         script.src = src;
//         script.onload = function(){
//             console.log("Script loaded from src " + src);
//         }
//         document.body.appendChild(script);
//     }

// let p1 =  new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      console.log("Resolve after 2 seconds");
//      resolve(56)
//     },2000)
// })
// p1.then((value)=>{
//     console.log(value);
//     let  p2 = new Promise((resolve, reject) => {
//         loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');

//             setTimeout(() => {resolve("promise 2");},2000)
//     })
//     return p2;

// }).then ((value)=>{
//     console.log("We are done");
//     let p3 = new Promise((resolve,  reject) => {
//         loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');

//         setTimeout(() => {resolve("Promise 3");},2000)
//     })
//      return p3;
// }).then ((value)=>{
//    console.log("Done again");
//    let p4 = new Promise((resolve, reject) => {
//     loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');

//     setTimeout(() => {resolve("Promise 4");},2000)
    
//    })
//    return p4;
// }).then((value)=>{
//     console.log("Done once more");

// })


// 57-----------------------------------------------------------------------------------

// Attaching multiple handlers to a promise

// let p1  = new Promise((resolve, reject) => {
//        setTimeout(() => {
//         // alert("Hey I am done");
//         resolve(1);
//        },2000)
// })
// p1.then(()=>{
//     console.log("CongraFtulations");
// })
// p1.then (()=>{
//     console.log("Hurray");
// })


// 58-----------------------------------------------------------------------------------

// The promise API

let p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Value 1");
        },1000);
})

let p2 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Value 2");
            // reject("Error");
        },2000);
})


let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Value 3");
    },3000);
})

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// Printing all at same time
// promise_all =  Promise.all([p1,p2,p3])
// promise_all =  Promise.allSettled([p1,p2,p3])// if error in any promise then 
// promise_all =  Promise.race([p1,p2,p3])  // whichever first come print it  
promise_all =  Promise.any([p1,p2,p3])  // any who resolve completely  
promise_all.then((value)=>{
    console.log(value);
})


