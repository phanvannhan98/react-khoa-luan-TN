let express = require("express");
let router = express.Router();
let classroomController = require("../controllers/classroom.controller");

router.get("/", classroomController.getAllClassroom);
router.post("/", classroomController.addNewClassroom);
router.put("/", classroomController.editClassroomInfo);
router.delete("/:id", classroomController.deleteClassroomById);

module.exports = router;
