const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{

res.send('hello my friends :D')

});
app.listen(port, ()=>{
    console.log('running port 3000');
});