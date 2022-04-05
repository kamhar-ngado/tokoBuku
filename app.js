const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb://admin:3ukrUpJSTAhhIg4P@cluster0-shard-00-00.bpmvz.mongodb.net:27017,cluster0-shard-00-01.bpmvz.mongodb.net:27017,cluster0-shard-00-02.bpmvz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-12hbnc-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database"))
  .then(() => {
    app.listen(5000); 
  })
  .catch((err) => console.log(err));
