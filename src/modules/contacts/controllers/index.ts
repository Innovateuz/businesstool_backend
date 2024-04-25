import { Request, Response } from 'express';
import ContactRepository from '../repo/index';

class ContactController {
	async createContact(req: Request, res: Response) {
		try {
			const {
				code,
				message,
				data: result,
			} = await ContactRepository.createContact(req.body);

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
			} = await ContactRepository.getContactById();

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

	async removeContact(req: Request, res: Response) {
		try {
			const query: any = req.query;

			const {
				code,
				message,
				data: result,
			} = await ContactRepository.updateContact(query);

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
