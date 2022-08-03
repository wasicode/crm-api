const mongoose = require('mongoose');
require('dotenv').config();
const mongoDBErros = require('mongoose-mongodb-errors');
const uniqueValidator = require('mongoose-unique-validator');



mongoose.Promise = Promise;
mongoose.plugin(mongoDBErros);
// mongoose.plugin(uniqueValidator);
mongoose.connect(process.env.MONGOURI, { 
    useNewUrlParser: true,  
    // useFindAndModify: false, 
    // useCreateIndex: true, 
    useUnifiedTopology: true
 })
    .then(result => {
        console.log("here")
    })
    .catch(err => {
        console.log("error else")
        console.log(err)
    })

