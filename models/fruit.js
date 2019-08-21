'use strict';
module.exports = (sequelize, Sequelize) => {
  const fruit = sequelize.define('fruit', {
    flavour:{
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.FLOAT
    }
  });
  fruit.associate = function(models) {
    // associations can be defined here
    //fruit.belongsTo(models.Customer);
  };
  return fruit;
};