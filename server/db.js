const mongoose = require('mongoose');

module.exports = () => {
    
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to Db")
    }
    catch (error){
        console.log(error);
        console.log("Could not connect with Db");
    }

}