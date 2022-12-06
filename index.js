const express = require('express');
var cors = require('cors');
const connection = require('./db');
const inventoryRoute = require('./routes/inventoryRoute');
const expressFileUpload = require('express-fileupload');
const app = express();
app.use(cors());
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer()
app.use(expressFileUpload());
app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(upload.array()); 
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.send('Zendesk App'));
module.exports = app;
require('dotenv').config();
app.listen(process.env.PORT, () => {
    console.log(`App listening on port ` + process.env.PORT)
})

app.use('/manager', inventoryRoute);