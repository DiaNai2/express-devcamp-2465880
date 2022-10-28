//objeo de conexión
const sequelize = require('../config/seq')
//DataTypes
const { DataTypes } = require('sequelize')
//el modelo
const UserModel = require('../models/user')
//crear el objeto usuario
const User = UserModel(sequelize, DataTypes)

//get:obtener datos
exports.traerUser = async (req, res) => {
    const users = await User.findAll();
    res.status(200).json({
        "success": true,
        "data": users
    })
}

//obtener recursos por id 
exports.traerUserPorId = async(req, res) => {
    const userId = await User.findByPk(req.params.id)
    res.status(200).json({
        "success": true,
        "data": userId
    })
}

//POST: crear un nuevo recurso
exports.crearUser = async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(201).json({
        "success": true,
        "data": newUser
    })
}


//put-patch 
exports.actualizarUser = async(req, res) => {
    //actualizar usuario por id
    await User.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      //consultar datos actualizados
      const upUser = await User.findByPk(req.params.id)

    res.status(200).json({
        "success": true,
        "data": upUser
    })
}

//DELETE: borara usuario 
exports.eliminarUser = (req, res) => {
    res.status(200).json({
        "message": `aqui se va a borrar el usuario ${req.params.id}xd`
    })
}