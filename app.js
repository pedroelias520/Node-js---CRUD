const express = require('express')
const app =express();
const router = require('./private/src/routes/routes')
const port = 3030

app.set('views','./view');
app.set('view engine','ejs');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/',router);

app.listen(port,()=>console.log("Server Running -> 3030"))