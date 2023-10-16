const bookArray=[
    {name:"Javascript Basics",author:"Jim Smith",isbn:"12-12-12-12-1"},
    {name:"Javascript 2",author:"Lisa Jones",isbn:"11-22-33-44-55-2"},
    {name:"Software Engineering",author:"Jim Smith",isbn:"45-67-89-11-22-1"}
];

const book={
    getAllBooks(){
        return bookArray;
    },
    getOneBook(id){
        return bookArray[id];
    },
    addBook(newBook){
        let sql="insert into book values("+newBook.name+","+newBook.author+","+newBook.isbn+")";
        return sql;
    }
}

module.exports=book;