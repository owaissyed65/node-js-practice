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
router.get("/people", (req, res) => {
  res.json(req.data);
});
router.post("/people", (req, res) => {
  if (!req.body.name)
    return res
      .status(400)
      .json({ success: false, msg: "please provide name Value" });
  res.status(201).json({ success: true, person: req.body.name });
});
router.put("/thunder/people/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  let newPeople = req.data.find((e) => e.id === Number(id));
  if (!newPeople)
    return res.status(400).json({
      success: false,
      msg: "No user found with this id " + req.params,
    });

  newPeople = req.data.map((e) => {
    if (Number(id) === Number(e.id)) {
      return {
        ...e,
        name: name,
      };
    }
    return e;
  });
  res.status(201).json({ success: true, person: newPeople });
});

router.delete("/thunder/people/:id", (req, res) => {
  const { id } = req.params;
  let newPeople = req.data.find((e) => e.id === Number(id));
  if (!newPeople) {
    return res.status(400).json({
      success: false,
      msg: "No user found with this id " + req.params,
    });
  }
  // newPeople = req.data.map((data) => {
  //   if (Number(id) === Number(data.id)) {
  //     data = delete data
  //     return {
  //       ...data,
  //     }
  //   }
  //   return data
  // });
  newPeople = req.data.filter((data)=> Number(data.id) !== Number(id))
  res.status(201).json({ success: true, person: newPeople });  
});

module.exports = router;
