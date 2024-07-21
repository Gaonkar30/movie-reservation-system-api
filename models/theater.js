const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const theatreSchema=new Schema({
    name:{type:String},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    pincode:{type:String},
    seatingArrangement: {type:[[Boolean]]},
});
module.exports=mongoose.model('theatre',theatreSchema);