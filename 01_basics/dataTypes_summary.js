//There are two types of dataTypes in javascript on basis of how these data types are kept in memory callec premitive and non-primitive datatype.
//PREMITIVE DATA TYPES
//7 Types: string , Number , boolean, null , undefined , symbol, bigint

const id = Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId); //false bcz no matter we pass same value to both of the symbol then their return type which also a symbol will be unique.

const bigNumber= 3790480238432009832498n //bigint
//----->Javascript is a statically typed programing language which means that the datatype of variable is determined by the value they hold at run time and can change throughout the program as we assign different value to them.



//REFRENCE TYPES *****OR***** NON-PREMITIVE DATA TYPES

//Array , Objects, fuctions

// Most of the primitive data types return object like null ,array and return type of Function is ----> OBJECT FUNCTION

const heros=['ironMan', 'thor', ' captainAmerica'];
console.log(typeof heros);  //object

const myObj ={
    name:'ali',
    age:32,
}

const myFunction=function(){
    console.log('Hello world');
}
console.log(typeof myFunction);



