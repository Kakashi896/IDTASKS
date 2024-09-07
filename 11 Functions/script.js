console.log("FUNCTIONS IN JAVASCRIPT");

const hello = ()=>{
    console.log("Hello yrr how are you me to bhadiya");
}

function onePlusAvg(x,y){
    // console.log("done");
    return 1 + (x+y)/2;
}

let a =1;
let b = 2;
let c = 3;
console.log("The one plus average of a & b is "  + onePlusAvg(a,b));
hello();
console.log("The one plus average of c & b is "  + onePlusAvg(c,b));
hello();
console.log("The one plus average of a & c is "  + onePlusAvg(a,c));
hello();
