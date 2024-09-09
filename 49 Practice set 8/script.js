    console.log("Practice Set 8");

// Quetion 1 ----------------------------------->
// Write a program to show diffrent alerts when diffrent elements are seen

let a = function(one){
alert("You clicked button one")
}
let b = function(two){
alert("You clicked button two")
}
// let c = function(two){
// alert("You clicked button three")
// }

btn1.addEventListener('click', a);
btn2.addEventListener('click', b);
// btn3.addEventListener('click', c);


// Quetion 2 ----------------------------------->
// Creates a website which is capabel of storing bookmarks of your fav websites using href


// Quetion 3 ----------------------------------->
// Reapeat quetion 2 with Event listeners  

document.getElementById("btn4").addEventListener("click", function(){
    let url = "https://codewithharry.com";
    let win = window.open(  url, '');

    win.focus();
})
document.getElementById("btn5").addEventListener("click", function(){
    let url = "https://google.com";
    let win = window.open(   url, '');

    win.focus();
})
document.getElementById("btn6").addEventListener("click", function(){
    let url = "https://instagram.com";
    let win = window.open(  url, '');

    win.focus();
})


// Quetion 4 ----------------------------------->
// Write a JS program to keep fetching contents of a website in every(5 seconds)

const fetchContent = async (url) =>{
    con = await fetch(url);
    let a = await con.json();
    return a;
}

 let i = setInterval(async function(){
  let url = 'https://jsonplaceholder.typicode.com/todos/1';
  console.log(await fetchContent(url))
},3000)

clearInterval(i);  // to see i  in console, you need to comment this line


// Quetion 5 ----------------------------------->
// Create a Glowing bulb effect using class list toggle method in JS

setInterval (async function () {
    document.querySelector("#bulb").classList.toggle("bulbstop");
},200)

