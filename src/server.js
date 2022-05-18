const express = require('express');
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;

const app = express();

//midleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://doctor:<password>@cluster0.fla9g.mongodb.net/?retryWrites=true&w=majority`;



app.get('/masud', (req,res)=>{
    res.send('server is runnig')
})






app.listen(port, ()=> console.log('app listen port 5000'))