import {sha256} from "crypto-hash";
import bcrypt from "bcryptjs";

let AuthPassword = "Sky@2022!";
let AuthUsername ="johnkarani@skyworld.co.ke";
const saltRounds = 10;

export const ComputeAuthHashComponent = async (username, password) => {
	// base64Encode(bCrypt(username::lower(SHA256(AuthPassword)))
	return btoa(bcrypt.hashSync(`${username}::${(await sha256(password))}`, saltRounds))
}

console.log("Auth hash:", await ComputeAuthHashComponent(AuthUsername, AuthPassword))

