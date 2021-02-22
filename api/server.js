const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()

const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const athleteRouter = require('./athlete-router')

server.use(express.json())
server.use(helmet())
server.use(cors())

server.get("/", (req, res) => {
    res.json({api:"up"})
})

server.use('/api/athlete', athleteRouter)

module.exports = server