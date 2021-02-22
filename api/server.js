const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()

const MongoClient = require('mongodb').MongoClient
const flash = require('connect-flash')

// const authRouter = require('./auth/auth-router')

server.use(express.json())
server.use(helmet())
server.use(cors())

server.get("/", (req, res) => {
    res.json({api:"up"})
})

// server.use('/api/auth', authRouter)

module.exports = server