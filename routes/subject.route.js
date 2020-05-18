let express = require("express");
let router = express.Router();
let subjectController = require("../controllers/subject.controller");

router.get("/getAll", subjectController.getAllSubject);

module.exports = router;
