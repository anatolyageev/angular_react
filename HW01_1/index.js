var http = require('http')
const fs = require('fs')
const myLib = require('./myLib.js')

const server = http.createServer(function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    myLib.f1().pipe(resp)
})
server.listen(3212, 'localhost')
console.log('Server running')