// cd "ExpressJS\airbnb"
// ________________________ EXPRESS ROUTERS ______________________________
// Express Router: Organize routes into separate modules/files.

// ___________________ For ADMINS _______________________
// just change the path add /host

// EXTERNAL MODULE
const express = require('express');
const path = require("path");


// LOCAL MODULE
const userRouter = require('./routes/UserRouter');
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./util/path")

const app =  express();

// ________________ PARSING OF REQUEST ____________
// express.urlencoded() → for handling form submissions (URL encoded).
app.use( express.urlencoded({ extended:true }));
// express.json() → for handling JSON data (like from APIs or frontend apps).
app.use(express.json());

app.use("/", (req,res,next) =>{
  console.log(" 1st MIDDLEWARE ", req.url, req.method);
  next();
})

// USING THE IMPORTED MIDDLEWARE 
app.use(userRouter);
app.use( "/host", hostRouter);

// ADDING THE 404 ERROR 
app.use( (req,res,next) => {
  //______ res.sendFile() is used to send a file from your server to the client
  res.status(404).sendFile(path.join(rootDir, 'views', '404page.html'));
})

// SERVER
const port = 3000;
app.listen( port ,  (req,res) =>{
  console.log(`The port running on  http://localhost:${port}`);
})