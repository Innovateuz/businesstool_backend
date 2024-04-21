import { Router } from "express";
import RolesController from "../controllers/index";

const router = Router({ mergeParams: true });

const ctrl = RolesController;

router.
    route("/")
    .post(ctrl.createRole)
    .get(ctrl.getRoles);


export default router;
