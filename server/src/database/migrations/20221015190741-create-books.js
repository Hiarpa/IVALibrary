'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', { 
      isbn: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      bookName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      numberOfPages:{
        type: Sequelize.INTEGER,
        require:true,
      },
      copiesAvailable:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
