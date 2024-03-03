// console.log("job application");

const express = require("express");
const jobroutes=  require("./routes/job");
const mongoose = require("mongoose")

const app = express();

mongoose.connect("mongodb+srv://abhay80912:abhay0933@cluster0.iliwfrx.mongodb.net/")
.then(()=> console.log("db connected successfully"))
.catch(() => console.log("problem occured while connecting to db"))

app.use(express.json())

app.use("/api/v1/job/", jobroutes);



app.listen("4002", ()=> console.log("Job Application startedd"));

