//objeo de conexión
const sequelize = require('../config/seq')
//DataTypes
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const UserModel = require('../models/user')
//crear el objeto usuario
const User = UserModel(sequelize, DataTypes)

//get:obtener datos
exports.traerUser = async (req, res) => {

    try {
        const users = await User.findAll();
        res.status(200).json({
            "success": true,
            "data": users
        })
    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "error de servidor"
        })
    }

}

//obtener recursos por id 
exports.traerUserPorId = async (req, res) => {

    try {
        const userId = await User.findByPk(req.params.id)
        //si usuario no existe
        if (!userId) {
            res.status(422).json(
                {
                    "success": false,
                    "errors": [
                        "uusario no exite"
                    ]
                }
            )
        }
        else {
            res.status(200).json({
                "success": true,
                "data": userId
            })
        }
    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "error de servidor"
        })
    }

}

//POST: crear un nuevo recurso
exports.crearUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            "success": true,
            "data": newUser
        })
    } catch (error) {
        if (error instanceof ValidationError) {
            //poner los mensajes de error en una variable
            const errores = error.errors.map((e) =>
                e.message
            )
            res.status(422)
                .json({
                    "success": false,
                    "errors": errores
                })
        } else {
            //errores de servidor
            res.status(500).json({
                "success": false,
                "errors": "error de servidor"
            })

        }

    }
}


//put-patch 
exports.actualizarUser = async (req, res) => {
    try {
        const upUser = await User.findByPk(req.params.id)
        if (!upUser) {
            //response de usuario no encontrado
            res.status(422)
                .json({
                    "success": false,
                    "errors": [
                        "usuario no existe"
                    ]
                })
        } else {
            //actualizar usuario por id
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            //consultar datos actualizados
            const userAct = await User.findByPk(req.params.id)

            res.status(200).json({
                "success": true,
                "data": userAct
            })
        }
    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "error de servidor"
        })
    }
}

//DELETE: borara usuario 
exports.eliminarUser = async (req, res) => {
    const u = await User.findByPk(req.params.id)
    await User.destroy({
        where: {
            id: req.params.id
        }
    })
    //response
    res.status(200).json({
        "success": true,
        "data": u
    })
}