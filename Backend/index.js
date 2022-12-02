const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const machine = require("./models/machine.js");
const express = require("express");
const app = express();

const formroute=require('./Router/FormRouter')
const searchroute=require('./Router/SearchRouter')
const bgroute=require('./Router/Bgroute')
const editFormRoute=require('./Router/editFormRoute')



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 

//Submit form Data 
app.use('/machinedata',bgroute)
app.use('/submit-form',formroute)
app.use('/machineroute',searchroute)
app.use('/editdata/',editFormRoute)
//________________________________________________________________________________________________________________________________

const dbconnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vinod418:vinod12345@cluster0.zyud3js.mongodb.net/machine_breakdown?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("connected to Database");
    })
    .catch((error) => console.log(error));
};

dbconnect();


app.listen(5560, () => {
  console.log("server started at Port 5560");
});
