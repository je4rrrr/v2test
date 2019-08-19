'use strict';
module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('Customer', {
    name: Sequelize.STRING,
    word: Sequelize.STRING
  }, {
  });
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};