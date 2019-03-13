const R = require("ramda") 
const inc = a => a + 1;  
const transform = R.pipe(R.map(inc), R.sum)

console.log(transform(R.range(0, 100)))