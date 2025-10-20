// Express does not “auto-combine” for your HTML — you still need to point to the full URL in your links/forms.

const path = require("path");
const express = require('express');
const rootDir = require('../util/path');

const hostRouter = express.Router();

hostRouter.get( "/add-home", (req,res,next) =>{
  console.log("GET MIDDLEWARE");
  res.sendFile( path.join (rootDir,'views', 'addHome.html') )
})

hostRouter.post( "/add-home", (req,res,next) =>{
  console.log("POST  MIDDLEWARE")
  console.log(req.body);
  res.sendFile( path.join( rootDir, 'views', 'homeAdded.html') )
});

module.exports = hostRouter;