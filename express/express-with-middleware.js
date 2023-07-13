const express = require("express");
const app = express();
// req => middleware => res
app.use([require("./middleware-logger"), require("./middleware-authorize")]);
// app.get("/",logger, (req, res) => { // we can use logger in and direct require but i want in all routes so i did this
//   res.json({
//     url: req.data,
//     date: req.date,
//     method: req.appMethod,
//   });
// });
app.get("/", (req, res) => {
  res.json({
    url: req.data,
    date: req.date,
    method: req.appMethod,
    Authorized: req.user,
  });
});
app.get("/about", (req, res) => {
  res.json({
    url: req.data,
    date: req.date,
    method: req.appMethod,
    user: req.user,
  });
});

app.listen(3000, () => {
  console.log("Server Listening on http://localhost:3000");
});
