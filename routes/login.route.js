let express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");

router.post("/", userController.checkLogin);
router.post("/checktoken", userController.checkToken);
router.post("/register", userController.register);
router.post(
    "/edit-user-info",
    userController.checkTokenMW,
    userController.editUserInfo
);
router.get("/user-info", userController.checkTokenMW, userController.userInfo);

module.exports = router;
