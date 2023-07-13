const express = require("express");
const app = express();
const morgan = require("morgan");
// req => middleware => res
app.use(morgan("tiny"));
// app.get("/",logger, (req, res) => { // we can use logger in and direct require but i want in all routes so i did this
//   res.json({
//     url: req.data,
//     date: req.date,
//     method: req.appMethod,
//   });
// });
app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(3000, () => {
  console.log("Server Listening on http://localhost:3000");
});
