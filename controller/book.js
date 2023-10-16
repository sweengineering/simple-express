const express=require('express');
const controller=express.Router();
const book=require('../model/book_model');

controller.get('/',function(request,response){
    let data=book.getAllBooks();
    response.send(data);
});

controller.get('/:id',function(request,response){
    let data=book.getOneBook(request.params.id);
    response.send(data);
});

controller.post('/',function(request, response){
    let data=book.addBook(request.body);
    response.send(data);
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