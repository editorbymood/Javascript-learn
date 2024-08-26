const accountId =  64564765
let accountEmail = "sanket@google.com"
var accountPassword = "2382713"
accountCity = "Jaipur"
let accountState; 

// accountId = 2 //not allowed

accountEmail = "hchd@hd.com"
accountPassword = "3489237"
accountCity = "Delhi"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])