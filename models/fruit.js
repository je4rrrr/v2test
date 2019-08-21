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
  fruit.associate = function(models) {
    // associations can be defined here
    fruit.belongsTo(models.Customer, {foreignKey: 'customerId', as: 'Customer'});
  };
  return fruit;
};