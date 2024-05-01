import { Router } from 'express';
import ValidateRequest from '../../../middlewares/ValidationRequest';
import requestSchema from '../validations/index';
import ContactController from '../controllers/index';

const router = Router({ mergeParams: true });
const ctrl = ContactController;

router
	.route('/')
	.get(ctrl.GetContact)
	.post(ValidateRequest(requestSchema.createContact), ctrl.createContact)
	.put(ValidateRequest(requestSchema.updateContact), ctrl.updateContact)
	.delete(ValidateRequest(requestSchema.removeContact), ctrl.removeContact);

	export default router;