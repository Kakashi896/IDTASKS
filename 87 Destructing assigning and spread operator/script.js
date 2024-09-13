let arr = [3, 5, 6]
let [a, b, c] =arr 
console.log(arr);


let arr2 = [1,2,3,4,5,6,7];
let  [z, d, e, f, ...rest] = arr2;
console.log(arr2,rest);

let {q, w} = {q:23, w:45}
console.log(q,w);


// Spread syntax

let arr3 = [0,7,8,9,4,5,6]
let obj1 = {...arr3}
console.log(obj1);

function sum(v1,v2,v3){
    return v1+v2+v3;
}

console.log(sum(...arr));


// react most use

let obj2 ={
    name:"Akshat",
    company:"Texus",
    address:"America"
}

console.log(obj2);
console.log("Changing name");
console.log({...obj2, name:"Shivam Bhardwaj"});

