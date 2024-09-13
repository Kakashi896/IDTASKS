class Animal{
    constructor(name, age){
        this._name = name;
    }
    fly(){
        console.log("Animal "+this.name+" is saying that (me udd rha hu bhai haseen wadiyo me)");
    }
    get name(){
        return this._name;
    }
    set name(newname){
        this._name = newname;
    }
}

let a = new Animal("Divyansh");
a.fly();
console.log(a.name); 
a.name = "Lala"; 
console.log(a.name);
let c = 15;

console.log(a instanceof Animal); // to check whether an object belongs to an certain class
console.log(c instanceof Animal); // to check whether an object belongs to an certain class