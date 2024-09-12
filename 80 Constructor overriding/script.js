class Employee{
    constructor(name){
        console.log(`${name} Employee Constructor is here`);
    }
    login(){
        console.log("Employee logged in");
    }
    logout(){
        console.log("Employee logged out");
    }
    requestleaves(leaves){
        console.log("Employee requested " +leaves+ " leaves");
    }
    
    }
    
    class Programmer extends Employee{
        constructor(){
            super();
            console.log("Newlly written contructor");
        }
        // constructor(...args){
        //     super(...args);       // if you not create this part js automatically create it with its own power
        // }
         requescoffee(x){
            console.log("Programmer requested "+x+" coffees");
         }
         requestleaves(leaves){
            // console.log("Programmer requested " +(leaves+1)+ " leaves (one extra)");
            super.requestleaves(4);
            console.log("one extra also granted");
        }
        
    }
    
    
    let e = new Employee("Akshat");
    e.login();
    e.requestleaves(3);
    e.logout();
    let q = new Programmer("Akshat");
    q.login();
    q.requescoffee(1);
    q.requestleaves(3);
    q.logout();
    