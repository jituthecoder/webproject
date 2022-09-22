import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express');
import {generate} from 'critical';
const app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(upload.array()); 
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('home');
});
app.post('/',async(req,res)=>{
    
    console.log(req.body.site_url);
    try{
        const {css, html, uncritical} = await generate({       
            src: req.body.site_url,
            width: 1300,
            height: 900,
          });
    
        res.send(css);  
    }catch(err){
        res.send(err);
    }
      
});
app.listen(port,()=>{
    console.log(`Listening to the port number : ${port}`);
});