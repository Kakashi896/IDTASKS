console.log("Browser Events");

let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
    console.log("Button clicked");
    let b = document.getElementById("myButton");
    b.innerHTML = "you can see now (a)";
}

let x = function (e) {
    alert("Ram Ram 1")
}

let y = function (e) {
    alert("Ram Ram 2")
}

btn.addEventListener('click', x);

btn.addEventListener('click', y);

let z = prompt("What is your Fav no. b/w 1 or 2 ?");

if (z == "2") {
    btn.removeEventListener('click', x);
    console.log("because like 2 i print (ram ram 2)");
    
}else{
    btn.removeEventListener('click', y);
    console.log("because like 1 i print (ram ram 1)");
}