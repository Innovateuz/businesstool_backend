import { Router } from "express";
import ValidateRequest from "../../../middlewares/ValidationRequest";
import requestSchema from "../validations/index";

import UsersController from "../controllers/index";

const router = Router({ mergeParams: true });
const ctrl = UsersController;

router
    .route("/")
    .post(ValidateRequest(requestSchema.createUser), ctrl.createUser)
    .delete(ValidateRequest(requestSchema.removeUser), ctrl.removeUser);

export default router;
