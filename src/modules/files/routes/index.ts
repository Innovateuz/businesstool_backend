import { Router } from "express";
import FileController from "../controllers/index";
import multer from "multer";
import ValidationRequest from "../../../middlewares/ValidationRequest";
import requestSchema from "../validations/index";

const router = Router({ mergeParams: true });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const ctrl = FileController;

router
  .route("/")
  .post(ctrl.uploadFile)
  .get(ValidationRequest(requestSchema.getFile), ctrl.getFile);

router.route("/multiple").post(ctrl.uploadMultipleFile);

export default router;
