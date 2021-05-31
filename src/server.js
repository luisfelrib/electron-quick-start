const express = require('express')
const app = express()

setInterval(() => {
    console.log("SOME LOG")
}, 5000)

app.get('/', function (req, res) {
  res.send('Hello World')
})

function startServer(port){
    app.listen(port)
}

module.exports = {
    startServer
}