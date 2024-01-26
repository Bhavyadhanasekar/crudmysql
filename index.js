const express = require('express'),
     app = express();
     bodyParser=require('body-parser');
require('express-async-errors');
const db= require('./db'),
     employeRoutes=require('./controllers/employe.controller')


     //middleware
app.use(bodyParser.json())
app.use('/api/employes',employeRoutes)
app.use(bodyParser.json())

app.use((err,req,res,next)=>{
     console.log(err)
     res.status(err.status||500).send('something went wrong!!!')
})

const PORT = 5023;
//start the express
db.query("SELECT 1")
    .then(()=>{
          console.log('db connection succeeded.')
          app.listen(PORT,
               () =>console.log('server started at : ',PORT))
               
     })
    .catch(err=>console.log('db connection failed. \n' + err))

 

   
    