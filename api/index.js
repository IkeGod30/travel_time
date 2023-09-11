require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("../server/config/key");
const mongoose = require("mongoose");

// ##################################################

// const connect = mongoose.connect(config.mongoURI,
//   {
//     useNewUrlParser: true, useUnifiedTopology: true
//     // useCreateIndex: true, useFindAndModify: false
//   })

// ###################################################
// ORIGINAL CODE ABOVE

const connect = mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true, useUnifiedTopology: true, dbName:'test'
    // useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected now...'))
  .catch(err => console.log(err));

app.use(cors({origin:'*'}))


//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('../server/routes/users'));
app.use('/api/product', require('../server/routes/product'));



//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('../uploads'));
module.exports=app