// cd "ExpressJS\airbnb_styling"
// ________________________ EXPRESS ROUTERS ______________________________
// Express Router: Organize routes into separate modules/files.

// ___________________ For ADMINS _______________________
// just change the path add /host

// ______________ PRIVATE FILES MAKING PUBLIC ___________________
// All the files that we create in the server all are private, if we want to make any file public. Firstly create a public folder and then add the file here and then add the middleware in main file named static.



// EXTERNAL MODULE
const express = require('express');
const path = require("path");


// LOCAL MODULE
const userRouter = require('./routes/UserRouter');
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./util/path")

const app =  express();

// ________________ PARSING OF REQUEST ____________
app.use( express.urlencoded({ extended:true }));
app.use(express.json());

app.use("/", (req,res,next) =>{
  console.log(" 1st MIDDLEWARE ", req.url, req.method);
  next();
})

// USING THE IMPORTED MIDDLEWARE 
app.use(userRouter);
app.use( "/host", hostRouter);

// Adding middleware for MAKING CSS FILE PUBLIC
app.use(express.static(path.join(rootDir, 'public'), {
  etag: false,          // Disable ETag
  lastModified: false,  // Disable Last-Modified
  cacheControl: false   // Disable Cache-Control
}))

// ADDING THE 404 ERROR 
app.use( (req,res,next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404page.html'));
})

// SERVER
const port = 3000;
app.listen( port ,  (req,res) =>{
  console.log(`The port running on  http://localhost:${port}`);
})