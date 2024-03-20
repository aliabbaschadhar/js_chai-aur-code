// DATES

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23); //Month starts from 0(jan) in js
// let myCreatedDate = new Date(2023, 0, 23, 15, 3);
// let myCreatedDate = new Date("2023-01-14 13:00");
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth()); //starting with zero
console.log(newDate.getDay()); //starting with zero

newDate.toLocaleString("default", {
  weekday: "long",
});
