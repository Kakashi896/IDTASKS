// // Methods of array

// let num =  [1, 2, 3, 4, 5];
// let b = num.toString(); //b is now a string
// console.log(b, typeof b);


// let c = num.join(" and "); // now it will join all elements of array
// console.log(c, typeof c); 


// let r = num.pop(); // pop out the last value
// console.log(num,r);


// num.push(89); // push this value into array
// console.log(num);


// let y = num.shift(); // remove element from starting
// console.log(y, num);


// let y1 = num.unshift(11); // add an element on starting
// console.log(num);


// delete num[9]; // delete your choosen index value
// console.log(num);


// num1 =  [11, 22, 33, 44, 55];
// num2 =  [11, 12, 13, 14, 15];
// let a = num.concat(num1,num2);  // it will return all array combined
// console.log(a);


// num.reverse() // it will just reverse the array
// console.log(num);


// let q = [12,3,45,6,152,3];
// q.sort(); // it will sort array alphabatically
// console.log(q);  

// // to do it ascending  order use this code-------------------------
// let compare = (a,b)=>{
//     return a - b;
// }
// let q1 = [12,2,45,6,152,3];
// q1.sort(compare); // it will sort array in ascending order
// console.log(q1);
// // -------------------------------------------------------------


// // to do it descending  order use this code-------------------------
// let compare1 = (a1,b1)=>{
//     return b1 - a1;
// }
// let q2 = [12,2,45,6,152,3];
// q2.sort(compare1); // it will sort array in ascending order
// console.log(q2);
// // -------------------------------------------------------------


let w = [12,2,45,6,152,3];
console.log(w);
w.splice(3,2,101,101); // ( kha se udau , kitne udau , kya jodu )
console.log(w);


let w1 = [142,2,454,6,1452,3];
console.log(w1);
let z = w1.slice(2,5);  // (kha se lau , kha tak lau)
console.log(z);

