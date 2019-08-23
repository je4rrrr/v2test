'use strict';
module.exports = (sequelize, Sequelize) => {
  const fruit = sequelize.define('fruit', {
    flavour:{
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.FLOAT
    },
    customerId: {
      type: Sequelize.INTEGER
    }
  });
  
  return fruit;
};