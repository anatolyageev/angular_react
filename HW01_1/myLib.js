const fs = require('fs')

let createBody = function () {
    return fs.createReadStream(__dirname + '\\index.html', 'utf8')
}

module.exports = {
    f1: createBody
}