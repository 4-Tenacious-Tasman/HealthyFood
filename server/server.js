require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require("../database/index.js");

app.use(express.json());

app.get('/test', (req,res)=>{
  db.query("INSERT INTO healthy(value) VALUES('it worked');",(err,data)=>{
    if(err){
      console.log(err)
    }else{
      db.query('select * from healthy;',(err,data)=>{
        if(err){
          console.log(err)
        }else{
          res.send(data.rows)
        }
      })
     }
  })

})
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});