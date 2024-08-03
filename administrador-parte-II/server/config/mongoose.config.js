const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/products'; 


mongoose.connect(dbURI, {

}).then(() => {
    console.log('Established a connection to the database');
}).catch(err => {
    console.error('Something went wrong when connecting to the database', err);
});
