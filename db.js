const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const cluster = process.env.MONGO_CLUSTER;
const dbname = process.env.MONGO_DB;

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true
});

const mongodb = mongoose.connection;
console.log(`Mongoose Connection Ready State : ${mongoose.connection.readyState}`);
mongodb.on("error", console.error.bind(console, "connection error: "));
mongodb.once("open", function () {
  console.log("Connected successfully");
});
module.exports = mongodb;

// const mysql = require('mysql');
// require('dotenv').config();

// var connection = mysql.createConnection({
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// connection.connect((err)=>{
//     if(!err){
//         console.log("Connected to Database");
//     }else{
//         console.log("ERROR"+err);
//     }
// })
// module.exports = connection;