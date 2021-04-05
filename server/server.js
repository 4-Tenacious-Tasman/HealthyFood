require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require("../database/index.js");

app.use(express.json());

app.get('/test', (req,res)=>{
  db.query('insert into test (val) values ("it worked");',(err,data)=>{
    if(err){
      console.log(err)
    }else{
      db.query('select * from test;',(err,data)=>{
        if(err){
          console.log(err)
        }else{
          res.send(data)
        }
      })
     }
  })

})
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});