import {sha256} from "crypto-hash";
import bcrypt from "bcryptjs";
import {willSha256} from "./SHA256.js";


let password = "Sky@2022!";

let shaPassword = '';

shaPassword = (await sha256(password))

console.log("shaPassword", shaPassword)

let Username ="johnkarani@skyworld.co.ke::";

let result =" ";
result = Username.concat(shaPassword)

// result = Username.concat("37117c2634965b85a96ee09ba319bbcad708f24228e83d8caee9ac276c7beb44")



console.log("result of concat:", result)

const saltRounds = 10;

bcrypt.hash(result, saltRounds, function(err, hash) {
	// Store hash in database here
	console.log("hash:",hash);

	var encodedStringBtoA = btoa(hash);

	console.log("ecoded string :",encodedStringBtoA)



});

const hash = btoa(bcrypt.hashSync(result, saltRounds));

console.log("sync hash:", hash)



const computeAuthHash = async (username, password) => {
	// base64Encode(bCrypt(username::lower(SHA256(password)))
	return btoa(bcrypt.hashSync(`${username}::${(await sha256(password))}`, saltRounds))
}

async function asyncComputeAuthHash  (username, password)  {
	// base64Encode(bCrypt(username::lower(SHA256(password)))

	const sha256Password = await sha256(password);
	const bcryptHash = await bcrypt.hash(`${username}::${sha256Password}`, saltRounds);

	return btoa(bcryptHash)
}

// JDJhJDEwJHFqODFWV2J6UW5YQVFoUGx0TlRjZU93bmNob0ZvMEgzMlBHSDRQU0N5R2dFVGhsbkNSbnpt

console.log("computeAuthHash hash1:", await computeAuthHash('johnkarani@skyworld.co.ke', 'Sky@2022!'))
console.log("computeAuthHash hash:", await asyncComputeAuthHash('johnkarani@skyworld.co.ke', 'Sky@2022!'));

function computeAuthHash2   (username, password, callBack) {

	return bcrypt.hash(`${username}::${willSha256(password)}`, saltRounds, callBack);
}
computeAuthHash2('johnkarani@skyworld.co.ke', 'Sky@2022!', (err, finalHash) => {
	console.log('auth_hash ', btoa(finalHash))
})
