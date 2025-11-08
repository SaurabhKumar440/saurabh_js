const accountId = 12345;
let accountEmail = "saurabh123@g.com";
var accountPassword = "Saurabh@123";
accountCity = "Bangalore";
let accountState; //undefined

//accountId=2; //not allowed
accountEmail = "hc@hc.com";
accountPassword = "Hc@123";
accountCity = "Mumbai"; 
console.log(accountId);
console.table({accountEmail, accountPassword, accountCity, accountState});
/*
prefer not to use var
because of issue in block scope and function scope
*/