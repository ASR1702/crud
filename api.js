var mongoose = require('mongoose');
var express = require('express'); 
var StudentModel = require('./studentschema');
  
// Connecting to database
var query = 'mongodb+srv://AmanSingh:nJkhVmE9xgTMckF@crud.mnhsq.mongodb.net/CRUD?retryWrites=true&w=majority'
const db = (query);
mongoose.Promise = global.Promise;
  
mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
  
module.exports = router;