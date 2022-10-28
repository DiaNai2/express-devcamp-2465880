
const sequelize = require('./seq')
const colors = require('colors')

//crear uyna función asicrona para conexión
const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('conexión establecida exitosamente'.bgMagenta.grey)
        // //seleccionar los user: 
        // const users = await User.findAll();
        // console.log(users)
        // //crear user
        // const jane = await User.create({ name: "Naihila2", email: "naihila2@gmail.com", password:"naihila2123" });
        // console.log("Se genera automaticamente el ID:", jane.id);
    } catch (error) {
        console.error(error)
    }

}

module.exports = connectDB