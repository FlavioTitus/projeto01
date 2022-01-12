const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.send('ok na home')
})

server.get('/health', (req, res) => {
    res.send('ok na health')
})

server.get('/hello', (req, res) => {
    res.send('ok na hello')
})

server.listen(3000, () => {
    console.log('listening on 3000')
})