const express = require('express')
const app =express();
const router = require('./router')
const port = 3030


app.set('views','private/src/views/');
app.set('view engine','ejs');
app.use(express.static('public'));
app.use('/',router);


app.listen(port,()=>console.log("Server Running -> 3030"))