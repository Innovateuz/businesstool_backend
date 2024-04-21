import { Router } from "express";
import ValidateRequest from "../../../middlewares/ValidationRequest";
import requestSchema from "../validations/index";

import ClientsController from "../controllers/index";

const router = Router({ mergeParams: true });
const ctrl = ClientsController;

router
    .route("/")
    .post(ValidateRequest(requestSchema.createClient), ctrl.createClient)
    .delete(ValidateRequest(requestSchema.removeClient), ctrl.removeClient);
