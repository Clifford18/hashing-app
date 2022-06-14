// const bcrypt = require ('bcrypt');


import bcrypt from "bcrypt";

const saltRounds = 10;
var password = "Clifford Karani";

// bcrypt.genSalt(saltRounds, function(err, salt) {
// 	bcrypt.hash(password, salt, function(err, hash) {
// 		// Store hash in database here
// 		console.log("hash:",hash);
// 	});
// });

bcrypt.hash(password, saltRounds, function(err, hash) {
	// Store hash in database here
	console.log("hash:",hash);

	bcrypt.compare("Password",hash,function(err, result) {

		console.log("result match is:",result);
	})
});
