const name = "ali";
const repoCount = 50;

// console.log(name + repoCount+" value") // not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Called backticks and most recommended and most used.

//DECLARING STRING WITH NEW KEYWORD

const gameName = new String("abcdefghij"); //It gives us string in object form which have methods and prototype.

console.log(gameName[0]);
console.log(gameName.__proto__); //{} empty object

console.log(gameName.length);
console.log(gameName.toUpperCase()); //But this doesn't change the value of original string bcz string is premitive datatype and it falls in stack and in stack copy is passed and no matter what happen with copy original variable will not change.

console.log(gameName.charAt(2)); // To check what char is at index 2
console.log(gameName.indexOf("l")); //To check index of char

const newString = gameName.substring(0, 4);
console.log(newString); // last value is not included

const anotherString = gameName.slice(-8, 4); // 8--->in negative start from end and to 8 index(not included while slicing) to 4-->starts from begninig to 4 index and lasr excluded.
//In SLICE negative values can be used but in SUBSTRING nagative value can't be used.
console.log(anotherString);

const newStringOne = "     ali abbas       ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart()); //Remove white spaces from start
console.log(newStringOne.trimEnd());

const url = "https://aliabbas.com/google%20chadhar";
console.log(url.replace("%20", "-")); // used to replace something with something in string

console.log(url.includes("alpha")); // To check something in a string .... return in true/false

const string1 = "ali-abbas-chadhar";
console.log(string1.split("-")); // Splits the string on basis on pattern given to split function and converts the string into a array rn--> it is spliting on basis of dashes(-) .

console.log(string1.endsWith("chadhar")); //Checks whether a string ends with characters of this string or not return a true /false
console.log(string1.endsWith("chadha"));




