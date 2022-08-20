let flatten = require('flat')
let obj = require('./sampleJSON')

/*

Experimented with various object flattener packages such as:
- "@stdlib/utils-flatten-object": "0.0.7",
- "flat": "^5.0.2",
- "object-flattener": "^1.0.1",
- "safe-flat": "^2.0.2"

"flat" and "safe-flat" are good options to use.

*/

console.log("==================================");
// console.log(obj.deepPureJson);
// console.log(obj.deepArrObjComboJson);
// console.log(obj.mixTypeJson);
console.log(obj.mixTypeJson);

console.log("==================================");
// console.log(flatten(obj.deepPureJson));
// console.log(flatten(obj.deepArrObjComboJson));
// console.log(flatten(obj.mixTypeJson));
console.log(flatten(obj.mixTypeJson));
