const accountId = 23323443;
let accountEmail="aliabbas@gmail.com";
var accountPassword='34343';
accountCity="jaipur"; //In javascript we can reserve the memory of variable without writing anything(let , const , var).But it is not a good practice.
let accountState; // Undefined because we haven't set the value right now.


// accountId=33434343;//not allowed

accountEmail="hc@hc.com";
accountPassword="787877787";
accountCity="Hafizabad";
console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope.
*/

console.table([accountEmail,accountId, accountCity, accountPassword , accountState]);
