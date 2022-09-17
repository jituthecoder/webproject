const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('This is for testing project.');
});

app.listen('8000');