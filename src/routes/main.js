const express = require('express');
const async = require('hbs/lib/async');
const routes = express.Router();
// const bcrypt = require('bcryptjs/dist/bcrypt');

const Slider = require('../models/Slider');
const Carousel = require('../models/Carousel');
const Register = require('../models/Register');
const bcrypt = require('bcryptjs/dist/bcrypt');


routes.get("/", async (req, res) => {
    const slider = await Slider.find()
    const carousel = await Carousel.find()
    // console.log(slider);
    // console.log(carousel);
    res.render('index', {
        slider: slider,
        carousel: carousel
    });
})

routes.get("/games", async (req, res) => {
    const slider = await Slider.findOne()
    // console.log(slider);
    res.render('games', {
        slider: slider,
    });
})



// routes.get('/games/:id',async (req,res)=>{
//     gamesid = req.params.id;
//     const slider = await Slider.findOne({id:gamesid});
//     // console.log(slider) 

//     res.render("games",{
//         slider:slider, 
//     });
// })

routes.get('/games/:link_game_name', async (req, res) => {
    games_id = req.params.link_game_name;
    const slider = await Slider.findOne({ link_game_name: games_id });
    // console.log(slider) ;
    res.render("games", {
        slider: slider,
    });
})


// register form render
routes.get('/register', (req, res) => {
    res.render('register')
})



// register form render
routes.get('/login', async (req, res) => {
    res.render('login')
})

// register form submit
routes.post('/form_register', async (req, res) => {
    // console.log(req.body);
    console.log("form submitted");
    try {
        // const data=await Register.create(req.body)
        const data = new Register({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            country:req.body.country
        }) 
        const register = await data.save();
        // console.log(data);
        res.redirect("/login")

    } catch (e) {
        console.log(e);
        res.redirect("/register")
    }
})

// login form check
routes.post('/login', async (req, res) => {
    try {
        const email = req.body.email;    
        const password = req.body.password;    

        const useremail = await Register.findOne({email:email});

        const isMatch = await bcrypt.compare(password,useremail.password)

        // if(useremail.password === checkpass){
        if(isMatch){
        res.status(201).redirect("/")
        }else{
            // res.send("invalid login detail")
            res.redirect("/login")
        }

    } catch (e) {
        console.log(e);
        res.redirect("/login")
        // res.status(400).send("invalid login detail");
    }
})
module.exports = routes;