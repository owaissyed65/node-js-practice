const express = require("express");
const app = express();
const { people } = require("./data");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./methods-public"));
app.use(
  (req, res, next) => {
    req.data = people;
    next();
  },
  require("./routes")
);
// app.post("/login", (req, res) => {
//   console.log(req.body);
//   res.send("login");
// });
app.listen(3000, () => {
  console.log("Server Listening on http://localhost:3000");
});
