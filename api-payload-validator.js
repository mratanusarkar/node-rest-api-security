let flatten = require('flat')

/**
 * Input string value and return true if the value contains SQL code, else return false.
 * @param {String} inputString 
 */
function containsSqlCode(inputString) {
    let sqlKeywords = ['SELECT', 'INSERT', 'DROP', 'DELETE', 'UPDATE', 'ALTER', 'LIKE', 'UNION', 'DECLARE', 'EXEC']

    // null check
    if (!inputString) { return false }
    if (typeof (inputString) != 'string') { return false }

    let inputWords = inputString.split(' ');
    let containsSql = inputWords.some(word => sqlKeywords.includes(word.trim().toUpperCase()));
    return containsSql;
}

/**
 * Input string value and return true if the value contains Malicious code, else return false.
 * @param {*} inputString 
 */
function containsMaliciousCode(inputString) {
    let blacklistedStrings = ['<', '>', '[', ']', '{', '}', ';', '?', '!', '=', '==', '===', `"`, `'`, '`'];
    let allowedObjects = ['[object Null]', '[object Date]', '[object Object]', '[object Array]']

    // null check
    if (!inputString) { return false }

    // check for all six js datatype: "object", "function", "undefined", "number", "boolean" and "string".
    if (typeof (inputString) == 'object') {
        if (allowedObjects.includes(Object.prototype.toString.call(inputString))) {
            return false;
        }
        else {
            return true;
        }
    }
    if (typeof (inputString) == 'function') { return true }
    if (typeof (inputString) != 'string') { return false }

    let notContainCodeChars = blacklistedStrings.every((char) => !inputString.includes(char));
    return !notContainCodeChars
}

/**
 * Extract all the values to be checked for vulnerabilities and input them as an Array.
 * outputs a json with details about the input and if it's "safe" to use or not.
 * @param {Array[String]} ListOfStringValues 
 */
function checkListOfValues(ListOfStringValues) {
    if (!ListOfStringValues || ListOfStringValues.length <= 0) {
        return { safe: true, message: 'input list was empty or null'}
    }
    for (const value of ListOfStringValues) {
        console.log(value);
        let sqlInjection = containsSqlCode(value);
        let maliciousCode = containsMaliciousCode(value);
        if (sqlInjection || maliciousCode) {
            return {
                safe: false,
                sqlInjection: sqlInjection,
                maliciousCode: maliciousCode,
                suspiciousValue: value,
                message: 'WARNING: SQL Injection or Malicious Code Found!!!'
            }
        }
    }
    return {
        safe: true,
        sqlInjection: false,
        maliciousCode: false,
        suspiciousValue: undefined,
        message: 'All values in the list were found safe to use.'
    }
}

/**
 * Input the REST API HTTP (req, res) in API controller.
 * outputs a json with details about the input req body payload and if it's "safe" to use or not.
 * @param {Object} req 
 * @param {Object} res 
 */
function checkAPIPayload(req, res) {
    if (!req || !req.body) {
        return { safe: true, message: 'request payload body is empty'}
    }
    let body = req.body;
    console.log(body);
    let flatBody = flatten(body);
    for (const [key, value] of Object.entries(flatBody)) {
        console.log(`${key} -> ${value}`);
        let sqlInjection = containsSqlCode(value);
        let maliciousCode = containsMaliciousCode(value);
        if (sqlInjection || maliciousCode) {
            return {
                safe: false,
                sqlInjection: sqlInjection,
                maliciousCode: maliciousCode,
                suspiciousKey: key,
                suspiciousValue: value,
                message: 'WARNING: SQL Injection or Malicious Code Found!!!'
            }
        }
    }
    return {
        safe: true,
        sqlInjection: false,
        maliciousCode: false,
        suspiciousKey: undefined,
        suspiciousValue: undefined,
        message: 'All values in the JSON payload body were found safe to use.'
    }
}


module.exports.checkAPIPayload = checkAPIPayload;
module.exports.checkListOfValues = checkListOfValues;
