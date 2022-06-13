const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require("fs");
const users = require("./users");

const app = express();
const port = 3001;


app.use(cors());

app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

//problem 1

app.get("/age", function(req, res){
  
    var name = req.query.name;
    var year = req.query.year;
    const todaysDate = new Date()
    const currentYear = todaysDate.getFullYear()
  
    const age = (currentYear - year);
   
    console.log("year :", currentYear)
    console.log("age :", age)
  
    res.send(`
    <p>Hello ${name}</p>
    <p>You are currently ${age} years old</p>`);
    
  })

//problem 2

app.get('/vegetable', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'data.json'));
})

//problem 3

 app.get("/metrics", function(req, res){
  
  var object = req.query.object;
  var metric = req.query.metric;
  var radius = req.query.radius;

  if (metric === "area"){
    const area = (3.14 * radius * radius);
    res.send(`Area of ${object} is ${area}`);
    console.log("area :", area )
  }
  else {
   const volume = ((4/3) * (3.14 ) * radius * radius * radius);
   res.send(`Volume of ${object} is ${volume}`);
   console.log("vol :", volume)
  }

})

// express Project 1

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/student/add',function(req,res){
    const data = req.body;
    users.push(data);
    console.log(data);
    res.send({"result" : "success"})
    fs.writeFile("users.json", JSON.stringify(users), err => {
     
        if (err) throw err; 
       
        console.log("Done writing"); // Success
    });
})

app.get('/student/getDetails', (req, res) => {

    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'users.json'));
})

//express project 2

app.get('/users',(req, res) => {

     const users = 
         ({
        "results":["Rajesh","Ramesh","Sayali","Sanjana"]
         })
     console.log(users);
     res.send(users);
 });
 
app.listen(port, async() => {

     console.log(`APP is Running on ${port}`);

})