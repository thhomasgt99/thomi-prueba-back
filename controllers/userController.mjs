// var User = require('../models/userModel')
import User from '../models/userModel.mjs'

//Metodos de prueba
export function prueba(req, res) {
	res.status(200).send({
		message: 'hola mundo desde Node'
	})
}

export function saveUser(req, res) {
	var params = req.body
	const newUser = new User()

	if (params.name && params.social_profile  && params.rating && params.last_login) {
		newUser.name = params.name
		newUser.user_role = params.user_role
		newUser.status = params.status
		newUser.social_profile = params.social_profile
		newUser.promote = params.promote
		newUser.rating = params.rating
		newUser.last_login = params.last_login
		// newUser.created_at = params.created_at
	}

	User.find()
		.then((usuarios) => {
			const filter = usuarios.some(usuario => usuario.name == newUser.name)
			if (filter) {
				res.status(404).send({message: 'el nombre de usuario ya existe'})
			} else {
				newUser.save().then((item) => {
					res.status(200).send(item)
				}).catch((err) => {
					console.error('Error al guardar el usuario', err)
				})
			}
		})
		.catch((err) => {
			console.error('Error al obtener la lista de usuarios:', err);
		});

		return newUser

}

export function getUsers(rep, res) {
	User.find()
		.then((usuarios) => {
			console.log('Lista de usuarios:', usuarios);
			res.status(200).send(usuarios)
		})
		.catch((err) => {
			console.error('Error al obtener la lista de usuarios:', err);
		});
}

export async function putUser(req, res) {
	var userName = await req.params.id
	var updateUser = await req.body
	
	const filtro = { name: userName };
	const actualizacion = { 
		name:updateUser.name, 
		user_role:updateUser.user_role,
		status:updateUser.status,
		social_profile:updateUser.social_profile,
		promote:updateUser.promote,
		rating:updateUser.rating,
		last_login:updateUser.last_login
	};	
	User.updateOne(filtro, actualizacion, { new: true })
  .then(result => res.status(200).send({message: 'Se actualizo correctamente'}))
  .catch(err => console.error('Error al actualizar el documento:', err))
}

export async function deleteUser(req, res){
	var userName = await req.params.id

	const filtro = {name: userName}

	const result = await User.deleteOne(filtro);

	if (result.deletedCount > 0) {
		res.status(200).send({message: 'Usuario eliminado'})
	} else {
		console.error('Usuario no encontrado');
	}
}

export async function deleteAll(req, res){
	const resultado =await User.deleteMany({})
	
	res.status(200).send({message: resultado})
}