const express = require('express')

const server = express()

// server.get('/', (req, res) => {
//     res.send('ok na home')
// })

server.get('/health', (req, res) => {
    res
    .status(200)
    .json({status: "tudo certo na rota health"})
})

// server.get('/hello', (req, res) => {
//     res.send('ok na hello')
// })

server.get('/itens', (req, res) => {
    res
    .status(200)
    .json({status: "ok para get de itens"})
})

server.post('/itens', (req, res) => {
    res
    .status(201)
    .json({ id: 001,
            nome: "item01",
            tipo: "utilidades",
            valor: 100 })
})

server.delete('/itens/001', (req, res) => {
    res
    .status(200)
    .json({status: "apagando o item"})
})

server.listen(3000, () => {
    console.log('listening on 3000')
})