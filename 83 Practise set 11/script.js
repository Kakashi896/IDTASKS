// Quetion 1 ------------------------------------------------>
// Create a javascript class to create an complex no. create a costructor to set  the real and imaginary part of the complex part

// class Complex{
//     constructor(real,imaginary){
//         this.real = real;
//         this.imaginary = imaginary;
//     }

// }

// let a = new Complex(2, 4)
// let b = new Complex(6, 8)


// Quetion 2 ------------------------------------------------>
// Write a method to add two complex no. to anove class

// class Complex{
//     constructor(real,imaginary){
//         this.real = real;
//         this.imaginary = imaginary;
//     }
//     add(num){
//         this.real =  this.real + num.real;
//         this.imaginary = this.imaginary + num.imaginary;
//     }
// }

// let a = new Complex(2, 4)
// let b = new Complex(6, 8)

// a.add(b);
// console.log(a.real+ "+" +a.imaginary+"i");


// Quetion 3 ------------------------------------------------>
// create a class student from a class human then override the method

// class Human{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     Say(){
//         console.log(this.name + " Saying Jai Shree Ram");
//     }
// }

// class  Student extends Human{
//     learn(){
//         console.log(this.name + " is learning about Shree Ram");
//     }
//     Say(){
//         console.log("Now "+this.name + " Student also Saying Jai Shree Ram");
//     }
// }

// let a = new Student("Riyansh") 
// a.learn();
// a.Say();


// Quetion 4 ------------------------------------------------>
// use instance of syntax on student 

// console.log("Is student class is  instace of human class: " + (Student instanceof Human));
// console.log("The student naming variable is intance of human class "+(a instanceof Human));


// Quetion 5 ------------------------------------------------>
// use get set to implement the imaginary parts of the complex no.

class Complex{
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num){
        this.real =  this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
    get real(){
        return this._real;
    }
    get imaginary(){
        return this._imaginary;
    }
    set real(newreal){
        this._real = newreal;
    }
    set imaginary(newimaginary){
        this._imaginary = newimaginary
    }
}

let a = new Complex(2, 4)
a.real = 10;
a.imaginary = 12;
let b = new Complex(6, 8)

a.add(b);
console.log(a.real+ "+" +a.imaginary+"i");

