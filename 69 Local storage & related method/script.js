let key = prompt("enter the key you want to set")
let value = prompt("enter the value you want to set in the key")

localStorage.setItem(key, value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`) 
// localStorage.getItem(value);

if (key == "null" || value == "null"){
    localStorage.removeItem(key,value);
}
if (key == "0"){
    localStorage.clear();  // it will delete all things
}

// key();  // to get the key (index)

// localStorage.length(); // to get the length