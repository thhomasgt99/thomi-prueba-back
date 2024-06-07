'use strict'

var mongoose = require('mongoose')
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

module.exports = mongoose.model('User', UserSchema)