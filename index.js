const express = require('express');
const bodyparser = require('body-parser')
const hbs = require('hbs');
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


// to access public folder using static 
app.use('/static', express.static("./public"));
// hbs connect
app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials("views/partials")
app.use('', routes);






// databse connection
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/Epic", () => {
//     console.log("DB is connnected");
//     Slider.create([
        
//     ])
// })

app.get("/", async (req, res) => {
    const slider = await Slider.find()
    const carousel = await Carousel.find()
    // console.log(slider);
    // console.log(carousel);
    res.render('index', {
        slider: slider,
        carousel: carousel
    });
    return { "dummy": "data"}
})



app.listen(PORT, () => {
    console.log(`App listning on PORT ${PORT}`);
})