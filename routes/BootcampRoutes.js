const express = require('express')

const router = express.Router()

//establecer las rutas de bootcamp

// get: solo para obtener datos R
router.get('/', (req, res) => {
    res.status(200).json({
        "message": "aqui se van a mostrar todos los bootcamps"
    })
})

//obtener recurso por id
router.get('/:id', (req, res) => {
    res.status(200).json({
        "message": `Aquí va a mostrarse el bootcamp cuyo audio es ${req.params.id}`
    })
})

//post: crear un nuevo recurso
router.post('/', (req, res) => {
    res.status(201).json({
        "message": `Aqí se va a crear un bootcamp`
    })
})

//put-pach: 
router.put('/:id', (req, res) => {
    res.status(200).json({
        "message": `Aqí se va a acualizar el bootcamp ${req.params.id}`
    })
})

//delete: borrar un bootcamp
router.delete('/:id', (req, res) => {
    res.status(200).json({
        "message": `AqUí se va a eliminar el bootcamp ${req.params.id}`
    })
})

module.exports = router
