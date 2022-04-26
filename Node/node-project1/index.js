const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/users',(req, res) => {

    const users = ( 
        {"page":2,"per_page":6,"total":12,"total_pages":2,
        "data":[
        {"id":1,"email":"ramyathiyagarajan531@gmail.com","first_name":"Ramya","last_name":"Thiyagarajan"},
        {"id":2,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson"},
        {"id":3,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson"},
        {"id":4,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke"},
        {"id":5,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields"},
        {"id":6,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards"},
        {"id":7,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell",}],
        "support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}})

    res.send(users)
})

app.get('/users/:id',(req, res) => {

    const usersfetch = 
       [
        {"id":1,"email":"ramyathiyagarajan531@gmail.com","first_name":"Ramya","last_name":"Thiyagarajan"},
        {"id":2,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Michael"},
        {"id":3,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson"},
        {"id":4,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke"},
        {"id":5,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields"},
        {"id":6,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards"},
        {"id":7,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell"}]
        
   
    usersfetch.forEach(element => {
        
        if(element.id == req.params.id)
        {
         const userData = element ;
         res.send(userData);
        }
        else {
            res.send("Invalid Id");
        }

    });

    //console.log(req.params.id);
})




app.listen(port,() => {
    console.log('APP is Running on 3001')
})