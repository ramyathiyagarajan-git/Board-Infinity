const express = require('express');
//const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

// const mongodb = require('mongodb');
// const mongoClient = require('mongodb').MongoClient;

// const mongoUrl = `mongodb+srv://Ramya:mongodb03@cluster0.0sdzo.mongodb.net/Database1?retryWrites=true&w=majority`;

app.use(cors());


// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://Ramya:mongodb03@cluster0.0sdzo.mongodb.net/Database1?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



//  const { MongoClient, ServerApiVersion, MongoRuntimeError } = require('mongodb'); //importing mongo driver
//  const {query} = require('express');

//  const uri = `mongodb+srv://Ramya:mongodb03@cluster0.0sdzo.mongodb.net/Database1?retryWrites=true&w=majority`;

//  const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

//  async function run() {

//  }

// var con = mysql.createConnection({  //create connection
//     host: "localhost",
//     user:"roor",
//     password:"root",
//     database:"training"

// });

app.get('/data', async (req, res) => {  //sending data from mysql to API
 
      const collection = client.db("Database1").collection("Users");

      const result = await collection.find({name:'nairobi'}).toArray()

      

      res.send(result);
   })


// app.get('/user', (req, res) => {  //sending data from mysql to API

//     const sql = "SELECT * FROM user";
//     con.query(sql, (err, result) => {
//         if(err) throw err;
//         res.send(result);
//     });
// })

 app.get('/users',(req, res) => {

     const users = ( 
         {"page":2,"per_page":6,"total":12,"total_pages":2,
        "data":[
         {"id":1,"name":"ramya","date":"22","month":"07","year":"1999"},
         {"id":2,"name":"michael","date":"1","month":"01","year":"2010"},
         {"id":3,"name":"lindsay","date":"15","month":"06","year":"1985"},
         {"id":4,"name":"tobias","date":"25","month":"05","year":"2000"},
         {"id":5,"name":"byron","date":"23","month":"11","year":"2015"},
         {"id":6,"name":"george","date":"5","month":"12","year":"1979"},
         {"id":7,"name":"rachel","date":"16","month":"03","year":"1989"}],
         "support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}})

     res.send(users);
 })

 app.get('/users/:id',(req, res) => {

    const usersfetch = 
    [
        {"id":1,"name":"ramya","date":"22","month":"07","year":"1999"},
        {"id":2,"name":"michael","date":"1","month":"01","year":"2010"},
        {"id":3,"name":"lindsay","date":"15","month":"06","year":"1985"},
        {"id":4,"name":"tobias","date":"25","month":"05","year":"2000"},
        {"id":5,"name":"byron","date":"23","month":"11","year":"2015"},
        {"id":6,"name":"george","date":"5","month":"12","year":"1979"},
        {"id":7,"name":"rachel","date":"16","month":"03","year":"1989"}
    ]
        
    
   

    usersfetch.forEach(element => {

        if(element.id == req.params.id)
        {
        //  const userData = element ;
        //  res.send(userData);
         var currentTime = new Date();
         var year = currentTime.getFullYear();
         var age = year - req.params.year;
         res.send(age);
         //console.log(req.params.id);
        }
        else {
            res.sendStatus("Invalid Id");
        }

    });
    
})




app.listen(port, async() => {

//     run().catch(console.dir);

     console.log(`APP is Running on ${port}`);

    
//     client.connect(async err => {

//       if(err) throw err;
//       console.log("DB Connected");

//     });

    // client.connect(err => {
    
    //     const collection = client.db("Database1").collection("Users"); // perform actions on the collection object
    //     if(err) throw err;
    //     console.log("DB Connected");
    //     client.close();
    //   });



    //  mongoClient.connect(mongoUrl, (err, db) => {
    //     if(err) throw err;
    //     console.log("DB Connected");
    //     db.close();

    //  })

      



    //  con.connect(function(err){  //to connect with sql
    //      if(err) throw err;
    //      console.log("Connected");

    //  }) 

    //   const sql = "DELETE FROM user WHERE name= 'ram'"; 
    //   con.query(sql, (err, result) =>{
    //   if(err) throw err;
    //      console.log(" Number of records deleted "+ result.affectedRows);
    // }) 

    
    // const sql = "SELECT * FROM user WHERE name = john ORDER BY name DESC"; //to fetch particular tuple data from table  
    // con.query(sql,(err, result) => {
    //     if(err) throw err;
    //      console.log(result);
    // });    

    // const sql = "SELECT * FROM user"; //to fetch data from table
    // con.query(sql,(err, result) => {
    //     if(err) throw err;
    //     console.log(result);
    // }); 


    // const sql = "INSERT INTO user(name, address) VALUES ('john', 'paris')";  //insert data into table

    // con.query(sql,(err, result) => {
    //     if(err) throw err;
    //     console.log("Table Element inserted successfully");

    // }); 


    //  const sql = "CREATE TABLE user (name VARCHAR(255), address VARCHAR(255))"; //table name = user , headers name and address of type varchar

    // con.query(sql, (err, result) => { //creating table from node
    //     if(err) throw err;
    //     console.log("Table Created");
    // })

       
    //  con.query("CREATE DATABASE Training", function(err, result) { //creating db from node
    //         if(err) throw err;
    //         console.log("Training DB Created")
    //     })

    // });


})