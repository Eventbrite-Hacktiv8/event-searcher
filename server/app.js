const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',routes);
const port = 3000;


app.listen(port, function(){
    console.log(`app listening on port ${port}`)
})
