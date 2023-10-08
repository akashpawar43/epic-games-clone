const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyparser = require('body-parser');
const app = express();
require('./db/conn');

require("dotenv").config();
PORT = process.env.PORT || 3000;
const routes = require('./routes/main')

// models
const Slider = require('./models/Slider')
const Carousel = require('./models/Carousel')
const Register = require('./models/Register')

// to get the data from website
app.use(bodyparser.urlencoded({
    extended:true
}))




app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, '/../views'));
app.use(express.static(__dirname + '/../public'));
hbs.registerPartials("views/partials")

app.use('', routes);










app.listen(PORT, () => {
    console.log(`App listning on PORT ${PORT}`);
})