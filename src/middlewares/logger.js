const winston = require('winston')

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.File({filename:'all.log'}),
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
})

const loggerMidd = (req, res, next) => {
    logger.info(req.method, req.path)
    next()
}

module.exports = loggerMidd