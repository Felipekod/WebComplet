

const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const http = require('http')

const c = require('./pastaC/index')
console.log(c.ola2)

http.createServer((req, resp) => {
    resp.write('Bom dia!')
    resp.end()
}).listen(8080)