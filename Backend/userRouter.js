const express = require("express");
const router = express.Router();
const passport = require("passport");
const userControl = require("./useController.js"); 

router.post("/signup", userControl.signup);

router.post(
  "/loginup",
  passport.authenticate("local", { failWithError: true }),
  userControl.loginup
);


function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

router.post("/logout", userControl.logout);

module.exports = router;
