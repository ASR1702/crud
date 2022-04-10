var mongoose=require('mongoose');
  
var StudentSchema = new mongoose.Schema({
    StudentId:Number,
    Name:String,
    Roll:Number,
    Birthday:Date,
    Address:String
});
api.get('/create', function(req, res) {
    var newStudent = new StudentModel({StudentId:188, 
        Name:"Sam", Roll:1, Birthday:2001-09-08});
});
api.get('/delete', function(req, res) {
    StudentModel.remove({StudentId:188})
 });

 api.get('/read', function(req, res) {
    StudentModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });
 
 api.post('/update', function(req, res) {
    StudentModel.findByIdAndUpdate(req.body.id, 
    {Name:req.body.Name}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});
module.exports = mongoose.model(
    'student', StudentSchema, 'Students')