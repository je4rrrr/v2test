module.exports = function(app) {
 
    const fruits = require('../controllers/fruit.controller.js');
 
    // Create a new fruit
    app.post('/api/fruits', fruits.create);
 
    // Retrieve all fruit
    app.get('/api/fruits', fruits.findAll);
 


    // Retrieve a single fruit by Id
    app.get('/api/fruits/single', fruits.findById);

    // Delete a fruit with Id
    app.delete('/api/fruits/:fruitId', fruits.delete);
}