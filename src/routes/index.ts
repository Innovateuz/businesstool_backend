import { Router } from "express";
import FilesRoutes from "../modules/files/routes/index";
import RolesRoutes from "../modules/roles/routes/index";


const router = Router({ mergeParams: true });

router.use("/files", FilesRoutes);
router.use("/roles", RolesRoutes);

export default router;
