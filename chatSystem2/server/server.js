const express = require("express");
const app = express();

const http = require("http").Server(app);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const io = require("socket.io")(http);
const sockets = require("./socket.js");
const MongoClient = require("mongodb").MongoClient;  
var ObjectID = require("mongodb").ObjectID;
const url = 'mongodb://localhost:27017';
const dbName = 'chatSystem'; 
const client = new MongoClient(url);


app.use(express.static(path.join(__dirname, "../dist/chatSystem2/")));

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


MongoClient.connect(url, {poolSize:10, useNewUrlParser:true, useUnifiedTopology:true},function(err, client){
    //
    // Error
    //
    if(err){
        return console.log("Mongo Error ", err);
    }

    //
    // Database
    //
    const dbName = 'chatSystem';
    const db = client.db(dbName);
    db.listCollections().toArray(function(err, result) {
    
        console.log("the collections1: ", result);
    });

});

MongoClient.connect(url, {poolSize:10, useNewUrlParser:true, useUnifiedTopology:true},function(err, client){
    //
    // Error
    //
    if(err){
        return console.log("!!!!!!!!:", err)
    }

    //
    // Database
    //
    const dbName = 'chatSystem';
    const db = client.db(dbName);
    db.listCollections().toArray(function(err, result) {
        //console.log("the collections: ", result);

        const collection = db.collection("users");
        collection.find({}).toArray((err,data)=>{
          if(err) throw err;
          console.log("User data: ", data);
          
        });

        
    });

    //
    // Socket
    //
    sockets.connect(app, io, db);

 
    


 
    
    //
    // Start server on port 3000
    //
    require('./listen.js')(http);
});

//
// Route testing
//
module.exports = app;