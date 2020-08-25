
let sumDigit = function (array) {
    return array.reduce((a, b) => +a + b, +0)
}

let countDigit = function (array) {
    return array.length
}

let countOdd = function (array) {
    return array.reduce((result, el) => {
        if (el % 2 === 0) {
            result++
        }
        return result
    }, 0);
}

module.exports = {
    sumDigit: sumDigit,
    countDigit: countDigit,
    countOdd: countOdd
}