import { Router } from 'express';
import ValidateRequest from '../../../middlewares/ValidationRequest';
import requestSchema from '../validations/index';
import contactController from '../controllers/index';

const router = Router({ mergeParams: true });
const ctrl = contactController;

router
	.route('/')
	.get(ctrl.getContact)
	.get(ValidateRequest(requestSchema.getContactById), ctrl.getContactById)
	.post(ValidateRequest(requestSchema.createContact), ctrl.createContact)
	.put(ValidateRequest(requestSchema.updateContact), ctrl.updateContact)
	.delete(ValidateRequest(requestSchema.removeContact), ctrl.removeContact);

	export default router;