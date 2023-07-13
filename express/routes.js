const express = require("express");
const router = express.Router();
router.get("/login", (req, res) => {
  res.json({ success: true, data: req.data });
});
router.post("/login", (req, res) => {
    const { uname } = req.body;
    if (uname) {
      return res.send("Welcome Owais");
    }
  res.send("please provide it credentials");
});
module.exports = router;
