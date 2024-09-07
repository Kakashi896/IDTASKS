console.log("PRACTICE ON STRINGS");

// Quetion 1 ------------------------------>
// Explore the includes, startsWith & endsWith function of a string

const sentence = "lorem34asdfghjkl sadfghj dfghj aSDFGHJ asdfghj asdfgh ";
const word = "sharingan";
console.log(`the word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence `);
console.log(sentence.includes(word));

// Quetion 2 ------------------------------>
// extracts 1000 from this 

const amt = "Please Give me 1000 rupees";  
let amount = Number.parseInt(amt.slice(15,19));
console.log("the amount in the given string is " + amount);
console.log(typeof amount);

// Quetion 4 ------------------------------>
//  try to change 4th character of the string

const str = "Itachi";
console.log(str + " ----this is original");
console.log(str.replace("c","C") + " ----this is after changing 4th character but this is only for this line it will not change the original string beacuse strings are immutable always");