import { Router } from 'express';
import ValidateRequest from '../../../middlewares/ValidationRequest';
import requestSchema from '../validations/index';
import CompanyController from '../controllers/index';

const router = Router({ mergeParams: true });
const ctrl = CompanyController;

router
	.route('/')
	.post(ValidateRequest(requestSchema.createCompany), ctrl.createCompany)
	.get(ctrl.getCompany)
	.get(ValidateRequest(requestSchema.getCompanyById),ctrl.getCompanyById)
	.put(ValidateRequest(requestSchema.updateCompany), ctrl.updateCompany)
	.delete(ValidateRequest(requestSchema.removeCompany), ctrl.removeCompany);

export default router;
