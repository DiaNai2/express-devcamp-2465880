'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      Example:
      await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'jhon@gmail.com',
        password: 'jhon123'
      },
      {
        name: 'Diana',
        email: 'diana@gmail.com',
        password: 'diana123'
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
