const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()

DB = process.env.DB


mongoose.set('strictQuery', false);
mongoose.connect(`${DB}`, () => {
    console.log("DB is connnected")
    

    // copy and paste code from db.js file (save and run it only once and after that remove it)
})