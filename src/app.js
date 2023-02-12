const express = require('express');
const bodyparser = require('body-parser')
const hbs = require('hbs');
const app = express();
require('./db/conn');

require("dotenv").config();
PORT = process.env.PORT;
const routes = require('./routes/main')

// models
const Slider = require('./models/Slider')
const Carousel = require('./models/Carousel')
const Register = require('./models/Register')

// to get the data from website
app.use(bodyparser.urlencoded({
    extended:true
}))


// to access public folder using static 
app.use('/static', express.static("public"));
app.use('', routes);

// hbs connect
app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials("views/partials")





// databse connection
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/Epic", () => {
//     console.log("DB is connnected");
//     Slider.create([
        
//     ])
// })

app.listen(PORT, () => {
    console.log(`App listning on PORT ${PORT}`);
})