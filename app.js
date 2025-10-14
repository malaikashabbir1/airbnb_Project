// cd "ExpressJS"

// expressJS eik npm package hai
// provides the framework --> flow of doing the things
// It manages everything from receiving the requests and giving the response.

// _____________________________app.use()
// app.use() = middleware for “every request (or certain paths)
// app.use("/") is a wildcard that matches all routes (since all start with /).
// Use it to run middleware on every request.
// For a specific route, e.g. /about, use app.use("/about")

// ______________________________app.get()
// app.get("/about") → runs when you visit the page in browser or send a GET request. used for logging, authentication, parsing, etc.

// ______________________________app.post()
// app.post("/about") → runs when you submit a form with method="post" or use a tool like Postman to send a POST request.

// _________________________ RULE OF THUMB ____________________
// app.use() → global middleware (can catch all routes)
// app.get("/path") → specific GET route handler

// ____________________ MIDDLEWARE ___________________________
// Middleware is a function that sits between request and response, letting you process or modify them before passing control to the next step.

// ___________________________res.send() means the request is ended immediately as we do in the NODEJS by using res.end() 

// ______________________________ ROUTING ________________
// Routing is like setting up rules that say “if a request comes to this URL with this method, do this action.”
// app.get( route , requestHandler) -->  requestHandler is a middleware always a function.

// EXTERNAL MODULES 
const express = require('express')

// _________App is an object (instance) created from the Express class/function. it holds all the functionality of express class.
const app = express()
const port = 3001;


// GLOBAL MIDDELWARE ---> That means they will run for every incoming request,
app.use( "/", (req, res, next) => {
  console.log("1:Global middleware runs for every request" , req.url, req.method);
  next();
});

app.get( "/", (req, res, next) => {
  console.log("GET METHOD" , req.url, req.method);
  next();
});

app.get("/about", (req, res, next) => {
  console.log(" middleware: /about");
  res.send("ABOUT PAGE");
});

app.use( "/", (req, res, next) => {
  console.log("2:Global middleware ", req.url, req.method);
  // _____________ HERE res.send() means the request is ended immediately as we do in the NODEJS by using res.end() 
  // CANNOT SEND NEXT() AFTER res.send()
  res.send("SECOND MIDDLEWARE");
});




// // _________________________ ERROR HANDLING __________________
// app.use( (err,req,res,next) => {
//   console.error(err.stack)
//   res.status(500).send("SOMETHING BROKE!")
// })

// ________________________________SERVER ______________________
// app.listen() actually calls http.createServer(app).listen(...) for you.You are still using a server — it’s just hidden inside app.listen().
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// _____________________________ FALLBACK REQUEST EXAMPLE __________________________
// fallback only runs if no route matched earlier. GET /something-else.
// fallback is a clean way to handle “not found” routes. Error middleware is for actual exceptions (you call next(err) or some route throws an error)

// const express = require('express')
// const app = express()
// const port = 3001;

// // Global middleware
// app.use("/", (req, res, next) => {
//   console.log("1: Global middleware runs", req.url, req.method);
//   next();
// });

// // Route: GET /
// app.get("/", (req, res) => {
//   console.log("GET METHOD", req.url, req.method);
//   res.send("HOME PAGE");
// });

// // Route: GET /about
// app.get("/about", (req, res) => {
//   console.log("GET METHOD", req.url, req.method);
//   res.send("ABOUT PAGE");
// });

// // Fallback middleware (runs if no route handled the request)
// app.use((req, res) => {
//   console.log("Fallback middleware", req.url, req.method);
//   res.send("SECOND MIDDLEWARE (fallback)");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });
