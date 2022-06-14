
// const {sha256} = require ("crypto-hash");


import {sha256} from "crypto-hash";

console.log("Hello world!");

let text_input = "Pa%%w0rd";

let result = '';

result = (await sha256(text_input));

console.log(result)

