
// message = ("I Am Global")
// function hello1(){
//    let message = "Good Morning"
//     {
//        let  message = "Good Afternoon"
//         console.log("Hello 1: " + message );
//     }   
//     let c = function hello2(){
//         console.log("I Am C " + message);
//     }
//     return c;
// }

// c = hello1();
// c();



// Another Example

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    name = "Akshat"
    return displayName;
  }
  let c = init();
  c()