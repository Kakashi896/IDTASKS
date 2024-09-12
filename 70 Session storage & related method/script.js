// let key = prompt("enter the key you want to set")
// let value = prompt("enter the value you want to set in the key")

// sessionStorage.setItem(key, value);

// console.log(`The value at ${key} is ${sessionStorage.getItem(key)}`) 
// // localStorage.getItem(value);

// if (key == "null" || value == "null"){
//     sessionStorage.removeItem(key,value);
// }
// if (key == "0"){
//     sessionStorage.clear();  // it will delete all things
// }

// key();  // to get the key (index)

// localStorage.length(); // to get the length


// STORAGE EVENT 
window.onstorage = (e)=>{
    alert("changed")
    console.log(e);
}