var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username : String,
	password : String
});

UserSchema.plugin(passportLocalMongoose); //Adds in the methods for us to use

module.exports= mongoose.model("user", UserSchema);