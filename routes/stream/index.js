import express from "express";
import controller from "./controller.js"
import validate from "../../middlewares/validate.js"
import authValidation from "../../validations/stream.validation.js"
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();

router.get("/", controller.getAll);
router.get("/history", controller.getHistory);
router.get("/:id", validate(authValidation.id) , controller.getById);
router.post("/", validate(authValidation.add), controller.post);
router.patch("/:id", controller.update);
router.delete("/:id", validate(authValidation.id), controller.delete);

export default router;

