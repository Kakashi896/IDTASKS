// // MAP FILTER REDUCE

// // map creates a new array by performing some operations on each array elemnent
// const map = [1, 2, 3, 4, 5];
// let a =  map.map((value)=>{
//     console.log(value);
//     return value + 1;
// })
// console.log(a);


// // filter creates a new array with all elements that pass the test implemented by the provided function
// const filter = [15,5,12,98,16,9,1,6,7];
// let b = filter.filter((a)=>{
//     return a < 10;
// })
// console.log(b);


// // reduce applies a function against an accumulator and each element in the array (from left to right)  
const reduce = [5,1,8,9,17,6,7];
let c = reduce.reduce((h1,h2)=>{
  return h1 + h2;
})
console.log(c);
