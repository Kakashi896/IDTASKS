
// 60 ----------------------------------------------------------------------

// try catch handling 


// setTimeout(()=>{
//     console.log("Hacking wifi.....Please wait......");
// }, 1000)

// try{
//     console.log(akshat);
// }
// catch(error){
//     console.log("balle balle error agya ");
// }

// setTimeout(()=>{
//     console.log("Fetching Username and Password.....Please wait......");
// }, 4000)
// setTimeout(()=>{
//     console.log("Now Getting your insta pass .....Please wait......");
// }, 8000)
// setTimeout(()=>{
//     console.log("If you leave You will fully hacked.....Please wait......");
// }, 12000)
// setTimeout(()=>{
//     console.log("Lol It's a joke.....You can go now......and dont worry.....");
// }, 16000)



// 61 ----------------------------------------------------------------------

// Error Object and custom error

// try{
// //    akshat;
// // throw new Error("Akshat is not good");
// console.log(akshat);
// throw new ReferenceError("Akshat is not good");

// }
// catch(error){
//     console.log("name of this error = " + error.name);
// console.log("message in this error = " + error.message);
// console.log("stack of this error = " + error.stack);
// }


try{
    let age = prompt("enter your age");
    age =  Number.parseInt(age);
    if (age > 150){
        throw new Error("This is probably not true");
    }

}catch(error){
    console.log("name of this error = " + error.name);
    console.log("message in this error = " + error.message);
}
console.log("Script is still running");