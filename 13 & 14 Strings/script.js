console.log("STRINGS");

let nme = "akshat";
console.log(nme.length);
let friend = 'naruto';
console.log(friend.length);

// Template literals

let boy1 = "boruto"
let boy2 = "mitsuki"
let sentence = `${boy1} is best friend of ${boy2}`
console.log(sentence);

//  Methods of strings

let nam = "sadara";
console.log(nam.toUpperCase());
console.log(nam.replace("dara","kura"));
let nm = "SADARA";
console.log(nm.toLowerCase());
console.log(nm.slice(1,4));
let rem = "boruto";
console.log(nam.concat(" is a best friend of ", rem));  //to add a string into another string
// console.log(rem[0]);
// console.log(rem[1]);
// console.log(rem[2]);
// console.log(rem[3]);
// console.log(rem[4]);
// console.log(rem[5]);
for(i=0;i < rem.length;i++){   // use a for loop to print a string
    console.log(rem[i]);
}
 

