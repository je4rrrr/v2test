module.exports = function(app) {
 
    const customers = require('../controllers/customer.controller.js');
 
    // Create a new Customer
    app.post('/api/customers', customers.create);
 
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);

    // Retrieve all Customer
    app.get('/api/customers/foo', customers.foo);
 
    // retrieve age by name
    app.get('/api/customers/ageByName/:customerName', customers.findAgeByName);

    // Retrieve a single Customer by Id
    app.get('/api/customers/single', customers.findById);

    // Delete a Customer with Id
    app.delete('/api/customers/:customerId', customers.delete);
}