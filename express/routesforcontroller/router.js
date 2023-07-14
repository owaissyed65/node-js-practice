const express = require("express");
const router = express.Router();
router.get("/thunder/login", require("../controllers/people").getPeople);
// router.put("/thunder/people/:id", require("../controllers/people").editPeople);
  
// router.delete("/thunder/people/:id",require("../controllers/people").deletePeople);
router.route('/thunder/people/:id').put(require("../controllers/people").editPeople).delete(require("../controllers/people").deletePeople)
module.exports = router;
