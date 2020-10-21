
/*
===========================================================================================================
                                File:Passport.js
                                Student Name:Sai Krishna Amaraneni
                                Student ID:301151074
                                Date:23 October 2020
===========================================================================================================
*/
// Import Mongoose and password Encrypt 
var mongoose = require('mongoose'); 
var bcrypt   = require('bcrypt-nodejs'); 
 
// define the schema for User model 
var userSchema = mongoose.Schema({ 
    // Using local for Local Strategy Passport 
    local: { 
        name:String,
        email: String, 
        password: String, 
    } 
 
}); 
 

// Verify if password is valid or not 
userSchema.methods.validPassword = function(password) { 
    if (password===this.local.password){
        return true
    } else{
        return false
    }
}; 
 
// create the model for users and expose it to our app 
module.exports = mongoose.model('User', userSchema); 
