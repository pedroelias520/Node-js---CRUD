const express = require('express')
const app =express();
const router = require('./router')
const port = 3030

app.use('public',express.static('public'));
app.set('views','private/src/views/pages');
app.set('view engine','ejs');
app.use('/',router);
app.use(express.static(__dirname +'/public'))
app.listen(port,()=>console.log("Server Running -> 3030"))