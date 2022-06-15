import {sha256} from "crypto-hash";
import bcrypt from "bcryptjs";

let password = "Sky@2022!";
let username ="johnkarani@skyworld.co.ke::";
const saltRounds = 10;

const computeAuthHash = async (username, password) => {
	// base64Encode(bCrypt(username::lower(SHA256(password)))
	return btoa(bcrypt.hashSync(`${username}::${(await sha256(password))}`, saltRounds))
}

console.log("Auth hash:", await computeAuthHash(username, password))

