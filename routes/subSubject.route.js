let express = require("express");
let router = express.Router();
let subSubjectController = require("../controllers/subSubject.controller");

router.get("/getAll", subSubjectController.getAllSubSubject);

module.exports = router;
