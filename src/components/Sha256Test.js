
// const {sha256} = require ("crypto-hash");


import {sha256} from "crypto-hash";
import {ComputeAuthHashComponent} from "./ComputePassword.js";

console.log("Hello world!");

let text_input = "John Clifford";

let result = '';

result = (await sha256(text_input));

console.log(result)
console.log(result==="d2374dc98cbcf6a6ec374903b47b467224f4827b5736d1f15cb4a9030e16678a")

console.log("Auth hash:", await ComputeAuthHashComponent("johnkarani@skyworld.co.ke","Sky@2022!"))

