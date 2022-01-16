// import express from 'express';
const express = require('express')
const app = express();
const bookstore = require('./mongo-setup.js');

app.use(express.json());


app.post("/add/books",(request,response)=>
{
    const data = request.body;
    const addBooks= new bookstore
    (
        {
            BookName:data.BookName,
            Price:data.Price,
            Author:data.Author,
            Language:data.Language,
            AboutAuthor:data.AboutAuthor

        }
    )
    bookstore.exists({BookName:data.BookName})
    .then((data)=>
    {
        // console.log(data)
        if(data)
        {
            console.log("you can not insert")
            response.send("you cannot insert same book");
        }
        else
        {
            addBooks.save()

            .then((data)=>
            {
                console.log(data);
                response.send(data);
            })
            .catch((error)=>
            {
                console.log("error");
            })

        }
        
        
    })
    .catch((error)=>
    {
        console.log("something went wrong")
       

    })
    

});
// we can directly do this in this way by taking unique :true
// addBooks.save()

//             .then((data)=>
//             {
//                 console.log(data);
//                 response.send(data);
//             })
//             .catch((error)=>
//             {
//                 console.log(error);
//             })





        






app.get("/fetch/books",(request,response)=>
{

});

app.put("/update/details", (request,response)=>
{

});

app.delete("/delete/details",(request,response)=>
{
    const id = request.query._id;
    console.log(id)
    if(id)
    {
        bookstore.findByIdAndDelete({_id:id})
    
    .then((data)=>
    {
        response.send("deleted successfully");
        console.log(data);
    })
    .catch((error)=>
    {
        response.send("something went wrong");
    })

    }
    else
    {
        console.log("enter Valid id plaese");
    }

});


























// assigning to port
app.listen(3000,()=>
{
    console.log("Server is up on port 3000")
})