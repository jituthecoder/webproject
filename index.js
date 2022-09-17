const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('This is after the compliting ssh key.');
});

app.listen('8000');