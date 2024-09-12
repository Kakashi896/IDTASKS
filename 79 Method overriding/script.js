class Employee{
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
     requescoffee(x){
        console.log("Programmer requested "+x+" coffees");
     }
     requestleaves(leaves){
        // console.log("Programmer requested " +(leaves+1)+ " leaves (one extra)");
        super.requestleaves(4);
        console.log("one extra also granted");
    }
    
}


let e = new Employee();
e.login();
e.requestleaves(3);
e.logout();
let q = new Programmer();
q.login();
q.requescoffee(1);
q.requestleaves(3);
q.logout();
