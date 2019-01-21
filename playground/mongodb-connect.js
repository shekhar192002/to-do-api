const MongoClient = require("MongoDB").MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/ToDoApp',(err,db) => {
    if(err){
        return console.log(err); 
        // console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB servver");

    // db.collection("Todos").insertOne({
    //     Text : "Something to do 2",
    //     Completed : false
    // }, (err,result) => {
    //     if(err)
    //     {
    //         return console.log("Connection error " + err);
    //     }
    //     console.log(JSON.stringify(result.ops),undefined,2);
    // });

    db.collection("Users").insertOne({
        Name : "Shekhar Goswami",
        Age : 36,
        Location : "United Kingdom"
    }, (err,result) => {
        if(err)
        {
            return console.log("Connection error " + err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});

