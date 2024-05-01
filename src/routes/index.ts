import { Router } from "express";
import FilesRoutes from "../modules/files/routes/index";
import RolesRoutes from "../modules/roles/routes/index";
import UsersRoutes from "../modules/users/routes/index";


const router = Router({ mergeParams: true });

router.use("/files", FilesRoutes);
router.use("/roles", RolesRoutes);
router.use("/users", UsersRoutes);

export default router;
