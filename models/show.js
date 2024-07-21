const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const showSchema=new Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    theater: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater' },
    date: Date,
    time: String,
    seats: [[Boolean]]
})
module.exports=mongoose.model('Show',showSchema);