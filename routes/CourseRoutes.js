const express = require('express')
const {crearCourse, 
    traerCourse, 
    traerCoursePorId,
    actualizarCourse, 
    eliminarCourse} = require('../controllers/CoursesController')
const router = express.Router()

//rutas de ususario
router.route('/')
            .get(traerCourse)
            .post(crearCourse)

router.route('/:id')
            .get(traerCoursePorId)
            .put(actualizarCourse)
            .delete(eliminarCourse)

module.exports = router