class Animal{
    constructor(name){
        this.name = Animal.capitalize(name);
    }
    sleep(){
       console.log("Animal "+ this.name+" is sleeping");
    }
    walk(){
        console.log("Animal "+ this.name+" is walking");
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

let a = new Animal("divyansh");
a.sleep();
a.walk();