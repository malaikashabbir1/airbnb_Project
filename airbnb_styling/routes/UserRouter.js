// express.Router() → creates a mini router object. A Router works like a small instance of an Express app. It can have its own routes (get, post, etc.) and middleware.

//Instead of keeping all routes (users, products, admin, etc.) in one giant app.js, we can split them into separate files.

// Express does not “auto-combine” for your HTML — you still need to point to the full URL in your links/forms.

// CORE MODULE
const path = require("path");

// Local Module for rootPath
const rootDir = require('../util/path');

// External Module
const express = require('express');
const userRouter = express.Router();

userRouter.get( "/", (req,res,next) =>{
  console.log("GET MIDDLEWARE");
  res.sendFile( path.join( rootDir, 'views', 'home.html' ));
});

module.exports = userRouter;