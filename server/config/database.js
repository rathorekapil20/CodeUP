const mongoose = require('mongoose');
require("dotenv").config();

exports.connect = () => {
    // console.log("DB URL YEHAI" +process.env.MONGODB_URL)

    const url = "mongodb://localhost:27017/CodeUp"
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB Connection Successful"))
    .catch(  (error) => {
        console.log("DB Connection Issues");
        console.error(error);
        process.exit(1);
    } );
};