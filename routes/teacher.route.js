let express = require("express");
let router = express.Router();
let teacherController = require("../controllers/teacher.controller");

router.get("/getAll", teacherController.getAllTeacher);
router.post("/edit-teacher-info", teacherController.editTeacherInfo);
router.post("/add-teacher", teacherController.addNewTeacher);
router.delete("/delete-teacher/:id", teacherController.deleteTeacherById);

module.exports = router;
