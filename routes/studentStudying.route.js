let express = require("express");
let router = express.Router();
let studentStudyingController = require("../controllers/studentStudying.controller");

router.get("/", studentStudyingController.getAllStudentStudying);
router.post("/", studentStudyingController.addNewStudentStudying);
router.put("/", studentStudyingController.editStudentStudyingInfo);
router.delete("/:id", studentStudyingController.deleteStudentStudyingById);

module.exports = router;
