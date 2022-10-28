const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const listendpoints = require('express-list-endpoints')

//dependencia  a la conexiòn a bd
const connectDB = require('./config/db')

//dependencias de las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')

//establecer el archivo de configuración 
//con variables de entorno del proyecto

dotenv.config({
    path: './config_env/config.env'
})

//1. crear el objeto app
const app = express()

app.use(express.json())

//ejcutar la conexiòn a bd
connectDB()

app.use('/api/v1/bootcamps',bootcampRoutes )
app.use('/api/v1/users', userRoutes)

console.log(listendpoints(app))

//3. ejecutar servidor de desarrollo de express
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto: ${process.env.PORT}`.bgGreen)
})