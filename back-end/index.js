const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var database=require('./database');
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/', function(req, res) {
	res.send('Hello from server')
})

app.post("/adddetails",(req,res)=>{
    var val=req.body;
    var a=val[0]
    var querry=`INSERT INTO neoproject.userdetails(name,email,num,date1,location,gender,address) VALUES("${val[0]}","${val[1]}","${val[2]}","${val[3]}","${val[4]}","${val[5]}","${val[6]}")`;
    database.query(querry,function(err,rows){
        if(err)
        throw err
        
    })
})
app.get("/getdetails",(req,res)=>{
    var data1=[];
    var querry=`SELECT * FROM neoproject.userdetails`;
    database.query(querry,function(err,rows){
        if(err)
        throw err
        else{
            res.send(rows)
        }
    })
    
})
app.post("/byname",(req,res)=>{
    var name=req.body[0]
    // console.log(name);
    var querry=`SELECT * FROM neoproject.userdetails WHERE name LIKE "${name}%"`
    database.query(querry,(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/byemail",(req,res)=>{
    var name=req.body[0]
    // console.log(name);
    var querry=`SELECT * FROM neoproject.userdetails WHERE email LIKE "${name}%"`
    database.query(querry,(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/byphno",(req,res)=>{
    var name=req.body[0]
    // console.log(name);
    var querry=`SELECT * FROM neoproject.userdetails WHERE num LIKE "${name}%"`
    database.query(querry,(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/bydob",(res,req)=>{
    var name=req.body[0]
    console.log(name);
    var querry=`SELECT * FROM neoproject.userdetails WHERE date1 LIKE "${name}%"`
    database.query(querry,(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/byaddress",(res,req)=>{
    var name=req.body[0]
    // console.log(name);
    var querry=`SELECT * FROM neoproject.userdetails WHERE address LIKE "${name}%"`
    database.query(querry,(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/byloc",(res,req)=>{
    var name=req.body[0]
    // console.log(name);
    var querry=`SELECT * FROM neoproject.userdetails WHERE location LIKE "${name}%"`
    database.query(querry,(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
  });