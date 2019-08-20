const db = require('../models/index.js');
const Customer = db.customers;
 
// Post a Customer
exports.create = (req, res) => {  
  // Save to MySQL database
  Customer.create({  
    name: req.query.name,
    word: req.query.word,
    age: req.query.age
  }).then(customer => {    
    // Send created customer to client
    res.send(customer);
  });
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
  Customer.findAll().then(customers => {
    // Send all customers to Client
    res.send(customers);
  });
};
 
// Find a Customer by Id
exports.findById = (req, res) => {  
  Customer.findByPk(req.query.customerId).then(customer => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(customer);
  })
};

// Fiund a Customer age by name
exports.findAgeByName = (req, res) => {
  Customer.findOne({ where: {name: req.params.name} }).then (customer => {
    res.send(customer);
  })
}
 
// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a customer with id = ' + id);
  });
};