const express = require('express');

const port = process.env.PORT || 8000;

const app = express();

app.get('/',(req,res)=>{
    res.send('This is after the compliting ssh key.');
});

app.listen(port);