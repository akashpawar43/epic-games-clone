const bcrypt = require('bcryptjs/dist/bcrypt');
const async = require('hbs/lib/async');
const mongoose = require('mongoose');

const Register = mongoose.Schema({
    firstname: {
        type:String,
        require:true
    },
    lastname: {
        type:String,
        require:true
    },
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true,
        unique:true
    },
    password: {
        type:String,
        require:true
    },
    country: {
        type:String,
        require:true
    }
})

Register.pre("save", async function(next) {


    if (this.isModified("password")) {
        // const passwordHash = await bcrypt.hash(password, 10);
        console.log(`the current password is ${this.password}`)
        this.password = await bcrypt.hash(this.password,10);
        console.log(`the current password is ${this.password}`)
        
    }

    // next used to perform next step or it will just loop it
    next()
})

module.exports = mongoose.model("register",Register)