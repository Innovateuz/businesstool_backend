import { Router } from "express";
import FilesRoutes from "../modules/files/routes/index";
import RolesRoutes from "../modules/roles/routes/index";
import CompanyRoutes from "../modules/companies/routes/index"
import ContactsRoutes from "../modules/contacts/routes/index"


const router = Router({ mergeParams: true });

router.use("/files", FilesRoutes);
router.use("/roles", RolesRoutes);
router.use('/company', CompanyRoutes);
router.use('/contact', ContactsRoutes);

export default router;
