import { Request, Response } from 'express';
import ContactService from '../services/index';

class ContactController {
	async createContact(req: Request, res: Response) {
		try {
			const {
				code,
				message,
				data: result,
			} = await ContactService.createContact(req.body);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`ContactController controller [create] error: ${error}`);
		}
	}

	async GetContact(req: Request, res: Response) {
		try {
			const {
				code,
				message,
				data: result,
			} = await ContactService.getContacts();

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`ContactController controller [get] error: ${error}`);
		}
	}

	async updateContact(req: Request, res: Response) {
		try {
			const query: any = req.query;

			const {
				code,
				message,
				data: result,
			} = await ContactService.updateContact(query);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`Task controller [update] error: ${error}`);
		}
	}

	async removeContact(req: Request, res: Response) {
		try {
			const query: any = req.query;

			const {
				code,
				message,
				data: result,
			} = await ContactService.removeContact(query);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`Task controller [create] error: ${error}`);
		}
	}
}

export default new ContactController();
