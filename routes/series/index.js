import express from "express";
import controller from "./controller.js"
import validate from "../../middlewares/validate.js"
import authValidation from "../../validations/series.validation.js"
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();

router.get("/", authenticate,controller.getAll);
router.get("/:id", validate(authValidation.id) , controller.getById);
router.get("/genre/:id", validate(authValidation.id) , controller.getByGenreId);
router.get("/allrecord/123" , controller.getAllRecord);
router.post("/", validate(authValidation.add), controller.post);
router.patch("/:id", validate(authValidation.update), controller.update);
router.delete("/:id", validate(authValidation.id), controller.delete);

export default router;

