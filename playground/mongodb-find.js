const MongoClient = require("MongoDB").MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/ToDoApp',(err,db) => {
    if(err){
        return console.log(err); 
        // console.log("Unable to connect to MongoDB server");
    }
    db.collection("Todos").find().toArray().then((document) => {
        console.log("Todos");
        console.log(document);
    }, (err) => {
        console.log("Unable to read" + err);
    });
    db.close();
});

