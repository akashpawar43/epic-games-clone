const mongoose = require('mongoose');


mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/Epic", () => {
    console.log("DB is connnected")
    

    // copy and paste code from db.js file (only once and after that remove it)
})