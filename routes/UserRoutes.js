
const express = require('express')
const router = express.Router()
//establecer las rutas de usuario
//crear rutas (endpoint url)para los usuarios
//get:obtener datos
router.get('/', (req, res)=>{
    res.status(200).json({
        "message": "vamos a mostrar todos los usuariosxd"
    })
})
//obtener recursos por id 
router.get('/:id' , (req, res)=>{
    res.status(200).json({
        "message": `vamos a mostrar en usuario cuyo id es ${req.params.id}xd`
    })
})
//POST: crear un nuevo recurso
router.post('/',  (req, res)=>{
    res.status(201).json({
        "message": "aqui se vaa crear un usuarioxd"
    })
})
//put-path 
router.put('/:id' , (req, res)=>{
    res.status(200).json({
        "message": `aqui se va a actualixar el usuario ${req.params.id}xd`
    })
})
//DELETE: borara usuario 
router.delete('/:id' , (req, res)=>{
    res.status(200).json({
        "message": `aqui se va a borrar el usuario ${req.params.id}xd`
    })
})
module.exports = router
