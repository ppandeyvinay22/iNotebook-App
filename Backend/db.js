const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://pandey14:Vinay121@cluster0.wm1tpp0.mongodb.net/iNotebookDB?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(() =>{
        console.log(`connection successful`) 
    }).catch((err) => console.log(`no connection`));
}

module.exports = connectToMongo;
