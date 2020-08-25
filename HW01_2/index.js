var http = require('http')
const fs = require('fs')
const myFunc = require('./myfunclib')

const server = http.createServer(function (req, resp) {
  resp.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })


  var array = fs.readFileSync('file.txt').toString().split('\n').map(Number);

  resp.write(`<p>Sum is: ${myFunc.sumDigit(array)}</p>`)
  resp.write(`<p>Number of digits: ${myFunc.countDigit(array)}</p>`)
  resp.end(`<p>Number of add digits: ${myFunc.countOdd(array)}</p>`)

})
server.listen(3213, 'localhost')
console.log('Server running')