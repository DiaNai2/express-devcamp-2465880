
const express = require('express')
const {crearUser, 
    traerUser, 
    traerUserPorId,
    actualizarUser, 
    eliminarUser} = require('../controllers/UserController')
const router = express.Router()

//rutas de ususario
router.route('/')
            .get(traerUser)
            .post(crearUser)

router.route('/:id')
            .get(traerUserPorId)
            .put(actualizarUser)
            .delete(eliminarUser)

module.exports = router
