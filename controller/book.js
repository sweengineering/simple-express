const express=require('express');
const controller=express.Router();

controller.get('/',function(request,response){
    response.send("This will return all books");
});

controller.get('/:id',function(request,response){
    response.send("This will return book which id ="+request.params.id);
});

controller.post('/',function(request, response){
    response.send('This will add a new book');
});

/*controller.get('/:fname/:lname',function(request,response){
    response.send("Hello "+request.params.fname+" "+request.params.lname);
});*/


controller.use(function(request,response,next){
    console.log("This is a Middleware");
    next();
});

/*controller.get('/test',function(request,response){
    response.send('This is test');
});*/

module.exports=controller;