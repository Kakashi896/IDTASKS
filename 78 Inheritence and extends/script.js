class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(this.name + " is running");
    }
    bark(){
        console.log(this.name + " is barking");
    }
}


class Monkey extends Animal {   // this is inheritence
    eatbanana(){
        console.log(this.name + " is eating banana");
    }
    hide(){
        console.log(this.name + " is hiding on trees");
    }
}

let ani = new Animal("Freddy", "Golden brown");
let m = new  Monkey("bhullu", "brown");
ani.bark();
m.eatbanana();
m.hide();