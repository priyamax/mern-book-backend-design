const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookname:{
        type:String,
        minLength: 2,
        required: true
    },
    authorname:{
        type:String,
        minLength: 5,
        required: true
    },
    published:{
        type:Number,
        minLength: 4,
        required: true
    },
    link:{
        type:String,
        required:true
    },
});
const book1=mongoose.model('book1', bookSchema, 'Book');
module.exports = book1;