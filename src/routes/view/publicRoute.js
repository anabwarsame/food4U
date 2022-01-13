const { Router } = require("express");
const {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
} = require("../../controller/view/public-controller");

const router = Router();

router.use("/login", renderLoginPage);
router.use("/sign-up", renderSignUpPage);
router.use("/home", renderHomePage);

module.exports = router;
