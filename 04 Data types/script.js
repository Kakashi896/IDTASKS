console.log('Akshat');

// data types in javascript;

// NN BB SS U -------------------->    PRIMITIVE DATA TYPES

let a = null;
let b = 12;
let c = BigInt(1500);
let d = true;
let e = 'itachi';
let f = Symbol('i am a symbol');
let g;

console.log(a, b, c, d, e, f, g);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

// Objects -------------------->   NON-PRIMITIVE DATA TYPES

const items = {
    name: 'Akshat',
    age: 20,
    address: {
        street: 'street1',
        city: 'city1',
    },
    hobbies: ['reading', 'coding'],
}

console.log(items);
console.log(items['name']);