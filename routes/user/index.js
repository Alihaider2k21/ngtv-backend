import express from "express";
import authValidation from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controllers.getAll);
router.get(
  "/:id?",
  validate(authValidation.id),
  authenticate,
  controllers.getById
);
router.post("/signin", validate(authValidation.signin), controllers.signin);
router.post("/signup", validate(authValidation.signup), controllers.signup);
router.patch(
  "/:id?",
  validate(authValidation.update),
  authenticate,
  controllers.update
);
router.delete(
  "/:id?",
  validate(authValidation.id),
  authenticate,
  controllers.delete
);

export default router;
