const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const movieSchema=new Schema({
    title:{type:String},
    genre:{type:[String]},
    actors:{type:[String]},
    schedule:{type:[{date:{type:Date}},{showtimes:{type:[String]}}]},
})
module.exports=mongoose.model('movie',movieSchema);
