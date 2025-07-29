const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const newBalance = 123.1111
console.log(newBalance.toPrecision(3));


const mobNumber = 10000000
console.log(mobNumber.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++MATHS++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4.123));
console.log(Math.round(5.123));
console.log(Math.ceil(6.1));
console.log(Math.floor(6.9));
console.log(Math.max(6,5,3,5,6,9,3,1,45,9));
console.log(Math.min(6,5,3,5,6,9,3,1,45,9));
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);