'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Name solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'Name no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'Name no debe ser nulo'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'email debe ser valido'
        },
        notEmpty: {
          args: true,
          msg: 'email no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'email no debe ser nulo'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [5, 10],
          msg: "passwod entre 5 y 10 caracteres"
        },
        notEmpty: {
          args: true,
          msg: 'email no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'email no debe ser nulo'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};