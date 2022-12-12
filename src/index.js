require('dotenv').config();
const express = require("express");
const mongoose= require("mongoose");
const cors = require('cors');
const app = express();
const routes = require('./routes/index');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}),console.log('connected to database')


app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(8080,()=> console.log('server on'))