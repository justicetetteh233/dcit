//shows the packages downloaded.

const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./blogs/blog');

//use to remove the error message displayed
mongoose.set('strictQuery', true);

// express app created.
const app = express();

//put our database link to a constant and use it to connect the database to the back end.
//password dcitproject1
const url ='mongodb+srv://dcit:dcitproject1@cluster0.lfjb0s1.mongodb.net/?retryWrites=true&w=majority';
async function connect() {
    try{
        await mongoose.connect(url);
        console.log('successful connection');
       }catch(error){
         console.log(error);
       }
}
connect();

// connect to database using mongoose. 

//now we can use the database to save our documents
app.get('/' , (req,res) => {
   const blog = new Blog({
        NAME: 'BERNARD NARKO',
        CLASS: '200',
        AGE: '20'
});
 
blog.save()
    .then((result) => {
       res.send(result)
    })
   .catch ((error) => {
       console.log(error);
   });
 })  
    
 
 
/*app.get('/all-blogs', (req, res) =>{
   Blog.find()
     .then((result) => {
        res.send(result);
     })
   .catch((error) => {
    console.log(error);
   });  
}) ;*/

app.get('/single-blog', (req, res) =>{
    Blog.findById("63f124a1f66c51fab40197af")
      .then((result) => {
         res.send(result);
      })
    .catch((error) => {
     console.log(error);
    });  
 }) ;
 
//create a port to listen or show information.
app.listen(3000,() =>{
console.log('server started on port 3000');
});
