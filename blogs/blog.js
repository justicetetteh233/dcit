const mongoose  = require("mongoose");
const schema =  mongoose.Schema;

//we use the schema to define the structure of our document or details we want to collect;
const blogschema =  new schema({
    NAME: {
        type : String ,
        required: true
    },
    CLASS: {
        type : String ,
        required: true
    },
    AGE:{
        type : String ,
        required: true
    }
}, {timestamps: true});

//we write this code to enable us connect the this blockscheama content table we created.
const Blog = mongoose.model('Blog', blogschema);

// now we export the model so that we can use it in other parts of the project.
module.exports = Blog;