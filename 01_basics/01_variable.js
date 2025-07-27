const accountId = 144553
let accountEmail = "jaingagan757@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "gj@test.com"
accountPassword = "212121212"
accountCity = "Gwalior"


accountCity = "Goa"

console.log(accountId);

/*
Prefered not to use var
bacause of the issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

accountCity = "Panaji"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
