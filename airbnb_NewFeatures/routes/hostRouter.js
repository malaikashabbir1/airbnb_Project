// Express does not “auto-combine” for your HTML — you still need to point to the full URL in your links/forms.

const path = require("path");
const express = require('express');
const rootDir = require('../util/path');

const hostRouter = express.Router();

hostRouter.get( "/add-home", (req,res,next) =>{
  res.render( 'addHome', {pageTitle: 'Add Your Home', currentPage: 'addHome'})
})

// array is constant but the elements in the array are not constant.
const registeredHomes = [];

hostRouter.post( "/add-home", (req,res,next) =>{
  // for displaying the HouseName in the HomePage.
  console.log("Home Regitered Successfully for: ",req.body);
  registeredHomes.push(req.body);
  res.render( 'homeAdded', {pageTitle: 'Successful Page',currentPage: 'homeAdded'})
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;