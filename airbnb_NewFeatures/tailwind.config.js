/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  //  "./views/*.html", // scans all EJS files in views and its subfolders
  "./views/**/*.{html,ejs}", // scans all views and partials
 ],
  theme: {
    extend: {},
  },
  plugins: []
}
