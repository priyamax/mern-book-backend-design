const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        minLength: 5,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required: true,
        enum: {
            values: ['Chennai','Hyderabad'],
            message: '{VALUE} is not a valid address'
        }
    },
    phone:{
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    role: {
        type: String,
        required:true,
        enum: {
            values: ['user'],
            message: '{VALUE} is not a valid role'
        }
    }
});

const User1=mongoose.model('User1', userSchema, 'User');
module.exports = User1;