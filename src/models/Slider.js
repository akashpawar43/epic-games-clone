const mongoose = require("mongoose");

const Slider = mongoose.Schema({
    id:String,
    banner:String,
    logo_img:String,
    game_img:String,
    game_name:String,
    link_game_name:String,
    off_percent:String,
    cut_price:String,
    disccount_price:String,
    after_price:String,
    suggest_img:String,
    version:String,
    pre_img:[
        {
            Id:String,  
            links:String,
        },
    ],
})

module.exports = mongoose.model('slider',Slider)