import { Router } from 'express';
import ValidateRequest from '../../../middlewares/ValidationRequest';
import requestSchema from '../validations/index';
import CompanyController from '../controllers/index';

const router = Router({ mergeParams: true });
const ctrl = CompanyController;

router
	.route('/company')
	.post(ValidateRequest(requestSchema.createCompany), ctrl.createCompany)
	.post(ValidateRequest(requestSchema.updateCompany), ctrl.GetCompany)
	.delete(ValidateRequest(requestSchema.removeCompany), ctrl.removeCompany);
