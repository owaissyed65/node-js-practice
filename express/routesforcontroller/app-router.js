const express = require("express");
const app = express();
const { people } = require("./data");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  "/api",
  (req, res, next) => {
    req.data = people;
    next();
  },
  require("./routesforcontroller/router")
);
app.listen(3000, () => {
  console.log("Server Listening on http://localhost:3000");
});
