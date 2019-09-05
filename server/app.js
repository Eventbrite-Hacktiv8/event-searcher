
require('dotenv').config()
const app = require('express')();
const PORT = process.env.PORT || 3000
const routes = require('./routes');
const body = require('body-parser');
const cors = require('cors')

app.use(body.urlencoded({ extended: false }))
app.use(body.json())
app.use('/', routes);
app.use(cors())
mongoose.connect('mongodb://localhost:27017/hacktivGit', {useNewUrlParser: true})
.then(data => {
    console.log('success')
}).catch(err => {
    console.log('error')
})

app.listen(PORT, function () {
    console.log(`listen to port ${PORT}`)
})