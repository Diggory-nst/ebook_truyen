import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import 'dotenv/config'
import router from "./routes/index.router.js"

const app = express()

// Init middleware

// helmet has a function of protecting the header
app.use(helmet({ crossOriginResourcePolicy: false }))
app.use(morgan('dev'))
app.use(compression())
// incoming data will convert to data type of js ( as Object )
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./src/assets'))

// ## init database

import './dbs/init.mongodb.js'

// Init route

app.use('/', router)

// Handling Error

// Handle Error Of Router

// app.use((req, res, next) => {
//     const error = new Error(`Can't find ${req.originalUrl} on this server !`)
//     error.status = 404
//     next(error)
// })

const sendErrorDev = (error, res, name, statusCode) => {
    console.trace(error);
    return res.status(statusCode).json({
        status: name,
        code: statusCode,
        message: error.message || 'Internal Server Error'
    })
}

const sendErrorPro = (error, res, name, statusCode) => {
    return res.status(statusCode).json({
        status: name,
        code: statusCode,
        message: error.message || 'Internal Server Error'
    })
}

app.use((error, req, res, next) => {

    const statusCode = error.status || 500
    let name
    if (error?.typeError) {
        name = error?.typeError
    } else {
        name = error?.name
    }

    if (process.env.NODE_ENV === 'dev') {
        sendErrorDev(error, res, name, statusCode)
    } else if (process.env.NODE_ENV === 'pro') {
        sendErrorPro(error, res, name, statusCode)
    }
})

export default app