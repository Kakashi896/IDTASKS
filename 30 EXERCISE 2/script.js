// Snake water gun game

document.write("Hello Guys this is snake water gun game lets play it 😍");

let user = prompt(" enter S , W or G");
let cpuI  = Math.floor(Math.random() * 3);
let cpu = ["S","W","G"][cpuI];

const match = (cpu , user)=>{
    if (cpu === user) {
        return "draw";
    }
    else if (cpu === "S" && user === "W") {
        return "cpu";
    }
    else if (cpu === "G" && user === "S") {
        return "cpu";
    }
    else if (cpu === "W" && user === "G") {
        return "cpu";
    }
    else if (cpu === "W" && user === "S") {
        return "user";
    }
    else if (cpu === "S" && user === "G") {
        return "user";
    }
    else if (cpu === "G" && user === "W") {
        return "user";
    }

}
let result   = match(cpu,user);
document.write("The winner is " + result);

