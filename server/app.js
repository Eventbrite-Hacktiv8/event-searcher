if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')
const { errorHandler } = require('./middlewares/errorHandler')

const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/event-searcher', {useNewUrlParser: true})
.then(() => {
    console.log('mongodb connected')
}).catch(err => {
    console.log('failed connect to mongodb', err)
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/', routes)
app.use(errorHandler)

app.listen(PORT, function () {
    console.log(`listen to port ${PORT}`)
})