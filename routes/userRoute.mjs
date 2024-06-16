// var express = require('express')
import express from 'express'
// var user = require('../controllers/userController')
import {prueba,getUsers,saveUser,putUser,deleteUser, deleteAll} from '../controllers/userController.mjs'

var api = express.Router()



api.get('/', prueba)
api.get('/getusers', getUsers)
api.post('/register', saveUser)
api.put('/register/:id', putUser)
api.delete('/register/:id', deleteUser)
api.delete('/register', deleteAll)

export default api