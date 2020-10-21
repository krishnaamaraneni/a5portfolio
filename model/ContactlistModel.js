
/*
===========================================================================================================
                                File:Passport.js
                                Student Name:Sai Krishna Amaraneni
                                Student ID:301151074
                                Date:23 October 2020
===========================================================================================================
*/
const mongoose=require('mongoose')
const ContactlistSchema= mongoose.Schema({
    name:String,
    number:String,
    email:String
})
const ContactlistModel=mongoose.model('ContactlistModel',ContactlistSchema)
module.exports=ContactlistModel