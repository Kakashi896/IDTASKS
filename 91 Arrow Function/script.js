// const sayhello = (name)=>{
//     console.log("Hello "+ name);
                                      // --------Genral method
// }

// sayhello("Akshat");

// can also be  written as


// const sayhello = (name, greeting) =>   console.log("Hello "+ name + greeting);
// sayhello("Akshat ", "Jai shree ram");


// Another case

const sayhello = (name, greeting) =>   console.log("Hello "+ name + greeting);
const x ={
    name: "Shivam",
    role:  "Js Developer",
    experience:  "5 days",
    show: function(){
        // console.log(`His Name Is ${this.name}\nThe role is ${this.role}\nWith Experience of ${this.experience}`);
        let that = this;
        console.log(this);
        // setTimeout(function(){
        //     console.log(`His Name Is ${this.name}\nThe role is ${this.role}\nWith Experience of ${this.experience}`); // this will not print names
        // })
        // setTimeout(function(){
        //     console.log(`His Name Is ${that.name}\nThe role is ${that.role}\nWith Experience of ${that.experience}`);
        // })
        setTimeout(()=>{
            console.log(`His Name Is ${this.name}\nThe role is ${this.role}\nWith Experience of ${this.experience}`); // this will print names
        })
    }
}

console.log(" He is a "+ x.role +" with experience of "+ x.experience);

x.show();