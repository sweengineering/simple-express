const express=require('express');
const port=3000;
const bookRouter=require('./controller/book');

const app=express();

app.use('/book',bookRouter);

app.listen(port,function(){
    console.log("Application is listening port "+port);
});
app.get('/',function(request, response){
    response.send("Simple Express example");
});

module.exports=app;