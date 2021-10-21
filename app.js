const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})
app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})