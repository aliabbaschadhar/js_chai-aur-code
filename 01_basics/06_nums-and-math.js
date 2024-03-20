const score = 400;
console.log(score);

const balance = new Number(100); // new keyword creates an empty object and this line of code tells us that create an new object which has number 100
console.log(balance); //100% sure it is a number

console.log(balance.toString().length); //balance number to string then by doing that we have access to string peoperties like length, concat etc....

console.log(balance.toFixed(2));

const otherNumber = 2345.8966;

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-pk"));

//--------------------------MATHS++++++++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(7, 3, 5, 6));
// console.log(Math.max(7, 9, 21, 6));

console.log(Math.random()); //gives value in 0 and 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
//Math.random()*(max-min+1)----> used max-min to get range that our number must be between max and min and +1 to avoid zero case
//And we plused min because we want the range between max and min not less than min
