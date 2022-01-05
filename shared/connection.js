
const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://riya:iWnSpSkdfBNrhr0K@cluster0.se382.mongodb.net/FullStack?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology:true})
    } catch(err) {
        console.log(err);
        process.exit();
    }
}
