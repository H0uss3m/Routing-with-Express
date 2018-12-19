const express = require('express') 

const app = express()

RequestDate =(req,res,next)=>{
    let requestAt = new Date().getHours();
    if ((requestAt>17)||(requestAt<8))
    {
        res.send('  Our office is not open now');
    } 
    next();
}

app.get('/home',RequestDate,(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})
app.get('/contact',RequestDate,(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})
app.get('/ourservices',RequestDate,(req,res)=>{
    res.sendFile(__dirname+'/public/ourservices.html')
})

app.listen(3000,(err)=>{
    if(err) console.log('server is not runnig')
    else console.log('server is running on port 3000')
})