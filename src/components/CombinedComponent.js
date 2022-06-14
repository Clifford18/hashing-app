import {sha256} from "crypto-hash";
import bcrypt from "bcrypt";

let password = "John Clifford";

let shaPassword = '';

shaPassword = (await sha256(password))

console.log("shaPassword", shaPassword)

let Username ="John";

let result =" ";
result = Username.concat(shaPassword)

console.log("result of concat:", result)

const saltRounds = 10;

bcrypt.hash(result, saltRounds, function(err, hash) {
	// Store hash in database here
	console.log("hash:",hash);

	var encodedStringBtoA = btoa(hash);

	console.log("ecoded string :",encodedStringBtoA)
});
