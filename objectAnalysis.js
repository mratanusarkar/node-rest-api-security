let flatten = require('flat')
let obj = require('./sampleJSON')

function print(data) {
    let flatData = flatten(data);
    for (const [key, value] of Object.entries(flatData)) {
        if (["object", "function", "undefined"].includes(typeof (value))) {
            console.log(`${key} -> ${value} ---> type: ${typeof(value)} ---> instance: ${Object.prototype.toString.call(value)}`);
        }
    }
}

print(obj.mixTypeJson);
