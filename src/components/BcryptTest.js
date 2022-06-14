// const bcrypt = require ('bcrypt');


import bcrypt from "bcrypt";

const saltRounds = 10;
var password = "Fkdj^45ci@Jad";

bcrypt.genSalt(saltRounds, function(err, salt) {
	bcrypt.hash(password, salt, function(err, hash) {
		// Store hash in database here
		console.log("hash:",hash);
	});
});

