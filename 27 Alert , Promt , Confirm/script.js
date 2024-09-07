// Alert Promt & Confirm

// alert("hello world your scripts works");
alert("Enter value of a on next step");
let a = prompt("enter a here");
a = Number.parseInt(a);
let write = confirm("Do you want to write it on the page")
if  (write){
    document.write("the value of a is ",a);
}
else{
    document.write("Oops you dont want but its OK😊");
}


