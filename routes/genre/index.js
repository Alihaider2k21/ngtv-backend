import express from "express";
import controller from "./controller.js"
import validate from "../../middlewares/validate.js"
import authValidation from "../../validations/genre.validation.js"

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", validate(authValidation.id) , controller.getById);
router.get("/allrecord/123" , controller.getAllRecord);
router.post("/", validate(authValidation.add), controller.post);
router.patch("/:id", validate(authValidation.update), controller.update);
router.delete("/:id", validate(authValidation.id), controller.delete);

export default router;

