const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: {
    d: 1
}};
const o4 = Object.create(o3);

o4.c.d = 4; 
console.log(o3)