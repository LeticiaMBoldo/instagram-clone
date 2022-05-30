const express = require('express')
const router = require('./Utils/router')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const mongoConnection = process.env.MONGO_URI

const app = express()

//conectar com o banco de dados
mongoose.connect(mongoConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log('Comnnected to database'))

app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 3333, () => console.log('Server running'));