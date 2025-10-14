// ________________________  ROOT DIRECTORY ___________________
// MAIN HOME_PAGE will be extracted from here 

// require.main.filename = entry point file (your app.js).
// path.dirname(...) = gives the folder where app.js lives → your root folder.

const path = require("path");
module.exports = path.dirname(require.main.filename);
