const db = require('../models/index.js');
const Fruit = db.fruits;

 
// Post a Fruit
exports.create = (req, res) => {  
  // Save to MySQL database
  Fruit.create({  
    flavour: req.query.flavour,
    price: req.query.price,
    customerId: 1
  }).then(fruit => {    
    // Send created fruit to client
    res.send(fruit);
  });
};
 
// FETCH all Fruits
exports.findAll = (req, res) => {
  Fruit.findAll().then(fruits => {
    // Send all fruits to Client
    res.send(fruits);
  });
};
 
// Find a Fruit by Id
exports.findById = (req, res) => {  
  Fruit.findByPk(req.query.fruitId).then(fruit => {
    
    res.send(fruit);
  })
};


 
// Delete a Fruit by Id
exports.delete = (req, res) => {
  const id = req.params.fruitId;
  Fruit.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a fruit with id = ' + id);
  });
};