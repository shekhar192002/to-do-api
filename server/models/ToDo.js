var mongoose = require("mongoose");

var ToDo = mongoose.model('ToDo',{
    text : {
        type : String,
        minlength: 5,
        trim : true
    },
    completed : {
        type : Boolean,
        default:false
    },
    completedAt : {
        type : Number,
        default : null
    }
});

module.exports = {ToDo};