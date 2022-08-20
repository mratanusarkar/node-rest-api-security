let validator = require('./api-payload-validator')
let obj = require('./sampleJSON')


// create a sample http rest api req, res objects:
let payload = obj.deepPureJson;
let req = {
    params: {},
    query: {},
    body: payload
};
let res = {};

// test and see our validator in action!
console.log(validator.checkAPIPayload(req, res));
