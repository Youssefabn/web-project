const express = require('express')
const path = require('path')
const mongoose=require('mongoose')
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(5050,()=>{
    console.log('server running...')
})