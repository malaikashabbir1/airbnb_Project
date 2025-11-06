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

// When a module exports multiple things, we use destructuring to pick only the specific parts we need. This keeps the code clean, organized, and easier to read, instead of importing everything from the module.

// destructuring it because we have multiple exports in the hostRouter.This imports only the hostRouter object.
const {hostRouter} = require("./routes/hostRouter");
const rootDir = require("./util/path")

const app =  express();

// Tells Express which template engine to use for rendering views.
app.set('view engine', 'ejs');
// Specifies the folder where template files are located.
app.set('views', 'views');


// ________________ PARSING OF REQUEST ____________
app.use( express.urlencoded({ extended:true }));
app.use(express.json());

//  _____________Adding middleware for MAKING CSS FILE PUBLIC
//  ________________ BETTER OPTION ___________
app.use(express.static(path.join(__dirname, 'public')));


// USING THE IMPORTED MIDDLEWARE 
app.use(userRouter);
app.use( "/host", hostRouter);


app.get('/test', (req, res) => {
  res.render('test');
});


// ______________________FOR EJS_________________
app.use( (req,res) => {
  // .render('404page') → Tells Express to look for 404page.ejs in the views folder, process it as a template (EJS → HTML), and send the final HTML to the browser.
  res.status(404).render('404page', {pageTitle: '404page', currentPage: '404page'})
})

// SERVER
const port = 3000;
app.listen( port ,  (req,res) =>{
  console.log(`The port running on  http://localhost:${port}`);
})