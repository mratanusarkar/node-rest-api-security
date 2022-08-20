const deepPureJson = {
    l1k1: "a",
    l1k2: "b",
    l1k3: {
        l2k1: "aa",
        l2k2: "bb",
        l2k3: {
            l3k1: "aaa",
            l3k2: "bbbb",
            l3k3: {
                l4k1: "aaaa",
                l4k2: "bbbb",
                l4k3: {
                    l5k1: "2022-07-11T06:38:50.708Z"
                }
            }
        }
    }
};

const deepArrObjComboJson = {
    number: 1,
    string: 'second',
    boolean: true,
    'null': null,
    array: [1, 2, 3],
    arrayOfArrays: [[1, 2], [3, 4]],
    arrayOfObjects: [
        { first: '1', second: '2' },
        { third: '3', forth: '4' }
    ],
    arrayOfObjOfObj: [
        {
            first0: '1', second0: {
                first1: '1',
                second1: {
                    first2: '1',
                    second2: '2'
                }
            }
        },
        { third0: '3', forth0: '4' }
    ],
    arrayOfMixed: [
        { first: '1', second: '2' },
        1,
        [true, false],
        null,
        { key: [1, 2, 3] }
    ],
    arrayObjArrObj: [
        {
            first0: '1',
            second0: [
                {
                    first1: '1', second1: [
                        {
                            first2: '1', second2: [
                                { first3: '1', second3: ['1'] }
                            ]
                        }
                    ]
                }
            ]
        },
        '2',
        3,
        4
    ],
};

function noop() {
    // Do nothing...
}
const mixTypeJson = {
    'a': {
        'b': {
            'beep': 'boop',
            'foo': 'bar'
        },
        'c': [1, 2, 3],
        'd': true,
        'e': null,
        'f': 3.14,
        'g': new Date(),
        'h': {
            'bip': 6,
            'bop': [4, 5, 6]
        },
        'i': [null, true, {}],
        'j': /.*/,
        'k': noop,
        'l': NaN,
        'm': [],
        'n': () => { },
        'o': (a) => { },
        'p': undefined,
        'q': {
            'data': new Float64Array(10)
        },
        'r': {
            '1': {
                '2': {
                    '3': {}
                }
            }
        }
    }
};

let sampleValuesList01 = ['Hi', 'Hello', '12345', 1, true, undefined, null, {a:1}, ()=>{}, ';drop table table01', ';declare @q  exec master', '<php? kill>']
let sampleValuesList02 = ['Hi', 'Hello', '12345', 1, true, undefined, null, ';drop table table01', ';declare @q  exec master', '<php? kill>']
let sampleValuesList03 = ['Hi', 'Hello', '12345', 1, true, undefined, null]


module.exports.deepPureJson = deepPureJson;
module.exports.deepArrObjComboJson = deepArrObjComboJson;
module.exports.mixTypeJson = mixTypeJson;
module.exports.sampleValuesList01 = sampleValuesList01;
module.exports.sampleValuesList02 = sampleValuesList02;
module.exports.sampleValuesList03 = sampleValuesList03;
