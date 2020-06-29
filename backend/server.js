const express = require('./node_modules/express');
const cors = require('./node_modules/cors/lib');
const mongoose = require('mongoose'); //helps connect to outr mongoDB database

require('./node_modules/dotenv/types').config(); //configures to have environment variables in dotenv file


//how to create the express server
const app = express();
const port = process.env.PORT || 5000;

//cors middleware allows us to parse json
app.use(cors());
app.use(express.json());

//connecting the database 
const uri = process.env.ATLAS_URI;  //database uri
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, } //uri stores our database
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//listens to our port created
app.listen(port, () => {
    console.log(`Server is running on port: ${port} `);
});