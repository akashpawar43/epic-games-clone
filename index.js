const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyparser = require('body-parser');
const app = express();
require('./src/db/conn');

require("dotenv").config();
PORT = process.env.PORT || 3000;
const routes = require('./src/routes/main')

// models
const Slider = require('./src/models/Slider')
const Carousel = require('./src/models/Carousel')
const Register = require('./src/models/Register')

// to get the data from website
app.use(bodyparser.urlencoded({
    extended:true
}))




app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials("views/partials")

app.use('', routes);

app.use(express.static(__dirname + '/public'));









app.listen(PORT, () => {
    console.log(`App listning on PORT ${PORT}`);
})