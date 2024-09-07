// let ctitle = document.getElementsByClassName("card-title")[0];
let ctitle = document.getElementById("onecardtitle");
ctitle.style.color = "blue";

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "orange";
ctitles[1].style.color = "blue";
ctitles[2].style.color = "green";
console.log(ctitles);

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "yellow"

console.log(document.getElementsByTagName("a"));
// console.log(document.querySelector("card").getElementsByTagName("a"));

console.log(document.getElementsByName("search"));