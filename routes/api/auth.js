const router = require("express").Router();
const {
  createNewUser,
  loginUser,
} = require("../../controllers/authController");

router.route("/signup").post(createNewUser);

router.route("/login").post(loginUser);

module.exports = router;
