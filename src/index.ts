import http = require('http')

const hostname = '127.0.0.1'
const port = 3141

const server = http.createServer((req, res) => {
  req.statusCode = 200
  console.log(req)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
