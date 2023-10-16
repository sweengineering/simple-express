const express=require('express');
//const port=3000;
const dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT
const bookRouter=require('./controller/book');

const app=express();
app.use(express.json());
app.use(express.urlencoded({}));

app.use('/book',bookRouter);

app.listen(port,function(){
    console.log("Application is listening port "+port);
});
app.get('/',function(request, response){
    response.send("Simple Express example running in "+process.env.DEMO);
});

module.exports=app;