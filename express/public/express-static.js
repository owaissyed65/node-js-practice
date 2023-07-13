const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('./public'))
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'pages','index.html'))
// })
app.get('/about',(req,res)=>{
    res.send('about')
})
app.get('/contact',(req,res)=>{
    res.send('contact')
})
app.all('*',(req,res)=>{
    res.send('not found')
})

app.listen(3000,()=>{
    console.log('server is running')
})