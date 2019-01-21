var express= require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {ToDo} = require("./models/ToDo");
var {User} = require("./models/User");

var app = express();
app.use(bodyParser.json());

app.post("/todos",(req,res) => {
    var todo = new ToDo({
        text : req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(err) => {
        res.status(400).send(err);
    });
});

app.listen(3000,() => {
    console.log("Server started");
});



// var newUser = new User({
//     email : ''
// });

// var newToDo2 = new ToDo({
//     text : 'Winter    '
// });

// newUser.save().then((doc) => {
//     console.log("Save user data",doc);
// },(err) => {
//     console.log(err);
// });

// newToDo2.save().then((doc) => {
//     console.log("Save data",doc);
// },(err)=> {
//     console.log(err);
// });

