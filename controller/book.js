const express=require('express');
const controller=express.Router();

controller.get('/',function(request,response){
    response.send("This will return all books");
});

controller.get('/:id',function(request,response){
    response.send("This will return book which id ="+request.params.id);
});

controller.post('/',function(request, response){
    console.log(request.body);
    response.send('This will add a new book');
});

controller.put('/:id',function(request,response){
    console.log(request.body);
    response.send("This will update the book which id="+request.params.id);
});

controller.delete('/:id',function(request, response){
    response.send("This will delete the which id="+request.params.id);
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