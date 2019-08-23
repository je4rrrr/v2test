'use strict';
module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('Customer', {
    name: {
      type: Sequelize.STRING
    },
    word: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    }
  }
  );
  
  return Customer;
};