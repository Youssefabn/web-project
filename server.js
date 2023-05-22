require('dotenv').config()
const express = require('express')
const path = require('path')
const mongoose=require('mongoose')
const app = express()

app.set('view engine', 'ejs')

//connect to mongodb
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))

//routes
app.use('/login', require('./routes/api/login'))
app.use('/register',require('./routes/api/register'))

//home
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','index.html'))
})

//everything else
app.get('/*',(req,res)=>{
    res.sendStatus(404)
})

app.listen(5050,()=>{
    console.log('server running...')
})