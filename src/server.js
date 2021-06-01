const express = require('express')
const path = require('path')
const app = express()
const http = require('http').createServer(app)
const io = require("socket.io")(http)
const config = require('./config')

app.use(express.static('src/view'))

setInterval(() => {
    console.log("SOME LOG")
}, 5000)

app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'src', 'view', 'index.html'));
    } catch (err) {
        if (err.syscall === 'lstat') {
            return res.status(404).send()
        }
        return res.status(500).send()
    }
})

app.get(config.apiPath, async (req, res) => {
    res.json({ message: 'Hello World' })
})

io.on("connection", (socket) => {
    console.log("New client connected")
    socket.on("disconnect", () => {
        console.log("Client disconnected")
    })
})

async function startServer(port) {
    http.listen(port)
}

module.exports = {
    startServer
}