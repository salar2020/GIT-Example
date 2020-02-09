const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{

res.render('hello my friends :D')

});
app.listen(port);