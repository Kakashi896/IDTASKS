let a = {
    name: "akshat",
    "code-lang": "Javascript",
    run : ()=>{
        alert("self runnnig")
    }
}
console.log(a);

let p = {
    run : ()=>{
    alert("runnnig")
}}

p.__proto__ = {        // Setting prototype of existing prototype here
    name2: "itachi",
    userID: "705285",
}



a.__proto__ = p;  // Setting prototype here
a.run();
console.log(a.name2); 