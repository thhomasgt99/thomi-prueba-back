// var mongoose = require('mongoose')
import mongoose from 'mongoose'
var Schema = mongoose.Schema

var	UserSchema = Schema({
	name:String,
	user_role:String,
	status:Boolean,
	social_profile:Array,
	promote:Boolean,
	rating:Number,
	last_login:String,
	created_at:String,
})

const User = mongoose.model('User', UserSchema)
export default User;
