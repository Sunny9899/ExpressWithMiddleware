const express= require("express");

const books=require("./books.json");

const app=express();

const logger=(req,res,next)=>{
    res.body="Suryansh Pajiala";
    next();
}



//1 GET
app.get("/",logger,(req,res)=>{
    var api_requested_by=res.body;

    res.send({api_requested_by,books});
})

//2 POST
app.post("/books",logger,(req,res)=>{
    let api_requested_by=res.body;
    const newBooks=[...books,req.body];
   // console.log(newBooks);
   let books2=newBooks;
    res.send({api_requested_by,books2});

})


//3 GET (Single Book) 
app.get("/books/:id",logger,(req,res)=>{
    let api_requested_by=res.body;
    //console.log(req.params.id);
    const oneBook=books.filter((book)=> book.id==req.params.id);
    //console.log(oneBook);
    let book=oneBook;
    res.send({api_requested_by,book});
})

//4 PATCH
app.patch("/books/:id",logger,(req,res)=>{
    let api_requested_by=res.body;
    const replaceBook=books.map(book=>{
        if(req.params.id==book.id){
            return req.body;
        }
        return book;
    })
    let books3=replaceBook;
    res.send({api_requested_by,books3});
})

//5 DELETE
app.delete("/books:id",logger,(req,res)=>{
    let api_requested_by=res.body;
    const delBook=books.filter((book)=> book.id!=req.params.id);
    let books4=delBook;
    res.send({api_requested_by,books4});
})

app.listen(1234,()=>{
    console.log("Listening to port 1234");
})