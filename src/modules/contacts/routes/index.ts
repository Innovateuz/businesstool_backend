import { Router } from 'express';
import ValidateRequest from '../../../middlewares/ValidationRequest';
import requestSchema from '../validations/index';
import ContactController from '../controllers/index';

const router = Router({ mergeParams: true });
const ctrl = ContactController;

router
	.route('/contact')
	.post(ValidateRequest(requestSchema.createContact), ctrl.createContact)
	.post(ValidateRequest(requestSchema.updateContact), ctrl.GetContact)
	.delete(ValidateRequest(requestSchema.removeContact), ctrl.removeContact);
