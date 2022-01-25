const express = require('express')
const { PORT } = require('./config')
const { userRouter, mvtRouter } = require('./routes')
const logger = require('./middlewares/logger')

const server = express()

server.use(express.json())
server.use(logger)



server.use('/movimentacao',mvtRouter)
server.use('/usuario',userRouter)


server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})